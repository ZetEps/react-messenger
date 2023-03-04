import React from "react";
import Auth from "./pages/Auth";
import {useAppSelector} from "./redux/app/hooks";
import {AppState} from "./redux/features/configSlice";
import Home from "./pages/Home";
import {Preview} from "./pages/Preview";


const App = ()=>{
    const appState = useAppSelector(state => state.config.appState)
    const getPage = ()=>{
        if(appState === AppState.Online) return <Home/>
        if(appState === AppState.Offline) return <Auth/>
        return <Preview/>
    }


    return getPage()
}

export default App;