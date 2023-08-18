export const fetchProducts = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    // const response = await fetch('http://localhost:8080/septiemearche/articles');
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export const fetchCategories = async () => {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}