import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const auth = getAuth(app);
     
    const [user,setUser]=useState(null)
    console.log(user)


    const createNewUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }


    useEffect(()=>{
    const unSubsribe =    onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=> unSubsribe()
    },[auth])

  const   authInFo={
       user,
       setUser,
       createNewUser
    }

    return (
        <AuthContext.Provider value={authInFo}>
              {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;