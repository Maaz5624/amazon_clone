import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import Subtotal from './Subtotal'
function Checkout() {
    const [{basket},dispatch]=useStateValue();
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img className='checkout__ad' src="https://img.freepik.com/premium-vector/black-friday-sale-banner-with-geometric-background_711910-2.jpg?size=629&ext=jpg&ga=GA1.2.1820920569.1662741326" alt="" />
            <div>
                <h2 className="checkout__title">
                    Your Shopping Basket
                </h2>
                {basket.map(item =>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        </div>
        <div className="checkout__right">
            <Subtotal/>
            <h2>The Subtitle go there</h2>
        </div>
    </div>
  )
}

export default Checkout