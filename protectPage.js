import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import firebaseClient from './firebaseClient'
import firebase from 'firebase/app'
import 'firebase/auth'
// import {verifyIdToken} from './firebaseAdmin'

const protectPage = (WrappedComponent) => {
    return ( (props) => {
        firebaseClient();
        const Router = useRouter();
        const [verified, setVerified] = useState(false);

        useEffect(()=>{
            return firebase.auth().onAuthStateChanged(async (user) => {
                if(!user){
                    setVerified(false);
                    localStorage.setItem('redirectURI',Router.pathname);
                    Router.replace("/login");
                } else {
                    setVerified(true);
                }
            })
        },[Router])

        if (verified) {
            return <WrappedComponent {...props} />;
          } else {
            return null;
          }
    }
       
    )
}

export default protectPage;