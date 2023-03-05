import styled from "styled-components";



interface Props{
    width:number,
    height:number,
    src:string
}

export const UserIcon = styled.img.attrs<Props>((props)=>({
    width:props.width,
    height:props.height,
    src:props.src
}))<Props>`
    border-radius: 100%;
  cursor: pointer;
`