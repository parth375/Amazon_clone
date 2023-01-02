import React from "react";
import './Banner.css';
import Product from "./Product";
function Banner(){
     return (
      <>
        <div className="banner">
     <img className="image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonSmallBusinessDay/Jupiter21/Spotlight/eng_pc11.jpg"/>
    <div className="row">
    <Product
   id={123456789}
   title="Alienware m15 R4 Gaming Laptop, 15.6 inch Full HD (FHD) - Intel Core i7-10870H, 16GB DDR4 RAM, 512GB SSD, NVIDIA GeForce RTX 3060 6GB GDDR6, Windows 10 Home - Lunar Light"
   price={2199}
   rating={5}
   image="https://m.media-amazon.com/images/I/71Jp27bTQoL._AC_SL1500_.jpg"
    />
     <Product
    id={22345674}
    title="Air Jordan 1 Retro High OG"
    price={180}
    rating={4}
    image="https://static.nike.com/a/images/t_default/e24cc9da-a136-4262-987d-ab1a435cade1/air-jordan-1-retro-high-og-shoes-1QP6Gw.png"
    />
    </div>
    <div className="row">
    <Product
    id={32345674}
    title="FLAVOR Men Brown Leather Motorcycle Jacket with Removable Hood"
    price={149}
    rating={3}
    image="https://m.media-amazon.com/images/I/7155p8b+nBL._AC_UL1280_.jpg"
    />
     <Product
      id={42345674}
      title="Apple iPhone 14 512GB"
      price={799}
      rating={5}
      image="https://www.citypng.com/public/uploads/preview/iphone-14-pro-and-max-deep-purple-png-11662587434zacaxkb4sd.png"
     
    />
     <Product
      id={52345674}
      title="Learn React with TypeScript 3: Beginner's guide to modern React web development with TypeScript 3"
      price={44}
      rating={4}
      image="https://m.media-amazon.com/images/P/1789610257.01._SCLZZZZZZZ_SX500_.jpg"
    
    />
    </div>
    <div className="row">
    <Product
    id={62345674}
    title="SAMSUNG 85-Inch Class Crystal 4K UHD AU8000 Series HDR, 3 HDMI Ports, Motion Xcelerator, Tap View, PC on TV, Q Symphony, Smart TV with Alexa Built-In"
    price={1497}
    rating={4}
    image="https://m.media-amazon.com/images/I/71LJJrKbezL._AC_SL1500_.jpg"
    />
    </div>
    </div>
    </>
     );
}
export default Banner;