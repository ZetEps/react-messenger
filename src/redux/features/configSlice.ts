import {createSlice} from "@reduxjs/toolkit";


export enum AuthPageState{
    Register = "register",
    SignIn = "signIn"
}


interface ConfigType{
    authPage:AuthPageState.Register | AuthPageState.SignIn,
}


const initialState:ConfigType = {
    authPage:AuthPageState.SignIn,
}

const configSlice = createSlice({
    name:"config",
    initialState,
    reducers:{
      toggleAuthPage:(state)=>{
        if(state.authPage === AuthPageState.Register) state.authPage = AuthPageState.SignIn
        else state.authPage = AuthPageState.Register;
      }
    }
})


export const {toggleAuthPage} = configSlice.actions
export default configSlice.reducer