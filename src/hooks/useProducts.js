import { useState, useEffect } from "react";

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = "http://localhost:3001/products";

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(BASE_URL);

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Could not connect to backend.");
    } finally {
      setLoading(false);
    }
  }

  const addProduct = async (newProduct) => {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    const data = await response.json();
    setProducts((prev) => [...prev, data]);
  };

  const updateProduct = async (id, updatedFields) => {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    });

    const updated = await response.json();

    setProducts((prev) =>
      prev.map((product) =>
        product.id === id ? updated : product
      )
    );
  };

  const deleteProduct = async (id) => {
    await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    setProducts((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };

  return {
    products,
    loading,
    error,
    addProduct,
    updateProduct,
    deleteProduct,
  };
}

export default useProducts;
