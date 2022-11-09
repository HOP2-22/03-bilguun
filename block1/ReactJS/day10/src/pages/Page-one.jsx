import React from "react";
import image from "../assets/images/ooto Meetings 1.png";

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
};

export const PageOne = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        // width: "100vw",
      }}
    >
      <div style={styles.text}>
        <p style={{ fontSize: "48px", margin: "0", fontWeight: "800" }}>
          Your Hub for
        </p>
        <p
          style={{
            fontSize: "48px",
            margin: "0",
            fontWeight: "800",
            marginBottom: "20px",
          }}
        >
          teamwork
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
          <a href="/">Learn more..</a>
        </div>
      </div>
      <img src={image} alt="meeting" />
    </div>
  );
};

export default PageOne;
