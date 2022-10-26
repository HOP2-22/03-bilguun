import React from "react";
import "../styles/home.css";
import image from "../images/Image.jpg";

const styles = {
  BigWord: {
    fontSize: "48px",
    fontFamily: "Work Sans",
    fontWeight: "700",
    marginBottom: "30px",
  },
  middle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flexStart",
    alignItems: "center",
    width: "30vw",
    marginLeft: "200px",
    marginTop: "300px",
  },
  word: {
    fontWeight: "700",
    fontSize: "18px ",
    marginBottom: "40px",
  },
  input: {
    width: "19vw",
    height: "5vh",
    marginRight: "10px",
    fontWeight: "600",
    fontSize: "16px ",
    border: "none",
    borderRadius: "5px",
  },
  Button: {
    height: "5.2vh",
    width: "10vw",
    color: "white",
    fontWeight: "700",
    fontSize: "16px ",
    backgroundColor: "deepskyblue",
    border: "none",
    borderRadius: "5px",
  },
};

export const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div style={styles.middle}>
        <div style={styles.BigWord}>
          Instant collaborations for remote teams
        </div>
        <div style={styles.word}>
          All in one for your remote team chats, collaboration and track
          projects
        </div>
        <div style={styles.inputDiv}>
          <input placeholder="Email" style={styles.input} />
          <button style={styles.Button}>Get Early Access</button>
        </div>
      </div>
    </div>
  );
};
