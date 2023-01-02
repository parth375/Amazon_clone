import React from "react";
import "./CheckoutProduct.css";
import {AiFillStar} from 'react-icons/ai'
import { useStateValue } from "./StateProvider";
function CheckoutProduct({id,title,image,price,rating}){
const[{basket},dispatch]=useStateValue();
const RemoveProduct=()=>{
  dispatch({
    type:"REMOVE",
    id:id,
  });
};
    return(
    <>
    <div className="checkoutProduct">
        <img  className="cimage" src={image} alt=" "/>
        <div className="info">
            <p className="info_title">{title}</p>
            <p className="info_price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="rating">{
        Array(rating).fill().map(()=>(
        <AiFillStar/>
        ))
    }
    </div>
    <button onClick={RemoveProduct}><h4>Remove from Basket</h4></button>
        </div>
    </div>
    </>
);
}
export default CheckoutProduct;