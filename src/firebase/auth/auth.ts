import { getAuth, createUserWithEmailAndPassword, UserCredential} from "firebase/auth";
import {app} from "../index";


const auth = getAuth(app)
type CreateNewUserType = (data: UserCredential) => any
const createNewUser = (email: string, password: string) =>{
        return createUserWithEmailAndPassword(auth, email, password)
}


export {auth, createNewUser}