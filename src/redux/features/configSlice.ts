import {createSlice, PayloadAction} from "@reduxjs/toolkit";


export enum AuthPageState{
    Register = "register",
    SignIn = "signIn"
}

export enum AppState{
    Online = "online",
    Offline = "offline",
    Loading = "loading",
}


interface ConfigType{
    authPage:AuthPageState
    appState: AppState
}


const initialState:ConfigType = {
    authPage:AuthPageState.SignIn,
    appState:AppState.Loading
}

const configSlice = createSlice({
    name:"config",
    initialState,
    reducers:{
      toggleAuthPage:(state)=>{
        if(state.authPage === AuthPageState.Register) state.authPage = AuthPageState.SignIn
        else state.authPage = AuthPageState.Register;
      },
        changeAppState:(state, action:PayloadAction<AppState>) =>{
          state.appState = action.payload;
        }
    }
})


export const {toggleAuthPage, changeAppState} = configSlice.actions
export default configSlice.reducer