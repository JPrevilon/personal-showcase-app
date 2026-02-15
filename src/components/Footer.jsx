function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} FREEPOWER Supply</p>
      <p>Premium streetwear built for resilience.</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "auto",
    padding: "1rem",
    textAlign: "center",
    backgroundColor: "#5a3e2b",
    color: "white"
  }
};

export default Footer;
