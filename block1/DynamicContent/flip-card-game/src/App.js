import React, { useState, useEffect } from "react";
import dabi from "./pictures/fire.jpeg";
import tsuyu from "./pictures/frog.png";
import midoriya from "./pictures/midoriya.png";
import bakugou from "./pictures/370237-Anime-My-Hero-Academia-Phone-Wallpaper,png.png";
import cart from "./pictures/MV5BMjRlNTgwMWItYTAxMS00ODQ2LTlhOTMtOWRjMjlhYTQxNjlkXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg";
import "./App.css";

function App() {
  const characterImages = [
    { src: "/pictures/fire.jpeg" },
    { src: "/pictures/frog.png" },
    { src: "/pictures/midoriya.png" },
    { src: "/pictures/370237-Anime-My-Hero-Academia-Phone-Wallpaper,png.png" },
  ];
  const generate = () => {
    let a = [...characterImages, ...characterImages].sort(
      () => Math.random() - 0.5
    );
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    ></div>
  );
}

export default App;
