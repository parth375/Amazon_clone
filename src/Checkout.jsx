import { useStateValue } from './StateProvider';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout(){
    const[{basket,user}]=useStateValue();
    
    return(
        <>
        <div className="checkout">
            <div className='left'>
            <img  className="ad" src='https://images-eu.ssl-images-amazon.com/images/G/31/img16/GiftCards/LPAIndia/Header/170_AP_1500x300.jpg' alt='ad'/>
        {basket?.length===0 ?(
      <div>
        <h2>Your Shopping Basket is empty</h2>
        <p>You have no item in your basket.To buy, click "Add to Basket" next to item </p>
        </div>
        ):(
            <div className='checkout_title'>
                 <h3>Hello,{user?.email}</h3>
                <h2>Your Shopping Basket</h2>
                {basket?.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        
        )}
        </div>
        {basket.length>0 &&(
            <div className='right'>
                <Subtotal/>
            </div>
        )}
        </div>
        
        </>
    );
}
export default Checkout;