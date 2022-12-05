import React, { useState, useEffect } from "react";
import cart from "./pictures/MV5BMjRlNTgwMWItYTAxMS00ODQ2LTlhOTMtOWRjMjlhYTQxNjlkXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg";
import "./App.css";
import fire from "./pictures/fire.jpeg";
import frog from "./pictures/frog.png";
import midoriya from "./pictures/midoriya.png";
import bakugou from "./pictures/370237-Anime-My-Hero-Academia-Phone-Wallpaper,png.png";
function* chunks(arr, n) {
  for (let i = 0; i < arr.length; i += n) {
    yield arr.slice(i, i + n);
  }
}
function App() {
  const [cards, setCards] = useState([]);
  const [flip, setFlip] = useState(0);
  const characterImages = [
    {
      src: fire,
    },
    {
      src: frog,
    },
    {
      src: midoriya,
    },
    {
      src: bakugou,
    },
  ];

  const generate = () => {
    let a = [...characterImages, ...characterImages].sort(
      () => Math.random() - 0.5
    );
    setCards([...chunks(a, 2)]);
    setFlip(0);
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {cards.map((card, index) => {
        return (
          <div>
            <img src={card.src} alt="front" width={200} height={350} />
            <img src={cart} alt="back" width={200} height={350} />
          </div>
        );
      })}
      <button onClick={generate}>generate</button>
    </div>
  );
}

export default App;
