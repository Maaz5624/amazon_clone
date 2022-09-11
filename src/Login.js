import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth } from "./firebase.js";
import './Login.css'


function Login() {
    const history = useHistory()
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const signIn = e=>{
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email,password)
            .then(auth=>{
                 history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e =>{
        e.preventDefault();
        auth
            .createUserWithEmailAndPassword(email,password)
            .then((auth)=>{
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        
    }

  return (
    
    <div className='login'>
        <Link to='/'>
        <img className='login__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
        </Link>
        <div className="login__container">
            <h1>Sign In</h1>
            <form >
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e=> setEmail(e.target.value)} />
                
                <h5>Password</h5>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />

                <button onClick={signIn} type='submit' className='login__signInButton'>Sign In</button>
            </form>
            <p>By signing-in you agree to the amazon fake clone condition of Use & sale please see our privacy notice and also accept our cookies </p>

            <button onClick={register} className='login__registerButton'>Create your amazon account</button>
        </div>
    </div>
    
  )
}

export default Login