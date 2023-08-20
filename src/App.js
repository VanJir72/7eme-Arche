import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/header/Header'

import CategoryPage from './pages/category/CategoryPage';
import ProductsPage from './pages/products/ProductsPage';
import CartPage from './pages/cart/CartPage';
import ProductPage from './pages/product/ProductPage';

import { fetchProductsAsync } from './redux/productSlice';
import { fetchCategoriesAsync } from './redux/categorySlice';
import { CART_SLICE_ACTIONS } from './redux/cartSlice';


function App() {

  const dispatch = useDispatch(); //Envoyer les actions à store de Redux

  /**
   * On a mis le dispatch en bas pour getAllProducts and getAllCategories des BDs quand on charge et recharge le composant <App/>.
   * L'action ici qui fait bouger et fonctionner l'useEffect(Qui contient le useDispatch() par son dispatch(Qui prnd action comme params))
   * Laction iici qui bouge l'useEfect est (( onLoad ))x
   * L'action qu'on envoie avec cette dispatch() dans cette useEffect() est aller fetcher les Products et les Categories.
   */
  //////// Pour la page: http://localhost:3000/products
  useEffect(() => {
    dispatch(fetchProductsAsync());
    dispatch(fetchCategoriesAsync());
  }, [dispatch]); 


  /**
   * En bas c'est le code de mettre le choix vers le Panier dans Local Storage.
   * Je le laisse pour l'instant.
   * Quand on passe ou finalise la Commande, on mettra directement le stock en localStorage en ZERO => cvd
   * => cvd : cart = [] = empty.
   */
  //////// Pour la page: http://localhost:3000/cart  =(Panier)
  useEffect(() => {
    const cartItemsStorage = localStorage.getItem('cart');
    console.log('cartItemsStorage = ' + cartItemsStorage);
    if (cartItemsStorage) {
      const cartItems = JSON.parse(cartItemsStorage);
      // console.log(cartItems);
      dispatch(CART_SLICE_ACTIONS.setCartItems(cartItems));  //Relié peut être à l'action de <Button> [Add to cart]
    }
  }, [dispatch]);






  return (
    <div className="app">
      <Header />

      <div className="container mt-5">
          <Routes>
            <Route path='/products' element={<ProductsPage />} />
            <Route path='/products/:id' element={<ProductPage />} />
            <Route path='/categories/:id' element={<CategoryPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path="/" element={<Navigate replace to="/products" />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
