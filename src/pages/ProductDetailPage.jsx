import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetailPage({ products, updateProduct, deleteProduct }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [newPrice, setNewPrice] = useState("");

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id));
    if (found) {
      setProduct(found);
      setNewPrice(found.price);
    }
  }, [products, id]);

  if (!product) {
    return <h2 style={{ padding: "2rem" }}>Loading product...</h2>;
  }

  const handleUpdate = () => {
    updateProduct(product.id, { price: Number(newPrice) });
  };

  const handleDelete = () => {
    deleteProduct(product.id);
    navigate("/shop");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>{product.name}</h1>

        <p>{product.description}</p>
        <p><strong>Origin:</strong> {product.origin}</p>
        <p><strong>Price:</strong> ${product.price}</p>

        <div style={styles.editSection}>
          <h3>Admin Edit Price</h3>
          <input
            type="number"
            value={newPrice}
            onChange={(e) => setNewPrice(e.target.value)}
            style={styles.input}
          />
          <button onClick={handleUpdate} style={styles.updateBtn}>
            Update Price
          </button>
        </div>

        <button onClick={handleDelete} style={styles.deleteBtn}>
          Delete Product
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5efe6",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    backgroundColor: "white",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    width: "500px"
  },
  title: {
    marginBottom: "1rem",
    color: "#5a3e2b"
  },
  editSection: {
    marginTop: "1.5rem",
    padding: "1rem",
    border: "1px solid #ddd",
    borderRadius: "8px"
  },
  input: {
    width: "100%",
    padding: "0.5rem",
    marginBottom: "0.75rem"
  },
  updateBtn: {
    padding: "0.5rem 1rem",
    backgroundColor: "#5a3e2b",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  },
  deleteBtn: {
    marginTop: "1rem",
    padding: "0.5rem 1rem",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer"
  }
};

export default ProductDetailPage;
