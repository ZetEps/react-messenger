import styled from "styled-components";
import {ComponentHasChildrenType} from "../../../global";
import {style} from "../../../style/style";
import {AiOutlineCloseCircle} from "react-icons/ai"
import {useDispatch} from "react-redux";
import {removeNotification} from "../../../redux/features/notificationSlice";
import {slideFromRight} from "../../../style/keyframes";
import {useEffect} from "react";

interface NotificationItemType extends ComponentHasChildrenType{
    id:string
}

export const NotificationItem = (props:NotificationItemType)=>{
    const dispatch = useDispatch()
    const onClose = ()=>{
        dispatch(removeNotification({id:props.id}))
    }

    useEffect(()=>{
        setTimeout(()=>{
            onClose()
        }, 5000)
    }, [])


    return (
        <Container>
            <Content>{props.children}</Content>
            <Close onClick={onClose}/>
        </Container>
    )
}



const Close = styled(AiOutlineCloseCircle)`
  font-size: 25px;
  color:#000;
  opacity: 0;
  cursor: pointer;
  transition:opacity .1s linear;
`

const Container = styled.div`
  min-width: 250px;
  min-height: 50px;
  background: ${style.widgets.notification.color};
  border-radius: ${style.border.radius.md};
  padding: 15px 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
  align-content: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 1px solid #e8d4d4;
  box-shadow: -1px 4px 8px -1px rgba(0,0,0,0.39);
  z-index: 9999;
  &:hover ${Close}{
    opacity: 0.5;
  }
  animation: ${slideFromRight} .2s linear;
`



const Content = styled.span`
  margin-top: 5px;
  vertical-align: text-bottom;
`