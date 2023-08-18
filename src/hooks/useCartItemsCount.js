import { useSelector } from "react-redux";

const useCartItemsCount = () => {
  const cartItems = useSelector(store => store.cart.items);

  const cartCount = cartItems.reduce((accumulator, cartItem) => {
    accumulator = accumulator + cartItem.quantity
    return accumulator
  }, 0);

  return cartCount;
}

export default useCartItemsCount;