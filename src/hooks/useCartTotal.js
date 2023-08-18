import { useSelector } from "react-redux";

const useCartTotal = () => {
  const cartItems = useSelector(store => store.cart.items);

  const cartTotal = cartItems.reduce((accumulator, cartItem) => {
    return accumulator + (cartItem.price * cartItem.quantity)
  }, 0);

  return cartTotal;
}

export default useCartTotal;