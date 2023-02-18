import React, {useEffect, useState} from "react";
import Register, {
    Inputs,
    PasswordComplexityItemType,
    PasswordStatusProps,
    PasswordStatusType,
    PasswordStatusTypes
} from "../../pages/Register";
import {useLang} from "../../hooks/useLang";
import {SubmitHandler, useForm} from "react-hook-form";
import {ButtonContainer, Header} from "../../pages/Auth";
import {Form, regex} from "../../components/Form";
import {Link} from "../../components/Link";
import {style} from "../../style/style";
import {Button} from "../../components/Button";
import styled from "styled-components";
import {Input} from "../../components/Input";
import "./../../index.css";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {within} from "@storybook/testing-library";



export default {
    title:"Register",
    component:Register,
    decorators:[(Story)=>(<Container>
        <Story/>
    </Container>)]

} as ComponentMeta<typeof Register>

     export const Primary = ()=>{

        const [password, setPassword] = useState<string>('')
        const [passwordComplexity, setPasswordComplexity] = useState<number>(0);

        useEffect(()=>{
            setPasswordComplexity(getPasswordComplexity)
        },[password])


        const {text, lang} = useLang(Register.name)
        const {register, handleSubmit} = useForm<Inputs>()

        const switchToSignIn = ()=>{
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

     const Template: ComponentStory<typeof Primary> = ()=><Primary/>
    export const PrimaryFiledForm = Template.bind({})
    PrimaryFiledForm.play = async ({canvasElement}) =>{
        const canvas = within(canvasElement)

    }




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
const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(241,246,251);
  padding-top: 30px;
`