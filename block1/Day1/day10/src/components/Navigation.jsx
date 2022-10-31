import React from "react";
import { Link } from "react-router-dom";

const styles = {
  link: {
    // color: "white",
    textDecoration: "none",
    fontWeight: "700",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px",
  },
  logo: {
    // color: "white",
    textDecoration: "none",
  },
  headerLinks: {
    gap: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    background: "transparent",
    border: "1px solid white",
    // color: "white",
    fontWeight: "700",
    fontSize: "16px",
    height: "70px",
    borderRadius: "5px",
    width: "150px",
  },
  header: {
    height: "10vh",
    width: "100vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    top: "0",
  },
};

export const Navigation = () => {
  return (
    <div style={styles.header}>
      <Link to="/" style={styles.logo}>
        <h1>team.</h1>
      </Link>
      <div style={styles.headerLinks}>
        <Link style={styles.link} to="/Products">
          Products
        </Link>
        <Link style={styles.link} to="/Services">
          Services
        </Link>
        <Link style={styles.link} to="/Contact">
          Contact
        </Link>
        <Link style={styles.link} to="/Sign In">
          Sign in
        </Link>
        <button style={styles.button}>Get Access</button>
      </div>
    </div>
  );
};

export default Navigation;
