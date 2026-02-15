import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import AdminPage from "./pages/AdminPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import useProducts from "./hooks/useProducts";

function App() {
  const productData = useProducts();

  return (
    <div style={styles.appContainer}>
      <NavBar />

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage {...productData} />} />
          <Route path="/admin" element={<AdminPage {...productData} />} />
          <Route
            path="/products/:id"
            element={<ProductDetailPage {...productData} />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  appContainer: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh"
  },
  main: {
    flex: 1
  }
};

export default App;
