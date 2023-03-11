import {ButtonContainer} from "./Auth";
import {Form, regex} from "../components/primitives/Form";
import {Input} from "../components/primitives/Input";
import {Button} from "../components/primitives/Button";
import {style} from "../style/style";
import {useLang} from "../hooks/useLang";
import {Header} from "./Auth";
import {toggleAuthPage} from "../redux/features/configSlice";
import {useDispatch} from "react-redux";
import {SubmitHandler, useForm} from "react-hook-form";
import {useLogger} from "../hooks/useLogger";
import {useNotificator} from "../hooks/useNotificator";
import {useState} from "react";
import Application from "../features/Application/Application";
interface Inputs{
    email:string,
    password:string
}

enum Errors{
    NoAccount = 'auth/user-not-found',
    IncorrectAccount = 'auth/wrong-password',
    BadInternetConnection = 'auth/network-request-failed',
    TooManyRequests = "auth/too-many-requests"

}
const SignIn = ()=>{

    const getText = useLang("SignIn")
    const logger = useLogger()
    const pushNotification = useNotificator()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm<Inputs>()
    const [isLoading, setIsLoading] = useState(false);
    const switchToRegister = ()=>{
        dispatch(toggleAuthPage());
    }

    const onSubmit:SubmitHandler<Inputs> = (data )=>{
        setIsLoading(true);
        Application.loginIntoAccount(data.email, data.password).catch((e:Error)=>{
            for(const error of Object.values(Errors)){
                if(e.message.includes(error)){
                    const errorText = error.replace("auth/", '').replaceAll("-", "_");
                    pushNotification(getText('errors', errorText))
                    setIsLoading(false);
                    return
                }
            }
            logger.write(e)
            setIsLoading(false);
        })

    }

    return (
        <>
            <Header>{getText('header')}</Header>
            <Form minHeight={'300px'} onSubmit={handleSubmit(onSubmit)}>
                <Input inputType={'email'} placeholder={'Email'} type={'email'} {...register('email', {pattern:regex.email, required:true})}/>
                <Input inputType={'password'} placeholder={'Password'} type ={'password'} {...register('password', {required: true})}/>
                <ButtonContainer>
                    <Button background={style.btn.color.blue} color={'#fff'} $loading={isLoading} disabled={isLoading}>{getText('signIn')}</Button>
                    <Button onClick={switchToRegister} background={style.btn.color.transparent} color ={'#000'}>{getText('register')}</Button>
                </ButtonContainer>
            </Form>
        </>
    )
}

export default SignIn;