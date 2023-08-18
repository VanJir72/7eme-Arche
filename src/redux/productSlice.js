import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "../api";

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    loading: false,
    error: null,
    data: []
  },
  reducers: {
    fetchProductsStart: (state) => {
      return {
        ...state,
        loading: true
      }
    },
   fetchProductsSuccess: (state, action) => {  /*Le Reducer ""fetchProductsSuccess()""  prned deux arguments =W> (statePrècednt, actioActuiil);*/
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    },
    fetchProductsFailed: (state, action) => {
      return {
        ...state,
        error: action.payload
      }
    },
  }
});

export const PRODUCT_SLICE_ACTIONS = productSlice.actions;






export const fetchProductsAsync = () => async dispatch => {
  dispatch(PRODUCT_SLICE_ACTIONS.fetchProductsStart());
  try {
    const products = await fetchProducts();
    dispatch(PRODUCT_SLICE_ACTIONS.fetchProductsSuccess(products));
  } catch (error) {
    dispatch(PRODUCT_SLICE_ACTIONS.fetchProductsFailed(error));
  }
}





export default productSlice.reducer;