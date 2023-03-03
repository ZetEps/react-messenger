import {
        createUserWithEmailAndPassword,
        getAuth,
        onAuthStateChanged,
        signInWithEmailAndPassword,
        updateProfile,
        UserCredential
} from "firebase/auth";
import {app} from "../index";
import {changeOnlineStatus, UserStatus} from "../../redux/features/userSlice";
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

const logout = ()=>{
        return auth.signOut()
}

// @ts-ignore
global['logout'] = logout



onAuthStateChanged(auth, (user)=>{
        if(user){
                store.dispatch(changeOnlineStatus({status:UserStatus.online}))
        }else{
                store.dispatch(changeOnlineStatus({status:UserStatus.offline}))
        }
})

export {auth, createNewUser, setUserName, loginCurrentUser}