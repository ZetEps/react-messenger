import {ComponentHasChildrenType} from "../../../global";
import {useAppSelector} from "../../../redux/app/hooks";
import {NotificationItem} from "./NotificationItem";
import styled from "styled-components";

interface NotificationType extends ComponentHasChildrenType{

}



const Notifications = (props:NotificationType)=>{
    const notification = useAppSelector((state) => state.notifications.notifications)

    const renderNotifications = ()=>{
        return notification.map(notification =>{
            return <NotificationItem key = {notification.id} id = {notification.id}>{notification.content}</NotificationItem>
        })
    }

    return(
        <>
            <Container>
                {renderNotifications()}
            </Container>
            {props.children}
        </>
    )
}


export default Notifications;



const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 10px;
  right: 20px;
`