import {keyframes} from "styled-components";
import {style} from "./style";

export const rotate = keyframes`
    0%{
      transform: rotate(0);
    }
    
  100%{
    transform: rotate(360deg);
  }
`


export const slideFromRight = keyframes`
    0%{
      transform: translateX(100px);
    }
  
  100%{ 
    transform: translateX(0px);
  }
`