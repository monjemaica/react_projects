import React from 'react'
import { CartContext } from './cart-context';

export const CartProvider = (props) => {
    const addItemToCartHandler = (item) => {};
    const removeItemFromCartHandler = (id) => {};

  const cartContext = {
    item:[],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }
    return (
   <CartContext.Provider value={cartContext}>
    {props.children}
   </CartContext.Provider>
  )
}
