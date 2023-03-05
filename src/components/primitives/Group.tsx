import styled from "styled-components";

interface Props{
    $width?:string,
    $justifyContent?:"space-between" | "space-around",
    $padding?:string
}



export const Group = styled.div<Props>`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    width: ${state => state.$width};
    justify-content: ${state => state.$justifyContent};
    padding: ${state => state.$padding};
`