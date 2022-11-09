import React from "react";
import { Cart } from "../components/cart";
const styles = {
  pageFour: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // width: "100vw",
    height: "100vh",
  },
  cart: {
    height: "400px",
    width: "1250px",
    paddingLeft: "10px",
    display: "flex",
    alignItems: "center",
    overflowX: "scroll",
    scrollSnapType: "x mandatory",
    transition: "1",
  },
};

export const PageFour = () => {
  return (
    <div style={styles.pageFour}>
      <p
        style={{
          color: "black",
          fontSize: "48px",
        }}
      >
        What people say about us
      </p>
      <div style={styles.cart}>
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
        <Cart />
      </div>
    </div>
  );
};

export default PageFour;
