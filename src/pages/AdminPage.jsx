import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminPage({ addProduct }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    origin: "",
    price: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      ...formData,
      price: Number(formData.price)
    };

    addProduct(newProduct);
    navigate("/shop");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Admin Portal</h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required style={styles.input} />
          <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required style={styles.input} />
          <input name="origin" placeholder="Origin" value={formData.origin} onChange={handleChange} required style={styles.input} />
          <input name="price" type="number" placeholder="Price" value={formData.price} onChange={handleChange} required style={styles.input} />

          <button type="submit" style={styles.button}>
            Add Product
          </button>
        </form>
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
    borderRadius: "10px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    width: "400px"
  },
  title: {
    marginBottom: "1.5rem",
    textAlign: "center",
    color: "#5a3e2b"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  input: {
    padding: "0.75rem",
    borderRadius: "6px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "0.75rem",
    backgroundColor: "#5a3e2b",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold"
  }
};

export default AdminPage;
