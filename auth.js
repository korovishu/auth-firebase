import React,{useState, useEffect, useContext, createContext} from 'react'
import firebaseClient from './firebaseClient'
import firebase from 'firebase/app'
import 'firebase/auth'

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    firebaseClient();
    const [user,setUser] = useState(null);

    useEffect(()=>{
        return firebase.auth().onIdTokenChanged(async (user) => {
            if(!user){
                setUser(null);
                localStorage.setItem('accessToken','');
                return;
            }
            const token = await user.getIdToken();
            setUser(user);
            localStorage.setItem('accessToken',token);
        })
    },[])

    return (<AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>)
}

export const useAuth = () => useContext(AuthContext);