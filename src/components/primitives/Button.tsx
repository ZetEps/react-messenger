import styled from "styled-components";
import {style} from "../../style/style";
import {ComponentHasChildren} from "../../global";
import React from "react";
import {Loader} from "./Loader";

export enum ButtonType{
    Transparent = 'transparent'
}

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?:string,
    background?:string,
    $loading?:boolean,
    $type?:ButtonType
}

export const Button = (props:Props)=>{

    const getContent = ()=>{
        if(props.$loading) return <Loader size="25px"/>
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
  border: ${state => state.$type === ButtonType.Transparent ? 'none' : `1px solid ${style.border.color.blue}`};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:active{
    transform: scale(.95);
  }
`