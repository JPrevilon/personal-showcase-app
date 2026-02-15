import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div style={styles.hero}>
      <div style={styles.overlay}>
        <h1 style={styles.title}>FREEPOWER Supply</h1>
        <p style={styles.tagline}>
          Premium streetwear built for resilience.
        </p>

        <Link to="/shop" style={styles.button}>
          Shop Now
        </Link>
      </div>
    </div>
  );
}

const styles = {
  hero: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8dccb"
  },
  overlay: {
    textAlign: "center"
  },
  title: {
    fontSize: "3rem",
    marginBottom: "1rem",
    color: "#5a3e2b"
  },
  tagline: {
    fontSize: "1.2rem",
    marginBottom: "2rem"
  },
  button: {
    padding: "0.75rem 1.5rem",
    backgroundColor: "#5a3e2b",
    color: "white",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold"
  }
};

export default HomePage;
