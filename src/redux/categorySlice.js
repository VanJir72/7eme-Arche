import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "../api";

export const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    loading: false,
    error: null,
    data: []
  },
  reducers: {
    fetchCategoriesStart: (state) => {
      return {
        ...state,
        loading: true
      }
    },
    fetchCategoriesSuccess: (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false
      }
    },
    fetchCategoriesFailed: (state, action) => {
      return {
        ...state,
        error: action.payload
      }
    },
  }
});

export const CATEGORIES_SLICE_ACTIONS = categorySlice.actions;

export const fetchCategoriesAsync = () => async dispatch => {
  dispatch(CATEGORIES_SLICE_ACTIONS.fetchCategoriesStart());
  try {
    const categories = await fetchCategories();
    dispatch(CATEGORIES_SLICE_ACTIONS.fetchCategoriesSuccess(categories));
  } catch (error) {
    dispatch(CATEGORIES_SLICE_ACTIONS.fetchCategoriesFailed(error));
  }
}

export default categorySlice.reducer;