import React,{useState} from 'react'
import firebaseClient from '../firebaseClient'
import firebase from 'firebase/app'
import {useRouter} from 'next/router'
import 'firebase/auth'

const gProvider = new firebase.auth.GoogleAuthProvider();
// localStorage.removeItem('redirectURI');

export default function Login(){
    firebaseClient();
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const router = useRouter();
    

    function redirectToOG(){
        if(!localStorage.getItem('redirectURI')) localStorage.setItem('redirectURI','/');
        console.log(localStorage.getItem('redirectURI'));
        router.replace(localStorage.getItem('redirectURI')); 
        localStorage.setItem('redirectURI','');
    }

    return (
        <div className="bg-white shadow-md rounded px-25 pt-6 pb-8 mb-4 flex flex-col justify-center align-center w-500 m-auto items-center">
            <div>
                <button className="bg-red-500 text-white font-bold py-2 px-4 rounded mb-5" type="button"
                onClick = {async () => {
                    await firebase.auth()
                    .signInWithPopup(gProvider)
                    .then((result) => {
                        console.log(result.user);
                        redirectToOG();
                    }).catch((err)=>{
                        console.log("error verb "+err.message);
                    })
                }}
                >
                     Sign in with Google
                </button>
            </div>
            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
                    Email address
                </label>
                <input className="w-400 shadow appearance-none border rounded py-2 px-3 text-grey-darker" id="username" type="text"
                onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </div>
            <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border border-red rounded w-400 py-2 px-3 text-grey-darker mb-3" id="password" type="password"
                onChange={(e)=>setPass(e.target.value)} value={pass}/>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <button className="bg-green-500 text-white font-bold py-2 px-4 rounded" type="button"
                    onClick = {async ()=>{
                        await firebase.auth().createUserWithEmailAndPassword(email,pass)
                        .then(function() {
                            redirectToOG();
                        }).catch(function(err) {
                            const message = err.message;
                            console.log(message);
                        })
                    }}
                    >
                        Sign-up
                    </button>
                    <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-4" type="button"
                    onClick = {async ()=>{
                        await firebase.auth().signInWithEmailAndPassword(email,pass)
                        .then(function() {
                            redirectToOG();
                        }).catch(function(err) {
                            const message = err.message;
                            console.log(message);
                        })
                    }}
                    > 
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}