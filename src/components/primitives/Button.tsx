import styled from "styled-components";
import {style} from "../../style/style";
import {ComponentHasChildrenType} from "../../global";
import React from "react";
import {Loader} from "./Loader";


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color:string,
    background:string,
    $loading?:boolean
}

export const Button = (props:Props)=>{

    const getContent = ()=>{
        if(props.$loading) return <Loader width="25px" height="25px"/>
        else return props.children
    }
    return <ButtonItem {...props}>{getContent()}</ButtonItem>
}


const ButtonItem = styled.button<Props>`
  width:100%;
  height: 40px;
  text-align: center;
  color:${props => props.color};
  background:${props => props.background};
  color:${props => props.color};
  border-radius: ${style.border.radius.md};
  border: 1px solid ${style.border.color.blue};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:active{
    transform: scale(.95);
  }
`