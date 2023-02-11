import styled from "styled-components";
import {style} from "../style/style";

interface Props{
    inputType: "text" | "password" | "email"
}

export const Input = styled.input.attrs<Props>(props => ({
    type:props.inputType
}))<Props>`
  width: 100%;
  padding: 10px 20px;
  border: 1px solid ${style.border.color.blue};
  border-radius: ${style.border.radius.sm};
  &::placeholder{
    opacity: .5;
  }
`