import { useSelector } from "react-redux"

const useProductById = (id) => {
  const products = useSelector(state => state.products.data);
  return products.find(product => product.id.toString() === id.toString());
}

export default useProductById;