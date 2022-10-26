import React, { useState, useEffect } from "react";

const styles = {
  time: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
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
  },
  buttonRed: {
    backgroundColor: "red",
    color: "white",
    border: "none",
    width: "100px",
    height: "40px",
  },
  buttonBlue: {
    backgroundColor: "blue",
    color: "white",
    border: "none",
    width: "100px",
    height: "40px",
  },
};
export const MyButton = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <div style={styles.time}>
        <p>00:</p>
        <p>00:</p>
        <p>00:</p>
        <p>00</p>
      </div>
      <div style={styles.buttonDiv}>
        <button style={styles.buttonGreen}>Start</button>
        <button style={styles.buttonRed}>Stop</button>
        <button style={styles.buttonBlue}>Reset</button>
      </div>
    </div>
  );
};
