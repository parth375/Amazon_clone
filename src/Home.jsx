import React from "react";                                                
import './Home.css';
import {Link} from 'react-router-dom';
import {RiSearchLine} from 'react-icons/ri';
import { BsFillBasket3Fill} from 'react-icons/bs';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
function Header(){
  const[{basket,user}]=useStateValue();
  const login=()=>{
    if(user){
      window.location.reload(false);
      auth.signOut();
    }
  };
  console.log(user);
  return (
    <nav className="header">
    <Link to="/">
    <img className="logo" src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817" alt="logo"/>
   </Link>
   <div className="header_search">
   <input type="text" className="search"/>
    <RiSearchLine className="icon"/>
    </div>
    <div className="header_nav">
    <Link to={!user && "/login"} className="header_link">
    <div onClick={login} className="header_option">
        <span className="option_one">Hello {user?.email}</span>
        <span className="option_two">{user?'Sign out':'Sign in'}</span>
    </div>
    </Link>

    <Link to="/" className="header_link">
    <div className="header_option">
        <span className="option_one" >Mini</span>
        <span className="option_two">Tv</span>
    </div>
    </Link>

    <Link to="/" className="header_link">
    <div className="header_option">
        <span className="option_one" >Yours</span>
        <span className="option_two">Prime</span>
    </div>
    </Link>
    <Link to="/Checkout" className="header_link">
    <div className="header_Basket">
        <BsFillBasket3Fill className="basket"/>
       <span className="option_two">{basket.length}</span>
    </div>
    </Link>
    </div>
    </nav>
  );
  
}
export default Header;