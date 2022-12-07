import React, { useState, useEffect } from "react";
import "./App.css";
import { Card } from "./components/card.jsx";

function App() {
  const characterImages = [
    "bakugou.png",
    // "fire.jpeg",
    // "frog.png",
    // "midoriya.png",
    // "3-gen.png",
    // "3-hero.png",
    // "10-hero.jpeg",
    // "all-might.jpeg",
    // "vacation.jpeg",
    // "fight.png",
  ];
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState(new Array(2).fill(true));
  const [firstFlip, setFirstFlip] = useState(null);
  const flip = (index) => {
    setFlipped(flipped.map((flip, ind) => (index === ind ? !flip : flip)));
    if (firstFlip === null) {
      setFirstFlip(index);
    } else {
      if (cards[firstFlip] === cards[index] && index !== firstFlip) {
        setTimeout(() => {
          const newCards = cards.map((card) =>
            card === cards[index] ? null : card
          );
          setCards(newCards);
          if (newCards.filter((card) => card !== null).length === 0) {
            alert("happy game!");
          }
        }, 600);
        console.log("same");
      }
      setTimeout(() => {
        setFirstFlip(null);
        setFlipped(new Array(2).fill(true));
      }, 600);
    }
  };
  const generate = () => {
    let a = [...characterImages, ...characterImages].sort(
      () => Math.random() - 0.5
    );
    setCards(a);
  };
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(10, 1fr)",
        }}
      >
        {cards.map((card, index) => {
          return (
            <Card
              card={card}
              flipped={flipped[index]}
              flip={() => flip(index)}
              key={index}
            />
          );
        })}
      </div>
      <button onClick={generate}>generate</button>
    </div>
  );
}

export default App;
