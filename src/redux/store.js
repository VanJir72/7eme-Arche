import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice';
import categoryReducer from './categorySlice';
import cartReducer from './cartSlice';
import { cartMiddleware } from './middlewares';

export default configureStore({
  reducer: {
    products: productReducer,
    categories: categoryReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddlewares) => {
    return getDefaultMiddlewares().concat(cartMiddleware)
  }
});