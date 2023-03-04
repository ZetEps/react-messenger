import styled from "styled-components";
import {rotate} from "../../style/keyframes";
import {ListItem} from "@mui/material";
interface Props{
    height:string,
    width:string,

}

export const Loader = (props:Props)=>{
    return <LoaderItem {...props}/>
}



const LoaderItem = styled.div<Props>`
  height:${state => state.height};
  width: ${state => state.width};
  border-radius: 50%;
  border:3px solid transparent;
  border-top: 3px solid #fff;
  animation: ${rotate} 1.5s infinite linear;
  
`