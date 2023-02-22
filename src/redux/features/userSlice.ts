import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState{
    name:string | undefined,
    surname:string | undefined,
    email: string | undefined,
    isLoggedIn:UserStatus
}

export enum UserStatus{
    online = "online",
    offline = "offline"
}



const initialState:UserState = {
    name:undefined,
    surname:undefined,
    email:undefined,
    isLoggedIn:UserStatus.offline
}

 const userSlice = createSlice({
     name:'user',
     initialState,
     reducers:{
         setUserInfo:(state, action:PayloadAction<{name:string, email:string, surname:string}>)=>{
             const {name, surname, email} = action.payload;
             if(name) state.name = name
             if(surname) state.surname = surname
             if(email) state.email = email
         },
         changeOnlineStatus:(state, action:PayloadAction<{status:UserStatus}>)=>{
             state.isLoggedIn = action.payload.status
         }
     }
 })

export default userSlice.reducer

const {setUserInfo, changeOnlineStatus} = userSlice.actions
export {setUserInfo, changeOnlineStatus}