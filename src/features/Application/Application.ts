import {createNewUser, loginCurrentUser, logout} from "../../firebase/auth/auth";
import {store} from "../../redux/app/store";
import {AppState, changeAppState} from "../../redux/features/configSlice";
import {setUserName as setName} from "../../firebase/auth/auth";

class Application{
    static logoutAccount(){
        store.dispatch(changeAppState(AppState.Loading))
        logout().then(()=>{
            setTimeout(()=>{
                store.dispatch(changeAppState(AppState.Offline))
            }, 1000)
        })
    }

    static loginIntoAccount(email:string, password:string){
        return loginCurrentUser(email, password)
    }

    static createNewUser(email:string, password:string){
        return createNewUser(email, password)
    }

    static setUserName(name:string){
        return setName(name);
    }
}


export default Application