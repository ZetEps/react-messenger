import SignIn from "../../pages/SignIn";
import {useLang} from "../../hooks/useLang";
import {SubmitHandler, useForm} from "react-hook-form";
import {ButtonContainer, Header} from "../../pages/Auth";
import {Form, regex} from "../../components/Form";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import {style} from "../../style/style";
import {Inputs} from "../../pages/Register";
import React from "react";
import {StoryContainer} from "./Register.stories";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import {userEvent, within} from "@storybook/testing-library";


export default {
    title:"SignIn",
    component:SignIn,
    decorators:[(Story)=>(<StoryContainer>
        <Story/>
    </StoryContainer>)]
} as ComponentMeta<typeof SignIn>



const Primary = () => {

    const getText = useLang("Register");
    const {register, handleSubmit} = useForm<Inputs>()
    const switchToRegister = ()=>{
    }

    const onSubmit:SubmitHandler<Inputs> = (data)=>{

    }

    return (
        <>
            <Header>{getText("header")}</Header>
            <Form minHeight={'300px'} onSubmit={handleSubmit(onSubmit)}>
                <Input inputType={'email'} placeholder={'Email'} type={'email'} {...register('email', {pattern:regex.email, required:true})}/>
                <Input inputType={'password'} placeholder={'Password'} type ={'password'} {...register('password', {required: true})}/>
                <ButtonContainer>
                    <Button background={style.btn.color.blue} color={'#fff'}>{getText('signIn')}</Button>
                    <Button onClick={switchToRegister} background={style.btn.color.transparent} color ={'#000'}>{getText('register')}</Button>
                </ButtonContainer>
            </Form>
        </>
    )
}

const Template: ComponentStory<typeof Primary> = ()=><Primary/>
export const PrimaryFiledForm = Template.bind({})

PrimaryFiledForm.play = async ({canvasElement}) =>{
    const canvas = within(canvasElement)
    const emailInput = canvas.getByPlaceholderText('Email');
    const passwordInput = canvas.getByPlaceholderText("Password");
    const submitBtn = canvas.getByText("Sign In");

    await userEvent.type(emailInput, "email@example.com", {
        delay:100
    })
    await  userEvent.type(passwordInput, "password example123EEE", {
        delay:100
    })
    await  userEvent.click(submitBtn)
}