import styled from "styled-components";
import React from "react";
import {StatusPointer} from "./StatusPointer";

interface Props{
    width:number,
    height:number,
    src:string,
    $isActive?:boolean
}

export const UserIcon:React.FC<Props> = (props)=>{


    return (
        <Container>
            <Icon {...props}/>
            {props.$isActive && <Active/>}
        </Container>
    )
}




const Container = styled.div`
    position: relative;
`


const Icon = styled.img.attrs<Props>((props)=>({
    width:props.width,
    height:props.height,
    src:props.src
}))<Props>`
    border-radius: 100%;
  cursor: pointer;
`

const Active = styled(StatusPointer)`
    outline: 2px solid #fff;
  top: 30px;
  right:0;
`