import React from "react";
import upperBack from "../assets/UpperBack.png";
import lowerBack from "../assets/LowerBack.png";
import rat from "../assets/rat.png";
import "../hole.css";

export const Rat = ({ active, Whack }) => {
  return (
    <div
      style={{
        height: "250px",
        width: "128px",
        position: "relative",
        display: " flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src={upperBack}
        alt="rat"
        width={128}
        height={128}
        style={{ zIndex: "0" }}
      />
      <div className="hole" onClick={Whack}>
        <img
          src={rat}
          alt="rat"
          width={96}
          height={128}
          style={{
            position: "absolute",
            bottom: active ? "100px" : "20px",
            left: 16,
            // animation: "hole-up 1s linear 2s infinite alternate",
            transition: "200ms",
          }}
        />
      </div>
      <img
        src={lowerBack}
        alt="rat"
        width={128}
        height={144}
        style={{ position: "absolute", bottom: 0 }}
      />
    </div>
  );
};

export default Rat;
