import React from "react";
import {Menu, MenuItem} from "@mui/material";
import {Button, ButtonType} from "../../primitives/Button";
import {IoIosNotificationsOutline} from "react-icons/io"
import styled from "styled-components";
import {style} from "../../../style/style";
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

    return (
        <Container>
            <Button
                onClick={handleClick}
                $type={ButtonType.Transparent}
                background='transparent'
            >
                <NotificationIcon/>
            </Button>
            {props.hasNotification && <Pointer/>}
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem>123</MenuItem>
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

const Pointer = styled.div`
  position: absolute;
  top: 6px;
  right:6px;
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #6888e3;
`