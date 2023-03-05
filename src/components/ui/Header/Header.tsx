import styled from "styled-components";
import {Logo} from "../../../pages/Auth";
import {style} from "../../../style/style";
import {NotificationMenu} from "./NotificationMenu";
import {UserIcon} from "../../primitives/UserIcon";
import {Group} from "../../primitives/Group";
import img from "../../../temp/img.jpg"

export const Header = ()=>{

    return (
        <Container>
            <Group>
                <Logo fontSize='50px'/>
                <Text>React Messenger</Text>
            </Group>
            <Group>
                <NotificationMenu hasNotification={true}/>
                <Group $width="150px" $justifyContent='space-around' $padding={"0 10px"}>
                    <UserIcon width={40} height={40} src={img}/>
                </Group>
            </Group>
        </Container>
    )
}



const Container = styled.div`
  padding: 0 50px;
  display: flex;
  position: fixed;
  align-items: center;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  box-shadow: 0 3px 15px rgb(0 0 0 / 7%);
  justify-content: space-between;
`

const Text = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-left: 10px;
  color:${style.text.color.eastBay}
`

const UserName = styled.p`
`

