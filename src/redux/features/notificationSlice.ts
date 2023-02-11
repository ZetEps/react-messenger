import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Notification{
    id:string,
    content:string,
}

interface InitialStateType{
    notifications:Notification[]
}

const initialState:InitialStateType= {
    notifications:[]
}



const notificationSlice = createSlice({
    name:"notification",
    initialState,
    reducers:{
        pushNotification:(state, action:PayloadAction<{notification:Notification}>)=>{
            state.notifications.push(action.payload.notification)
            if(state.notifications.length > 3) state.notifications.shift()
        },
        removeNotification:(state, action:PayloadAction<{id:string}>)=>{
           state.notifications = state.notifications.filter((notification)=> notification.id !== action.payload.id)
        },
    }
})

export const {pushNotification, removeNotification} = notificationSlice.actions
export default notificationSlice.reducer