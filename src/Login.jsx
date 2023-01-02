import React, { useState } from "react";
import './Login.css';
import{Link,useNavigate} from "react-router-dom";
import { auth } from "./firebase";
function Login(){
    const history = useNavigate ();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const login=(event)=>{
        event.preventDefault();
    auth
    .signInWithEmailAndPassword(email,password)
     .then((auth)=>{
       history("/");
     })
     .catch((e)=>alert(e.message));
        };
     const register=(event)=>{
            event.preventDefault();
        auth
        .createUserWithEmailAndPassword(email,password)
        .then(auth=>{
            history("/");
        })
        .catch((e)=>alert(e.message));
        
         };
return(
<>
<div className="Login">
    
    <Link to="/">
        <img className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/905px-Amazon_logo.svg.png" alt="logo"/>
    </Link>
    <div className="container">
        <h2>Sign in</h2>
        <form>
            <h6>Username</h6>
            <input value={email} onChange={event=>setEmail(event.target.value)} type="email"/>
            <h6>Password</h6>
            <input value={password} onChange={event=>setPassword(event.target.value)} type="password"/>
            <br/>
            <button onClick={login}type="submit" className="bt2"><h3>Sign In</h3></button>
             <h6><small>By signing-in you agree to Amazon's Condition of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Internet-Based Ads Notice</small></h6>
        <button onClick={register} type="submit" className="bt"><strong>Create Your Amazon Account</strong></button>
        </form>
    </div>
</div>
</>
);
}
export default Login;