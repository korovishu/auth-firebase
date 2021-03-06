import React from 'react'
import Link from 'next/link'
import firebaseClient from '../firebaseClient'
import firebase from 'firebase/app'
import 'firebase/auth'
// import {useRouter} from 'next/router'
import { useAuth } from '../auth';

export default function Home() {
  firebaseClient();
  const {user} = useAuth();
  console.log({user});
  // const router = useRouter();
  // console.log(router);
  
  return (
    <>
    <h1>
      {`User email: ${user ? user.email : 'no user signed in'}`}
    </h1>
    
    {user ?
      <button className="bg-red-500 text-white font-bold py-2 px-4 rounded" type="button"
      onClick={ async ()=> await firebase.auth().signOut()
     }
      >
        Sign Out
      </button>
      :
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" type="button"> 
        <Link href='/login'>
          <a>Login</a>
        </Link> 
      </button>
    }
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded ml-5" type="button"> 
        <Link href='/dashboard'>
          <a>Dashboard</a>
        </Link> 
      </button>
    
    </>
  );
}
