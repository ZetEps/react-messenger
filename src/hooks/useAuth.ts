import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import {useAppSelector} from "../redux/app/hooks";
import {AuthPageState} from "../redux/features/configSlice";

export const useAuth = ()=>{
    const authPageState = useAppSelector((state)=>state.config.authPage)

    if(authPageState === AuthPageState.Register){
        return Register;
    }
    return SignIn;
}