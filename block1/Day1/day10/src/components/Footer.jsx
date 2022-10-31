import React from "react";
import Twitter from "..//assets/svg/Twitter.svg";
import Facebook from "..//assets/svg/Facebook .svg";
import Instagram from "..//assets/svg/Instagram .svg";
const styles = {
  footer: {
    width: "100vw",
    height: "40vh",
    backgroundColor: "#252B3B",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flexGrow: "1",
    alignItems: "center",
  },
  social: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: "20px",
  },
};

export const Footer = () => {
  return (
    <div style={styles.footer}>
      <div style={styles.options}>
        <h1>team.</h1>
        <div style={styles.social}>
          <img src={Twitter} alt="ff" />
          Twitter
        </div>
        <div style={styles.social}>
          <img src={Facebook} alt="ff" />
          Twitter
        </div>
        <div style={styles.social}>
          <img src={Instagram} alt="ff" />
          Twitter
        </div>
        <div style={styles.social}>
          <img src={Twitter} alt="ff" />
          Twitter
        </div>
        <div style={styles.social}>
          <img src={Facebook} alt="ff" />
          Twitter
        </div>
        <div style={styles.social}>
          <img src={Instagram} alt="ff" />
          Twitter
        </div>
      </div>
      <div style={styles.options}>
        <p>Use Cases</p>
        <p>UX Design</p>
        <p>UX Design</p>
        <p>UX Design</p>
        <p>UX Design</p>
        <p>UX Design</p>
        <p>UX Design</p>
      </div>
      <div style={styles.options}>
        <p>Explore</p>
        <p>Explore</p>
        <p>Explore</p>
        <p>Explore</p>
        <p>Explore</p>
        <p>Explore</p>
        <p>Explore</p>
      </div>
      <div style={styles.options}>
        <p>Use Cases</p>
        <p>UX Design</p>
        <p>UX Design</p>
        <p>UX Design</p>
        <p>UX Design</p>
        <p>UX Design</p>
        <p>UX Design</p>
      </div>
      <div style={styles.options}>
        <p>Use Cases</p>
        <p>UX Design</p>
        <p>UX Design</p>
        <p>UX Design</p>
        <p>UX Design</p>
        <p>UX Design</p>
        <p>UX Design</p>
      </div>
      <div style={styles.options}>
        <h1>subscribe for our newsletter</h1>
        <input type="text" placeholder="email..." />
      </div>
    </div>
  );
};
