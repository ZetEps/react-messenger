import styled from "styled-components";
import {style} from "../../style/style";


interface Props{
    color:string,
    background:string,

}



export const Button = styled.button<Props>`
  width:100%;
  height: 40px;
  text-align: center;
  color:${props => props.color};
  background:${props => props.background};
  color:${props => props.color};
  border-radius: ${style.border.radius.md};
  border: 1px solid ${style.border.color.blue};
  cursor: pointer;
  
  &:active{
    transform: scale(.95);
  }
`