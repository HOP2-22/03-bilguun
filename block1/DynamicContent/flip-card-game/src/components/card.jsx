import React, { useState, useEffect } from "react";
export const Card = ({ card, flip, flipped }) => {
  return (
    <div
      style={{
        width: "200px",
        height: "300px",
        position: "relative",
        transform: `rotateY(${flipped ? "180deg" : "0deg"})`,
        transformStyle: "preserve-3d",
        transition: "transform 0.6s",
      }}
      onClick={() => {
        flip();
      }}
    >
      {card !== null && (
        <>
          <img
            src={card}
            alt="front"
            style={{
              position: "absolute",
              right: "0",
              width: "200px",
              height: "300px",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          />
          <img
            src="/cover.jpg"
            alt="back"
            style={{
              position: "absolute",
              right: "0",
              width: "200px",
              height: "300px",
              backfaceVisibility: "hidden",
            }}
          />
        </>
      )}
    </div>
  );
};

export default Card;
