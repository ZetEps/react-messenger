import styled from "styled-components";
import {MenuItem} from "../../primitives/MenuItem";
import {IoMdLogOut} from "react-icons/io"
import {Group} from "../../primitives/Group";
import {IconType} from "react-icons";
import React, {MouseEventHandler} from "react";
import {jsx} from "@emotion/react";
import JSX = jsx.JSX;
import { style } from "../../../style/style";

interface Props{
    icon:IconType
    name:string,
    onClick?:MouseEventHandler<HTMLLIElement>
}

export const UserMenuItem:React.FC<Props> = (props)=>{
    return (
        <Container onClick={props.onClick}>
            <Group>
                <Icon>{props.icon({width:'16px'})}</Icon>
                <Name>{props.name}</Name>
            </Group>
        </Container>
    )
}


const Container = styled(MenuItem)`
    width: 200px;
`

const LogOut = styled(IoMdLogOut)`
    text-align: center;
`
const Item = styled.div`
  color:${style.text.color.indigo};
  opacity: .9;
  padding: 0 5px;
`
const Icon = styled(Item)`
    height: 16px;
`
const Name = styled(Item)`

`
