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
import {loginCurrentUser} from "../firebase/auth/auth";
import {useLogger} from "../hooks/useLogger";
import {useNotificator} from "../hooks/useNotificator";
import {useState} from "react";
import {auth} from "./../firebase/auth/auth";
interface Inputs{
    email:string,
    password:string
}

enum Errors{
    NoAccount = 'auth/user-not-found',
    IncorrectAccount = 'auth/wrong-password',
    BadInternetConnection = 'auth/network-request-failed'

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
        loginCurrentUser(data.email, data.password).catch((e:Error)=>{
            if(e.message.includes(Errors.IncorrectAccount)){
                pushNotification(getText('errors', 'incorrectAccount'))
            }else if(e.message.includes(Errors.NoAccount)){
                pushNotification(getText('errors', 'noAccount'))
            }else if(e.message.includes(Errors.BadInternetConnection)){
                pushNotification(getText('errors', 'requestFailed'))
            }
            else{
                logger.write(e)
            }
        })

    }

    return (
        <>
            <Header>{getText('header')}</Header>
            <Form minHeight={'300px'} onSubmit={handleSubmit(onSubmit)}>
                <Input inputType={'email'} placeholder={'Email'} type={'email'} {...register('email', {pattern:regex.email, required:true})}/>
                <Input inputType={'password'} placeholder={'Password'} type ={'password'} {...register('password', {required: true})}/>
                <ButtonContainer>
                    <Button background={style.btn.color.blue} color={'#fff'} $loading={isLoading}>{getText('signIn')}</Button>
                    <Button onClick={switchToRegister} background={style.btn.color.transparent} color ={'#000'}>{getText('register')}</Button>
                </ButtonContainer>
            </Form>
        </>
    )
}

export default SignIn;