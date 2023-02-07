import styled from "styled-components";
import {ComponentHasChildrenType} from "../global"

interface FormType extends ComponentHasChildrenType{

}

export const Form = (props:FormType)=>{


    return (
        <Container>
            {props.children}
        </Container>
    )
}



const Container = styled.div`
  background: #fff;
  display: flex;
  padding: 20px 30px;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 400px;
  min-width: 400px;
  min-height: 440px;
  border-radius: 10px;
`