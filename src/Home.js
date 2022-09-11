import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YW1hem9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>

      <div className="home__row">
        <Product 
        id="121"
        title="the learn Startup with option of the legned of the seakers in that we have " 
        price={29.99} 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_x8u1YFyfgHrOuWWaazjbxuchbH-hQgVp0TM8ID0d&s"
        rating={5}
         />
        <Product 
        id="122"
        title="Razer Huntsman Tournament Edition TKL Tenkeyless Gaming Keyboard: Fast Keyboard Switches - Linear Optical Switches - Chroma RGB Lighting - PBT Keycaps - Onboard Memory - Classic Black" 
        price={119.99} 
        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/81VbPK0fFqL._SR75,75_.jpg"
        rating={3}
         />
      </div>

      <div className="home__row">
      <Product 
        id="123"
        title="Office Gaming Chair, PU Leather Computer Chair" 
        price={115.99} 
        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/51hcwpXLzUL._AC_UL320_.jpg"
        rating={4}
         />
        <Product 
        id="124"
        title="Sceptre 24 Professional Thin LED Monito HDMI VGA Build-in Speaker Machine "
        price={2000.99} 
        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71rXSVqET9L._AC_UL320_.jpg"
        rating={5}
         />
        <Product 
        id="125"
        title="ASUS TUF Dash 15 (2022) Gaming Laptop, 15.6” 144Hz FHD Display, Intel Core i7-12650H, GeForce RTX 3060" 
        price={9900.99} 
        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71AGOX9MORL._AC_UL320_.jpg"
        rating={5}
         />
      </div>

      <div className="home__row">
      <Product 
        id="125"
        title="ASUS TUF Dash 15 (2022) Gaming Laptop, 15.6” 144Hz FHD Display, Intel Core i7-12650H, GeForce RTX 3060" 
        price={9900.99} 
        image="https://m.media-amazon.com/images/W/WEBP_402378-T2/images/I/71AGOX9MORL._AC_UL320_.jpg"
        rating={5}
         />
      </div>
    </div>
  );
}

export default Home;
