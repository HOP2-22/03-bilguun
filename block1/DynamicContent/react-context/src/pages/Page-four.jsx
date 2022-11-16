import React from "react";
import { useContext } from "react";
import { ColorModeContext } from "..//context/ThemeContext";
import "../styles/cart.css";
import Star from "..//assets/images/svg/star.svg";
import profile from "../assets/images/image.jpeg";

export const PageFour = () => {
  const { theme } = useContext(ColorModeContext);
  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "white" : "black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
      }}
    >
      <p
        style={{
          fontSize: "48px",
          color: theme === "dark" ? "black" : "white",
        }}
      >
        What people say about us
      </p>
      <div
        style={{
          height: "400px",
          width: "1250px",
          paddingLeft: "10px",
          display: "flex",
          alignItems: "center",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          transition: "1",
          color: theme === "dark" ? "black" : "white",
        }}
      >
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

export const Cart = () => {
  const { theme } = useContext(ColorModeContext);
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        padding: "20px",
        justifyContent: "space-evenly",
        marginLeft: "20px",
        alignItems: "flex-start",
        boxShadow:
          "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px",
        "rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px":
          "rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px",
        scrollSnapAlign: "start",
      }}
    >
      <div className="star">
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
        <img src={Star} alt="star" />
      </div>
      <div
        style={{
          width: "300px",
          height: "100px",
          fontWeight: "500",
          color: theme === "dark" ? "black" : "white",
        }}
      >
        Give everyone you work with—inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </div>
      <div className="user">
        <img src={profile} alt="" width={30} />
        <p style={{ color: theme === "dark" ? "black" : "white" }}>
          Amy Klassen
        </p>
      </div>
    </div>
  );
};

export default PageFour;
