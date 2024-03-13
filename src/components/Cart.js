import React from 'react';
import './Cart.css'
import { Link } from 'react-router-dom';

function Cart({ cart, removeFromCart, getTotalPrice }) {
  return (
    <div className='cart'>
        <button>
            <Link to="/" style={{ textDecoration: 'none' , color:'white', float:'right' }}>Back to Shopping</Link>
        </button>
      <div className='container cart-container'>
        {cart.map((item, index) => (
          <div key={index}>
            <div className='card cart--card' style={{marginTop:'10px'}}>
              <img src={item.image} className='card-img-top' alt={item.tag} />
              <div className='card-body'>
                <div className='items--text'>
                  <p className='card-text tag'>{item.tag}</p>
                  <p className='card-text price'>Price ${item.price}</p>
                  <p className='card-text quantity'>Quantity: {item.quantity}</p>
                  <p className='card-text total '>Total: ${item.price * item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(index)}>Remove from cart</button>
              </div>
            </div>
          </div>
        ))}
        <p >Total Price: ${getTotalPrice()}</p>
        
      </div>
    </div>
  );
}

export default Cart;
