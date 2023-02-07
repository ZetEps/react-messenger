import styled from "styled-components";
import {Form} from "../components/Form";
import {Input} from "../components/Input";
import {Button} from "../components/Button";
import {style} from "../style/style";
import {useLang} from "../hooks/useLang";
import {DiReact} from "react-icons/di"
import {rotate} from "../style/keyframes";
import {Link} from "../components/Link";

const Auth = ()=>{

    const {text, lang} = useLang(Auth.name)

    return (
        <Container>
            <Logo/>
            <Header>{text.header[lang]}</Header>
            <Form>
                <InputAuth inputType={"text"} placeholder= {"First Name"}/>
                <InputAuth inputType={"text"} placeholder = {"Last Name"}/>
                <InputAuth inputType={"email"} placeholder = {"Email"}/>
                <InputAuth inputType={"password"} placeholder = {"Password"}/>
                <PasswordComplexityContainer>
                    <PasswordComplexityItem/>
                    <PasswordComplexityItem/>
                    <PasswordComplexityItem/>
                    <PasswordComplexityItem/>
                </PasswordComplexityContainer>
                <Link color={style.text.color.slateGrey}>{text.passwordComplexity[lang]}</Link>
                <ButtonContainer>
                    <Button background={style.btn.color.blue} color={'#fff'}>{text.register[lang]}</Button>
                    <Button background={style.btn.color.transparent} color ={'#000'}>{text.signIn[lang]}</Button>
                </ButtonContainer>
            </Form>
        </Container>
    )
}



export default Auth;


const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(241,246,251);
  padding-top: 30px;
`
const InputAuth = styled(Input)`
  box-shadow: 0 3px 5px rgb(0 0 0 / 3%);
`


const ButtonContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Header = styled.h2`
  font-size: ${style.text.fontSize.lg};
  color:${style.text.color.eastBay};
  margin-bottom: 40px;
  font-weight: 500;
`

const Logo = styled(DiReact)`
  font-size: 90px;
  color: #5454a4;
  animation: ${rotate} 7s infinite linear;
  margin-bottom: 10px;
`
const PasswordComplexityContainer = styled.div`
    display: flex;
  justify-content: space-between;
`

const PasswordComplexityItem = styled.div`
  width: 80px;
  height: 4px;
  border-radius: ${style.border.radius.sm};
  background-color:${style.widgets.passwordComplexity.color.disabled}
`

