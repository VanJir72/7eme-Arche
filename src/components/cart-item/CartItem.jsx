import React from 'react';
import { useDispatch } from 'react-redux';
import { CART_SLICE_ACTIONS } from '../../redux/cartSlice';

import styles from './CartItem.module.css';

const CartItem = ({ cartItem }) => {

  const dispatch = useDispatch();
  const { quantity, price, title, images } = cartItem;

  const handleIncrementCartItem = () => {
    dispatch(CART_SLICE_ACTIONS.addItemToCart(cartItem));
  }

  const handleDecrementCartItem = () => {
    dispatch(CART_SLICE_ACTIONS.removeItemFromCart(cartItem));
  }

  const handleRemoveCartItem = () => {
    dispatch(CART_SLICE_ACTIONS.clearCartItem(cartItem));
  }

  return (
    <div className={styles.checkoutItemContainer}>

      <div className={styles.imageContainer}>
        <img className={styles.image} src={images[0]} alt={`${title}`} />
      </div>

      <span className={styles.smallWidth}> {title} </span>

      <span className={`${styles.smallWidth} ${styles.quantity}`}>
        <div className={styles.arrow} onClick={handleDecrementCartItem}>
          {/* &#10094; */}
          &#x2d;
        </div>

        <span className='value'>{"( " + quantity + " )"}</span>

        <div className={styles.arrow} onClick={handleIncrementCartItem}>
          {/* &#10095; */}
          &#x2b;
        </div>
      </span>



      <span className={styles.smallWidth}> {price}</span>

      <div className={styles.removeButton} onClick={handleRemoveCartItem}>
        &#10005;
      </div>
      
    </div>
  )
}

export default CartItem;