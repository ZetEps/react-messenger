import {nanoid} from "nanoid";
import {Notification, pushNotification} from "../redux/features/notificationSlice";
import {store} from "../redux/app/store";

export const useNotificator = ()=>{
    return push
}

type CreateNotificationType = (content:string)=> {notification:Notification}
type PushNotificationType = (content:string)=>void
const create:CreateNotificationType = (content)=>{
    return {
        notification:{
            id:nanoid(),
            content: content
        }
    }
}

const push:PushNotificationType = (content)=>{
    store.dispatch(pushNotification(create(content)));
}