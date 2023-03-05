import styled from "styled-components";
import {rotate} from "../../style/keyframes";
import {CircularProgress, ListItem} from "@mui/material";
interface Props{
    size:string

}

export const Loader = (props:Props)=>{
    return <CircularProgress color = "secondary" size={props.size}/>
}
