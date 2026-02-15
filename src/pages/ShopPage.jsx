import { Link } from "react-router-dom";
import { useState } from "react";

function ShopPage({ products, loading, error }) {
  const [searchTerm, setSearchTerm] = useState("");

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <h2>Error: {error}</h2>;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.page}>
      <div style={styles.sidebar}>
        <h2>Search</h2>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.search}
        />
      </div>

      <div style={styles.content}>
        <h1>Shop</h1>

        <div style={styles.grid}>
          {filteredProducts.map((product) => (
            <div key={product.id} style={styles.card}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Origin:</strong> {product.origin}</p>
              <p><strong>${product.price}</strong></p>

              <Link to={`/products/${product.id}`} style={styles.button}>
                View Details
              </Link>
            </div>
          ))}

          {filteredProducts.length === 0 && (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f5efe6"
  },
  sidebar: {
    width: "250px",
    padding: "2rem",
    backgroundColor: "#e8dccb",
    borderRight: "1px solid #ccc"
  },
  search: {
    padding: "0.5rem",
    width: "100%"
  },
  content: {
    flex: 1,
    padding: "2rem"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "1.5rem"
  },
  card: {
    backgroundColor: "white",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
  },
  button: {
    display: "inline-block",
    marginTop: "0.5rem",
    padding: "0.5rem 1rem",
    backgroundColor: "#5a3e2b",
    color: "white",
    textDecoration: "none",
    borderRadius: "4px"
  }
};

export default ShopPage;
