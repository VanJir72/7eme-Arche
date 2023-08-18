import React, { useState, useMemo } from "react";
import { useSelector } from "react-redux";
import ProductList from "../../components/product-list/ProductList";
import SearchInput from "../../components/search-input/SearchInput";
import Spinner from "../../components/spinner/Spinner";

const ProductsPage = () => {

  const { loading, error, data: products } = useSelector(state => state.products);
  const [searchText, setSearchText] = useState('');

  const handleSearchInputChange = (event) => {
    const text = event.target.value.toLowerCase();
    setSearchText(text)
  }

  const filteredProducts = useMemo(() => {
    return products.filter(product => product.title.toLowerCase().includes(searchText))
  }, [products, searchText]);

  return (
    <div>
      <h2>All products ({filteredProducts.length} products)</h2>
      <SearchInput onChange={handleSearchInputChange} />
      {error ? (
        <div className='alert alert-danger'>
          {error}
        </div>
      ) : loading ? (
        <Spinner />
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default ProductsPage;