import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
      } catch (error) {
        setError(error)
      }
      setIsLoading(false);
    }
    fetchProducts();
  }, [url]);

  return {
    data,
    isLoading,
    error
  }
}

export default useFetch;