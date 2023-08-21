import React, { useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductList from '../../components/product-list/ProductList';
import SearchInput from '../../components/search-input/SearchInput';
import Spinner from '../../components/spinner/Spinner';

const CategoryPage = () => {

  const { id: categoryId } = useParams();

  const products = useSelector(state => state.products.data);
  const categories = useSelector(state => state.categories.data);
  const isLoading = useSelector(({ categories, products }) => products.loading || categories.loading);
  const category = categories.find(category => category.id === +categoryId);

  const [searchText, setSearchText] = useState('');

  const handleSearchInputChange = (event) => {
    const text = event.target.value.toLowerCase();
    setSearchText(text)
  }

  const filteredProducts = useMemo(() => {
    return products?.filter(product => product.title.toLowerCase().includes(searchText) && product.category.id === +categoryId)
  }, [products, searchText, categoryId]);

  if (isLoading || !category) {
    return <Spinner />
  }

  return (
    <div>
      <h2>{category.name} ({filteredProducts.length} articles)</h2>   {/** You can delete this line later  */}
      <SearchInput onChange={handleSearchInputChange} />
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default CategoryPage;