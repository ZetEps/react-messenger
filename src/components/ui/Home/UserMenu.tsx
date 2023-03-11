import React from "react";
import {Button, ButtonType} from "../../primitives/Button";
import {UserIcon} from "../../primitives/UserIcon";
import img from "./../../../temp/img.jpg"
import {Menu} from "@mui/material";
import styled from "styled-components";
import {RiLogoutCircleRLine as Logout} from "react-icons/ri"
import {UserMenuItem} from "./UserMenuItem";
import {Logo} from "../../../pages/Auth";
import {logout} from "../../../firebase/auth/auth";
import Application from "../../../features/Application/Application";

interface Props{

}
export const UserMenu:React.FC<Props> = (props)=>{
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null)
    };

    const handleOnClick = (callback:()=>void)=>{
        handleClose();
        callback();
    }

    return(
        <>
            <Button
                onClick={handleClick}
                $type={ButtonType.Transparent}
                background='transparent'
            >
                <UserIcon width={40} height={40} src={img}/>
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <UserMenuItem icon={Logout} name={"Logout"} onClick={()=>{handleOnClick(Application.logoutAccount)}}/>
            </Menu>
        </>
    )
}


const Container = styled.div`
`