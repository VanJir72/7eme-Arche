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
        <h2>Panier</h2>
        <button className='btn btn-dark' onClick={() => dispatch(CART_SLICE_ACTIONS.clearCart())}>
          Vider le Panier
        </button>
      </div>
      <div className={styles.cartContainer}>
        <div className={styles.checkoutHeader}>
          <div className='header-block'>
            <span>Article</span>
          </div>
          <div className='header-block'>
            <span>Description</span>
          </div>
          <div className='header-block'>
            <span>Quantité</span>
          </div>
          <div className='header-block'>
            <span>Prix</span>
          </div>
          <div className='header-block'>
            <span>Supprimer</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CartItem cartItem={cartItem} key={cartItem.id} />
        ))}
        <div className={styles.total}>
          {cartTotal}$
        </div>
      </div>
      <div >
        <button className='btn btn-dark' onClick={console.log("Finaliser la Commande")}>
          Finaliser la Commande
        </button>
      </div>
    </>
  )
}

export default CartPage;