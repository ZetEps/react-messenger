import {
        createUserWithEmailAndPassword,
        getAuth,
        onAuthStateChanged,
        signInWithEmailAndPassword,
        updateProfile,
        UserCredential
} from "firebase/auth";
import {app} from "../index";
import {AppState, changeAppState} from "../../redux/features/configSlice";
import {store} from "../../redux/app/store";


const auth = getAuth(app)
type CreateNewUserType = (data: UserCredential) => any
const createNewUser = (email: string, password: string) =>{
        return createUserWithEmailAndPassword(auth, email, password)
}

const loginCurrentUser = (email:string, password:string)=>{
        return signInWithEmailAndPassword(auth, email, password);
}




const setUserName = (name:string)=>{
        if(auth.currentUser){
            updateProfile(auth.currentUser, {
                  displayName:name
            })
        }
}

export const logout = ()=>{
   return auth.signOut()
}




onAuthStateChanged(auth, (user)=>{
        setTimeout(()=>{
                if(user) store.dispatch(changeAppState(AppState.Online))
                else store.dispatch(changeAppState(AppState.Offline))
        }, 2000)
})

export {auth, createNewUser, setUserName, loginCurrentUser}