import React from "react";
import {Menu} from "@mui/material";
import {Button, ButtonType} from "../../primitives/Button";
import {IoIosNotificationsOutline} from "react-icons/io"
import styled from "styled-components";
import {style} from "../../../style/style";
import {MenuItem} from "../../primitives/MenuItem";
import {useLang} from "../../../hooks/useLang";
import {NotificationMenuItem} from "./NotificationMenuItem";
import {StatusPointer} from "../../primitives/StatusPointer";
interface Props{
    hasNotification?:boolean
}

export const NotificationMenu = (props:Props)=> {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null)
    };

    const getText = useLang("Home");

    return (
        <Container>
            <Button
                onClick={handleClick}
                $type={ButtonType.Transparent}
                background='transparent'
            >
                <NotificationIcon/>
            </Button>
            {props.hasNotification && <StatusPointer/>}
            <Menu

                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <Header>{getText("Header", "Notification")}</Header>
                <NotificationMenuItem isActive={true}/>
                <NotificationMenuItem isActive={true}/>
                <NotificationMenuItem isActive={true}/>
            </Menu>
        </Container>
    );

}

const Container = styled.div`
    position: relative;
`

const NotificationIcon = styled(IoIosNotificationsOutline)`
    font-size:30px;
    color:${style.text.color.slateGrey}
`


const Header = styled.h3`
    padding: 15px;
  font-weight: bold;
  font-size: 16px;
`