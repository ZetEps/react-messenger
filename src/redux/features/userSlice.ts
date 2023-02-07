import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserType{
    name:string,
}

const initialState = {
    name:'',
}




const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        init: (state, action:PayloadAction<string>)=>{
            state.name = action.payload
        }
    }
})

export const {init} = userSlice.actions
export default userSlice.reducer