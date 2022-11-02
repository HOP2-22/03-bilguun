import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const Layout = ({ children }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  console.log(offset);

  return (
    <div>
      <div
        style={{
          position: "fixed",
          width: "100%",
          backgroundColor: offset !== 0 ? "#fff" : "transparent",
          zIndex: 999,
        }}
      >
        <Navigation />
      </div>
      {children}
      <Outlet />
      <Footer />
    </div>
  );
};
