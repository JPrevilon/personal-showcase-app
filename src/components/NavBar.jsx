import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>FREEPOWER</h2>

      <div style={styles.links}>
        <NavLink to="/" style={styles.link}>
          Home
        </NavLink>

        <NavLink to="/shop" style={styles.link}>
          Shop
        </NavLink>

        <NavLink to="/admin" style={styles.link}>
          Admin
        </NavLink>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#5a3e2b",
    color: "white"
  },
  logo: {
    margin: 0
  },
  links: {
    display: "flex",
    gap: "1rem"
  },
  link: {
    textDecoration: "none",
    color: "white"
  }
};

export default NavBar;
