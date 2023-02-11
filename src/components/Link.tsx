import styled from "styled-components";
import {style} from "../style/style";

interface Props{
    color?:string,
    fontSize?:string
}

interface Attrs{
    href:string,
}

export const Link = styled.a.attrs<Attrs>(props=>({
    href:props.href
}))<Props>`
  color:${props => props.color ? props.color: style.text.color.default};
  font-size: ${props => props.fontSize ? props.fontSize : style.text.fontSize.default};
  cursor: pointer;
  text-decoration: underline;
`
