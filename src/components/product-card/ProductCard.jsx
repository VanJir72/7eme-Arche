import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CART_SLICE_ACTIONS } from '../../redux/cartSlice';

import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    event.preventDefault();
    navigate(`/products/${product.id}`);
  }

  const handleAddToCart = (event) => {
    event.preventDefault();
    dispatch(CART_SLICE_ACTIONS.addItemToCart(product));
  }

  return (
    <div className={`card text-black ${styles.productCard}`}>
      <div style={{ cursor: 'pointer' }} onClick={handleClick}>
        <img
          src={product.images[0]}
          className="card-img-top"
          alt="Apple Computer" />
      </div>
      <div className={`card-body ${styles.productCardBody}`}>
        <div className="text-center">
          <h5 className="card-title">{product.title}</h5>
          <p className="text-muted mb-4">{product.description}</p>
        </div>
        <div>
          <div className="d-flex justify-content-between">
            <span>Category</span><span>{product.category.name}</span>
          </div>
        </div>
        <div className="d-flex justify-content-between total font-weight-bold mt-2">
          <span>Price</span><span>${product.price}</span>
        </div>
        <div className="d-flex justify-content-center">
          <button className='btn btn-dark' type='button' onClick={handleAddToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </div>

  );
}

export default ProductCard;