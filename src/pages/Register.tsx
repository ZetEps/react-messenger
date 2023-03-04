import styled from "styled-components";
import {Form, regex} from "../components/primitives/Form";
import {Input} from "../components/primitives/Input";
import {Button} from "../components/primitives/Button";
import {style} from "../style/style";
import {useLang} from "../hooks/useLang";
import {Link} from "../components/primitives/Link";
import {ButtonContainer} from "./Auth";
import {Header} from "./Auth";
import {useDispatch} from "react-redux";
import {toggleAuthPage} from "../redux/features/configSlice";
import {SubmitHandler, useForm} from "react-hook-form";
import React, {useEffect, useState} from "react";
import {createNewUser, setUserName} from "../firebase/auth/auth";
import {setUserInfo} from "../redux/features/userSlice";
import {useNotificator} from "../hooks/useNotificator";
import {useLogger} from "../hooks/useLogger";

export interface Inputs{
    name:string,
    surname:string,
    email:string,
    password:string
}
export interface PasswordComplexityItemType{
    enable?:boolean
}

export type PasswordStatusType = 'default' | 'weak' | 'simple' | 'mid' | 'extreme'

export interface PasswordStatusProps{
    status:PasswordStatusType
}

enum RegisterError{
    AlreadyRegister = 'auth/email-already-in-use',
}

export const PasswordStatusTypes = {
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


    const getText = useLang("Register")
    const pushNotification = useNotificator()
    const logger = useLogger()
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
        if(password.length < 6 && password.length !== 0) return 1;
        if(password.length > 8) passwordComplexity++;
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

        return {status:type, statusText:getText('passwordStatus', type)}
    }

    const checkSubmit= ():boolean=>{
        const passwordComplexity = getPasswordComplexity()
        if(passwordComplexity <= 1){
            pushNotification(getText('notifications', 'weak'))
            return false;
        }
        return true
    }
    const onSubmit:SubmitHandler<Inputs> = (data)=>{
        if(!checkSubmit()) return;
        const {name, surname, email} = data
        createNewUser(email, password).then(userCredential=>{
            setUserName(`${name} ${surname}`)
            dispatch(setUserInfo({name, surname, email}));
        }).catch((e:Error) =>{
            if(e.message.includes(RegisterError.AlreadyRegister)){
                pushNotification(getText('error','emailAlreadyInUse'))
            }else{
                logger.write(e);
            }
        })
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
            <Header>{getText('header')}</Header>
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
                    <Link color={style.text.color.slateGrey}>{getText('passwordComplexity')}</Link>
                </PasswordStatusContainer>
                <ButtonContainer>
                    <Button type={"submit"} background={style.btn.color.blue} color={'#fff'}>{getText('register')}</Button>
                    <Button onClick={switchToSignIn} background={style.btn.color.transparent} color ={'#000'}>{getText('signIn')}</Button>
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

