import {ButtonContainer} from "./Auth";
import {Form, regex} from "../components/Form";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {style} from "../style/style";
import {useLang} from "../hooks/useLang";
import {Header} from "./Auth";
import {toggleAuthPage} from "../redux/features/configSlice";
import {useDispatch} from "react-redux";
import {SubmitHandler, useForm} from "react-hook-form";

interface Inputs{
    email:string,
    password:string
}
const SignIn = ()=>{

    const {text, lang} = useLang(SignIn.name)
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm<Inputs>()
    const switchToRegister = ()=>{
        dispatch(toggleAuthPage());
    }

    const onSubmit:SubmitHandler<Inputs> = (data)=>{

    }

    return (
        <>
            <Header>{text.header[lang]}</Header>
            <Form minHeight={'300px'} onSubmit={handleSubmit(onSubmit)}>
                <Input inputType={'email'} placeholder={'Email'} type={'email'} {...register('email', {pattern:regex.email, required:true})}/>
                <Input inputType={'password'} placeholder={'Password'} type ={'password'} {...register('password', {required: true})}/>
                <ButtonContainer>
                    <Button background={style.btn.color.blue} color={'#fff'}>{text.signIn[lang]}</Button>
                    <Button onClick={switchToRegister} background={style.btn.color.transparent} color ={'#000'}>{text.register[lang]}</Button>
                </ButtonContainer>
            </Form>
        </>
    )
}

export default SignIn;