import React from 'react';
import ProductCard from '../product-card/ProductCard';
import styles from './ProductList.module.css';

const ProductList = ({ products }) => {
  return (
    <div className={styles.productListContainer}>
      {products.map(product => <ProductCard product={product} key={product.id} />)}
    </div>
  )
}

export default ProductList;