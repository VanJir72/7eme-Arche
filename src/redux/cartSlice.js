import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], //ici items répresente la liste (Array) de Panier =
  },
  reducers: {
    //////////Rdeducer - 1 - (Pour augmenter le compteur d'icon PANIER + Pour l'action " > " dans " < 1 > ") = INCREMENTATION.
    addItemToCart: (state, action) => {
      const item = action.payload; //ici, item aura sa valeure quand on click sur [Add to cart]
      // console.log(state.items.map(item => item.id));
      // console.log("item_id = " + item.id);
      // console.log(state.items.map(item => item.id));
      const exist = state.items.find(cartItem => cartItem.id === item.id); //La méthode find() renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition donnée par la fonction de test passée en argument
      //ici, (exist) = (product) =! liste des produits.
      // console.log(exist.id)
      if (exist) {
        return { //Pour modifier la quantity d'un produit déjà existant dans le Panier à (+1).
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
      return { //Pour ajouter a new produit au Panier avec une quantity = 1.
        ...state,
        items: [...state.items, { ...item, quantity: 1 }] //ici, il ajout a new produit dans le Panier et il lui donne une quantity = 1.
                                                          //Si on met :2 il va ajouter a new produit dans le Panier en lui donnant une quantity = 2.
                                                        
      }
    },

    //////////Rdeducer - 2 - (Pour l'action " < " dans " < 1 > ") = DECREMENTATION.
    removeItemFromCart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find(cartItem => cartItem.id === item.id);
      if (exist.quantity === 1) {
        return {
          ...state,
          items: state.items.filter(cartItem => cartItem.id !== item.id) //ici, il a fait ce qu'on appelle : الاقصاء : EXCLUSION
        }
      }
      return { //Resultat if (exist.quantity !=== 1)
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

    //////////Rdeducer - 3 - (Pour l'action " x ") = DELETE.
    clearCartItem: (state, action) => {
      return {
        ...state,
        items: state.items.filter(cartItem => cartItem.id !== action.payload.id) //EXCLIUSION aussi.
      }
    },

    //////////Rdeducer - 4 - (Quand on clique sur le Button [Clear Cart]).
    clearCart: (state) => {
      return {
        ...state,
        items: []
      }
    },

    //////////Rdeducer - 5 - (le "action.payload" = cliquer sur le Button [Add tio cart])
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