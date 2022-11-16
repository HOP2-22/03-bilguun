import React from "react";
import image from "../assets/images/ooto Meetings 1.png";
import { useContext } from "react";
import { ColorModeContext } from "..//context/ThemeContext";

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
  const { theme } = useContext(ColorModeContext);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw",
        backgroundColor: theme === "dark" ? "white" : "black",
        // width: "100vw",
      }}
    >
      <div style={styles.text}>
        <p
          style={{
            fontSize: "48px",
            margin: "0",
            fontWeight: "800",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          Your Hub for
        </p>
        <p
          style={{
            fontSize: "48px",
            margin: "0",
            fontWeight: "800",
            marginBottom: "20px",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          teamwork
        </p>
        <div
          style={{
            fontSize: "18px",
            color: theme === "dark" ? "black" : "white",
          }}
        >
          <p style={{ color: theme === "dark" ? "black" : "white" }}>
            Give everyone you work with—inside and outside your company—a more
          </p>
          <p style={{ color: theme === "dark" ? "black" : "white" }}>
            productive way to stay in sync. Respond faster with emoji, keep
          </p>
          <p style={{ color: theme === "dark" ? "black" : "white" }}>
            conversations focused in channels, and simplify all your
            communication
          </p>
          <p style={{ color: theme === "dark" ? "black" : "white" }}>
            into one place.
          </p>
          <a href="/">Learn more..</a>
        </div>
      </div>
      <img src={image} alt="meeting" />
    </div>
  );
};

export default PageOne;
