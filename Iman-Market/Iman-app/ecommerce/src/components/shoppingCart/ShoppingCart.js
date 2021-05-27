import React from 'react'
import { useSelector } from 'react-redux';
import CartProduct from './CartProduct';

const ShoppingCart = () => {

  const shoppingCart = useSelector(state => state.cartReducer.shoppingCart);
  const totalCartAmount = useSelector(state => state.cartReducer.totalCartAmount);
  const totalCartQuantity = useSelector(state => state.cartReducer.totalCartQuantity);

  const empty = (
    <div className="p-2 d-flex align-items-center">
      Your cart is empty
    </div>
  )

  return (
    <div>
      {
        shoppingCart && shoppingCart.map(product => (
          <CartProduct key={product._id} product={product} />
        ))
      }
      {
        shoppingCart.length < 1 && empty
      }

      <div className="dropdown-divider"></div>

      <div className="p-2 d-flex justify-content-between align-items-center bg-secondary container">
        <div>
          <div className="  ">
            Total Amount: <span>{totalCartAmount} k</span>
          </div>
          <div className=" ">
          
          Total Quantity: <span>{totalCartQuantity}</span>
        </div>
          <small >ink. vat</small>
        </div>
        <button className="btn btn-info">Checkout</button>
      </div>
      
    </div>
  )
}

export default ShoppingCart
