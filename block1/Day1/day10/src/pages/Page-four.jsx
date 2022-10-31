import React from "react";
import { Cart } from "..//components/cart";
const styles = {
  pageFour: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
  },
  cart: {
    display: "flex",
    flexDirection: "row",
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
      </div>
    </div>
  );
};

export default PageFour;
