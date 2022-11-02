import React, { useState, useEffect } from "react";
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
  headerLinks: {
    gap: "60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // header: {
  //   height: "10vh",
  //   width: "2500px",
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   top: "0",
  // },
};

export const Navigation = () => {
  const [state, setState] = useState(0);
  useEffect(() => {
    const onScroll = () => setState(window.pageYOffset);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        backgroundColor: state !== 0 ? "#fff" : "transparent",
        zIndex: 999,
        height: "10vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        top: "0",
      }}
    >
      <Link
        to="/"
        style={{
          color: state !== 0 ? "black" : "white",
          textDecoration: "none",
        }}
      >
        <h1>
          team<em style={{ color: "#0bbfe2", fontSize: "50px" }}>.</em>
        </h1>
      </Link>
      <div style={styles.headerLinks}>
        <Link
          style={{
            color: state !== 0 ? "black" : "white",
            textDecoration: "none",
          }}
          to="/Products"
        >
          Products
        </Link>
        <Link
          style={{
            color: state !== 0 ? "black" : "white",
            textDecoration: "none",
          }}
          to="/Services"
        >
          Services
        </Link>
        <Link
          style={{
            color: state !== 0 ? "black" : "white",
            textDecoration: "none",
          }}
          to="/Contact"
        >
          Contact
        </Link>
        <Link
          style={{
            color: state !== 0 ? "black" : "white",
            textDecoration: "none",
          }}
          to="/Sign In"
        >
          Sign in
        </Link>
        <button
          style={{
            border: state !== 0 ? "2px solid black" : "2px solid white",
            color: state !== 0 ? "black" : "white",
            fontWeight: "700",
            fontSize: "16px",
            height: "70px",
            borderRadius: "5px",
            width: "150px",
            background: "transparent",
          }}
        >
          Get Access
        </button>
      </div>
    </div>
  );
};

export default Navigation;
