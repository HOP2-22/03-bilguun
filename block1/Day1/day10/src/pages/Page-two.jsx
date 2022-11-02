import React from "react";
import image from "../assets/images/brook.png";

const styles = {
  text: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    fontWeight: "600",
    width: "50%",
  },
  image: {
    width: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

export const PageTwo = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        // width: "100vw",
      }}
    >
      <div style={styles.image}>
        <img src={image} alt="brook" />
      </div>
      <div style={styles.text}>
        <p style={{ fontSize: "48px", margin: "0", fontWeight: "800" }}>
          Simple Task
        </p>
        <p
          style={{
            fontSize: "48px",
            margin: "0",
            fontWeight: "800",
            marginBottom: "20px",
          }}
        >
          management
        </p>
        <div style={{ fontSize: "18px", color: "#182D40" }}>
          <p>
            Give everyone you work with—inside and outside your company—a more
          </p>
          <p>productive way to stay in sync. Respond faster with emoji, keep</p>
          <p>
            conversations focused in channels, and simplify all your
            communication
          </p>
          <p>into one place.</p>
          <a href="#">Learn more..</a>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
