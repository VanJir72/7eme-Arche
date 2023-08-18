import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItemToCart: (state, action) => {
      const item = action.payload;
      // console.log("item" + item.id);
      const exist = state.items.find(cartItem => cartItem.id === item.id);
      if (exist) {
        return {
          ...state,
          items: state.items.map(cartItem => {
            if (cartItem.id === exist.id) {
              return {
                ...cartItem,
                quantity: cartItem.quantity + 1 //Le 1 d'incrementation avec la flèche ( > ) dans (< 1 >)
              }
            }
            return cartItem;
          })
        }
      }
      return {
        ...state,
        items: [...state.items, { ...item, quantity: 1 }] //Le 1 de montrer comme quoi on a 1 article de cet article au Panier.
                                                          //Si on me ( 0 ), on voit pas (le nombre d'articles ajoutés) change quand on clic sur [Add to cart]
                                                          //Si on met ( 2 ), il nous ajoute 2 articles à chaque clic sur [Add to cart].
      }
    },
    removeItemFromCart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find(cartItem => cartItem.id === item.id);
      if (exist.quantity === 1) {
        return {
          ...state,
          items: state.items.filter(cartItem => cartItem.id !== item.id)
        }
      }
      return {
        ...state,
        items: state.items.map(cartItem => {
          if (cartItem.id === exist.id) {
            return {
              ...cartItem,
              quantity: cartItem.quantity - 1 //Le -1 de décrementation avec la flèche ( < ) dans (< 1 >)
            }
          }
          return cartItem;
        })
      }
    },
    clearCartItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter(cartItem => cartItem.id !== action.payload.id)
      }
    },
    clearCart: (state) => {
      return {
        ...state,
        items: []
      }
    },
    setCartItems: (state, action) => {  //Pour ajouter les articles au Panier à chaque fois on clic sur [Add to cart].
      return {
        ...state,
        items: action.payload
      }
    }
  }
});


export const CART_SLICE_ACTIONS = cartSlice.actions;

export default cartSlice.reducer;