import React, { useEffect } from "react";
import "./App.css";
import{BrowserRouter as Router, Routes, Route, useHref} from "react-router-dom"
import Home from './Home'
import Banner from "./Banner";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
const App=()=>{
   const[{user},dispatch]=useStateValue();
   useEffect(()=>{
const unsubscribe=auth.onAuthStateChanged((authUser)=>{
   if(authUser){
    dispatch({
      type:"SET",
      user:authUser
    });
   }
   else{
      dispatch({
         type:"SET",
         user:null
      });

   }
});
  return ()=>{
   unsubscribe();
  }
   },[]);
 return(
    <Router>
       <Routes>
       <Route path='Checkout' element={<h1><Home/><Checkout/></h1>}/>
       <Route path='Login' element={<h1><Login/></h1>}/>
        <Route path='/'  element={<><Home/><Banner/></>}/>
       </Routes>
    </Router>

 )
}

export default App;
