import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";
import { CART_SLICE_ACTIONS } from "../../redux/cartSlice";

import styles from './ProductPage.module.css';

const ProductPage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const product = useSelector(state => state.products.data.find(product => product.id === +id));

  if (!product) {
    return <Spinner />;
  }

  const handleAddToCart = () => {
    dispatch(CART_SLICE_ACTIONS.addItemToCart(product));
  }

  return (
    <div className="row" style={{ marginTop: '200px' }}>
      <div className="col-lg-6">
        <div className={styles.imagesContainer}>
          {product.images.map((image, index) => (
            <img src={image} alt='product' key={index} style={{ maxWidth: '300px' }} />
          ))}
        </div>

      </div>
      <div className="col-lg-6">
        <h2 className="text-center mb-5">{product.title}</h2>
        <p className="h6">{product.description}</p>
        <p className="h4">{product.price}$</p>

        <div className="d-flex justify-content-center mt-5">
          <button className="btn btn-dark" onClick={handleAddToCart}>
            Ajouter au Panier
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductPage;