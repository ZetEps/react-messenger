import {Container, Logo} from "./Auth";
import styled from "styled-components";
import {Typography} from "@mui/material";
import {style} from "../style/style";

export const Preview = ()=>{

    return (
           <PreviewContainer>
               <Logo fontSize="300px"/>
               <Typography
                   fontSize="40px"
                   fontWeight="bold"
                   color={style.text.color.eastBay}
                   marginTop={'75px'}
               >
                   React Messenger
               </Typography>
           </PreviewContainer>
    )
}


const PreviewContainer = styled(Container)`
  padding-top: 100px;
`