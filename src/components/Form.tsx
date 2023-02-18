import styled from "styled-components";
import {ComponentHasChildrenType} from "../global"
import {SubmitHandler} from "react-hook-form";
import React from "react";

interface Props extends ComponentHasChildrenType{
    minHeight?:string,
    onSubmit: React.FormEventHandler<HTMLFormElement>
}
export const regex = {
    email:/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
}
export const Form = (props:Props)=>{


    return (
        <Container {...props} onSubmit={props.onSubmit}>
            {props.children}
        </Container>
    )
}


const Container = styled.form<Props>`
  background: #fff;
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 400px;
  width: 85%;
  min-width: 270px;
  min-height: ${props => props.minHeight ? props.minHeight: '440px'};
  border-radius: 10px;
`