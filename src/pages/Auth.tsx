import {useAuth} from "../hooks/useAuth";
import styled from "styled-components";
import {DiReact} from "react-icons/di";
import {rotate} from "../style/keyframes";
import {style} from "../style/style";

const Auth = ()=>{
    const Component = useAuth();

    return(
        <Container>
            <Logo/>
            <Component/>
        </Container>
    )

}



export default Auth;



export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(241,246,251);
  padding-top: 30px;
`
export  const ButtonContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`


export const  Logo = styled(DiReact)`
  font-size: ${(state)=> state.fontSize ? state.fontSize : "90px"};
  color: #5454a4;
  animation: ${rotate} 7s infinite linear;
  margin-bottom: 10px;
`

export const Header = styled.h2`
  font-size: ${style.text.fontSize.lg};
  color:${style.text.color.eastBay};
  margin-bottom: 40px;
  font-weight: 500;
`