import React from "react";
import styled from "styled-components";
import {Group} from "../../primitives/Group";
import {UserIcon} from "../../primitives/UserIcon";
import img from "../../../temp/img.jpg";
import {style} from "../../../style/style";
import {MenuItem} from "../../primitives/MenuItem";

interface Props{
    isActive?:boolean
}


export const NotificationMenuItem:React.FC<Props> = (props) => {

    return (
        <Container>
            <UserIcon width={40} height={40} src={img} $isActive={props.isActive}/>
            <Group $width='calc(100% - 40px)' $padding="0 10px">
                <Group $justifyContent={"space-between"} $width="100%">
                    <Name>Tom Red</Name>
                    <Time>10:00:00</Time>
                </Group>
                <Group $width='100%'>
                    <Content>Some Text Here bla-bla bla-bla  bla-bla bla-bla bla-bla bla-bla bla-bla bla-bla bla-bla bla-bla</Content>
                </Group>
            </Group>
        </Container>
    )
}


const Container = styled(MenuItem)`
  width: 350px;
  display: flex;
  padding: 10px;
  cursor: pointer;
`

const Name = styled.span`
    font-weight: 500;
`

const Time = styled.span`
  color: ${style.text.color.indigo};
  opacity: .5;
`

const Content = styled.div`
  width: 100%;
  color: ${style.text.color.indigo};
  opacity: .7;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow:hidden
`