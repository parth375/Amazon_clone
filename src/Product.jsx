import React from "react";
import './Product.css';
import {AiFillStar} from 'react-icons/ai'
import { useStateValue } from "./StateProvider";
function Product({id,title,image,price,rating}){
    const[{},dispatch]=useStateValue();
const AddToBasket=()=>{
 dispatch(
    {
        type:'ADD',
        item:{
            id:id,
            title:title,
            image:image,
            price:price,
            rating:rating
        }
    }
 )
};
return(
<div className="product">
    <div className="info">
    <p>{title}</p>
    <h3><strong>${price}</strong></h3>
   <div className="rating">{
        Array(rating).fill().map(()=>(
        <AiFillStar/>
        ))
    }
    </div> 
    </div>
    <img src={image} alt={title}/>
    <button onClick={AddToBasket}><h4>Add To Basket</h4></button>
    </div>
);
}
export default Product;