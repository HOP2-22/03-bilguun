import React, { useState, useEffect } from "react";

const styles = {
  effect: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    fontSize: "60px",
    backgroundColor: "black",
    color: "#31E1F7",
  },
  time: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: "40px",
    width: "50vw",
    height: "20vh",
    border: "4px solid aqua",
    boxShadow: "aqua 3px 3px 6px 0px inset, aqua -3px -3px 6px 1px inset",
  },
  buttonDiv: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: "40px",
  },
  buttonGreen: {
    backgroundColor: "green",
    color: "white",
    border: "none",
    width: "100px",
    height: "40px",
    borderRadius: "8px",
  },
  buttonRed: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    width: "100px",
    height: "40px",
    borderRadius: "8px",
  },
  buttonBlue: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    width: "100px",
    height: "40px",
    borderRadius: "8px",
  },
  clock: {
    marginRight: "20px",
  },
};
export const MyButton = () => {
  const [count, setCount] = useState(0);
  const [countOn, setCountOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (countOn) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [countOn]);

  return (
    <div style={styles.effect}>
      <div style={styles.time}>
        <div style={styles.clock}>
          {"0" + Math.floor((count / 60000) % 60)} :
        </div>
        <div style={styles.clock}>
          {"0" + Math.floor((count / 1000) % 60)} :
        </div>
        <div style={styles.clock}>{"0" + Math.floor((count / 10) % 100)} </div>
      </div>
      <div style={styles.buttonDiv}>
        <button style={styles.buttonGreen} onClick={() => setCountOn(true)}>
          Start
        </button>
        <button style={styles.buttonRed} onClick={() => setCountOn(false)}>
          Stop
        </button>
        <button style={styles.buttonBlue} onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};
