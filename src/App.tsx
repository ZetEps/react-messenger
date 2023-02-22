import React from "react";
import Auth from "./pages/Auth";
import {useAppSelector} from "./redux/app/hooks";
import {UserStatus} from "./redux/features/userSlice";


const App = ()=>{
    const user = useAppSelector(state => state.user)
    return (
        user.isLoggedIn === UserStatus.online ? <div>Some Page</div> : <Auth/>
    )
}

export default App;