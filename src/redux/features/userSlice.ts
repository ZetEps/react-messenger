import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState{
    name:string | undefined,
    surname:string | undefined,
    email: string | undefined,
}





const initialState:UserState = {
    name:undefined,
    surname:undefined,
    email:undefined,
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
     }
 })

export default userSlice.reducer

export const {setUserInfo} = userSlice.actions