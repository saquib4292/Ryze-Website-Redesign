import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h3>Ryze</h3>

      <div style={styles.links}>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/contact">Contact</Link>
        <button style={styles.button}>Book a Demo</button>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 40px",
    borderBottom: "1px solid #eee",
    alignItems: "center",
    flexWrap: "wrap",
  },
  links: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    flexWrap: "wrap", // ✅ mobile fix
  },
  button: {
    padding: "8px 14px",
    background: "#000",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};