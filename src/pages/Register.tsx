import styled from "styled-components";
import {Form, regex} from "../components/Form";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {style} from "../style/style";
import {useLang} from "../hooks/useLang";
import {Link} from "../components/Link";
import {ButtonContainer} from "./Auth";
import {Header} from "./Auth";
import {useDispatch} from "react-redux";
import {toggleAuthPage} from "../redux/features/configSlice";
import {SubmitHandler, useForm} from "react-hook-form";
import React, {useEffect, useId, useState} from "react";
import {pushNotification} from "../redux/features/notificationSlice";
import {nanoid} from "nanoid";

interface Inputs{
    name:string,
    surname:string,
    email:string,
    password:string
}

type PasswordStatusType = 'default' | 'weak' | 'simple' | 'mid' | 'extreme'

interface PasswordStatusProps{
    status:PasswordStatusType
}


const PasswordStatusTypes = {
    default:{
        complexity:0,
        status:"default" //"No password Provided"
    },
    weak:{
        complexity: 1,
        status:"weak"//"Weak"
    },
    simple:{
        complexity:2,
        status:"simple" //Simple
    },
    mid:{
        complexity:3,
        status:"mid"//"strong",
    },
    extreme:{
        complexity:4,
        status:"extreme"//"extremely strong"
    }
}

const Register = ()=>{

    const [password, setPassword] = useState<string>('')
    const [passwordComplexity, setPasswordComplexity] = useState<number>(0);

    useEffect(()=>{
        setPasswordComplexity(getPasswordComplexity)
    },[password])


    const {text, lang} = useLang(Register.name)
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm<Inputs>()

    const switchToSignIn = ()=>{
        dispatch(toggleAuthPage());
    }

    const handleInput = (e:React.FormEvent<HTMLInputElement>)=>{
        setPassword(e.currentTarget.value);
    }

    const getPasswordComplexity = ():number=>{
        let passwordComplexity = 0;
        if(password.length > 6) passwordComplexity++;
        if(password.search(/[a-z]/) !== -1) passwordComplexity++;
        if(password.search(/[0-9]/) !== -1) passwordComplexity++;
        if(password.search(/[A-Z]/) !== -1) passwordComplexity++

        if(!passwordComplexity  && password.length > 0) passwordComplexity++
        return passwordComplexity;
    }

    const getPasswordStatusProperties = ()=>{
        const passwordComplexity = getPasswordComplexity()
        let type:string;
        if(passwordComplexity === PasswordStatusTypes.weak.complexity){
            type = PasswordStatusTypes.weak.status
        }
        else if(passwordComplexity === PasswordStatusTypes.mid.complexity){
            type = PasswordStatusTypes.mid.status
        }
        else if(passwordComplexity === PasswordStatusTypes.simple.complexity){
            type = PasswordStatusTypes.simple.status
        }
        else if(passwordComplexity === PasswordStatusTypes.extreme.complexity){
            type = PasswordStatusTypes.extreme.status
        }
        else{
            type = PasswordStatusTypes.default.status
        }

        return {status:type, statusText:text.passwordStatus[type][lang] }
    }

    const checkSubmit= ():boolean=>{
        const passwordComplexity = getPasswordComplexity()
        if(passwordComplexity <= 1){
            dispatch(pushNotification({notification:{id:nanoid(), content:text.notifications.weak[lang]}}))
            return true;
        }

        return false
    }
    const onSubmit:SubmitHandler<Inputs> = (data)=>{
        if(!checkSubmit()) return;
    }

    const renderPasswordComplexity = ()=>{
        let loops = passwordComplexity;
        const result = []
        for(let i = 0; i < 4; i++){
            if(loops > 0){
                result.push(<PasswordComplexityItem enable key={i}/>)
                loops--;
            }else{
                result.push(<PasswordComplexityItem key = {i}/>)
            }
        }

        return result;
    }
    const {statusText, status} = getPasswordStatusProperties()
    return (
        <>
            <Header>{text.header[lang]}</Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputAuth inputType={"text"} placeholder= {"First Name"} type={'name'} {...register('name', {required:true})}/>
                <InputAuth inputType={"text"} placeholder = {"Last Name"} type ={'surname'} {...register('surname', {required:true})}/>
                <InputAuth inputType={"email"} placeholder = {"Email"} type ={'email'} {...register('email', {pattern:regex.email, required:true})}/>
                <InputAuth inputType={"password"} placeholder = {"Password"} type ={'password'} {...register('password', {required:true})} onChange={handleInput}/>
                <PasswordComplexityContainer>
                    {renderPasswordComplexity()}
                </PasswordComplexityContainer>
                <PasswordStatusContainer>
                    <PasswordStatus status={status as PasswordStatusType}>{statusText}</PasswordStatus>
                    <Link color={style.text.color.slateGrey}>{text.passwordComplexity[lang]}</Link>
                </PasswordStatusContainer>
                <ButtonContainer>
                    <Button type={"submit"} background={style.btn.color.blue} color={'#fff'}>{text.register[lang]}</Button>
                    <Button onClick={switchToSignIn} background={style.btn.color.transparent} color ={'#000'}>{text.signIn[lang]}</Button>
                </ButtonContainer>
            </Form>
        </>
    )
}

export default Register;



const InputAuth = styled(Input)`
  box-shadow: 0 3px 5px rgb(0 0 0 / 3%);
`

const PasswordComplexityContainer = styled.div`
    display: flex;
  justify-content: space-between;
`

interface PasswordComplexityItemType{
    enable?:boolean
}

const PasswordComplexityItem = styled.div<PasswordComplexityItemType>`
  width: 80px;
  height: 4px;
  border-radius: ${style.border.radius.sm};
  transition: all .6s linear;
  background: linear-gradient(to left, ${style.widgets.passwordComplexity.color.disabled} 50%, ${style.widgets.passwordComplexity.color.enabled} 50%) right;
  background-size: 200% 100%;
  background-position: ${(props)=> props.enable ? "left" : "right"};
`

const PasswordStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const PasswordStatus = styled.span<PasswordStatusProps>`
  color:${(props)=>style.widgets.passwordStatus[props.status]}
`

