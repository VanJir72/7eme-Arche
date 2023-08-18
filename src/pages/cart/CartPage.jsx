import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../components/cart-item/CartItem';
import useCartTotal from '../../hooks/useCartTotal';
import { CART_SLICE_ACTIONS } from '../../redux/cartSlice';

import styles from './CartPage.module.css';

const CartPage = () => {

  const cartItems = useSelector(store => store.cart.items);
  const cartTotal = useCartTotal();
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.header}>
        <h2>Cart</h2>
        <button className='btn btn-dark' onClick={() => dispatch(CART_SLICE_ACTIONS.clearCart())}>
          Clear Cart
        </button>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.checkoutHeader}>
          <div className='header-block'>
            <span>Product</span>
          </div>
          <div className='header-block'>
            <span>Title</span>
          </div>
          <div className='header-block'>
            <span>Quantity</span>
          </div>
          <div className='header-block'>
            <span>Price</span>
          </div>
          <div className='header-block'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))}
        <div className={styles.total}>
          {cartTotal}$
        </div>
      </div>
    </>
  )
}

export default CartPage;