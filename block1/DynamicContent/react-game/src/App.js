import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import Rat from "./Components/hole.jsx";

function App() {
  const [rats, setRats] = useState(
    new Array(3).fill(null).map(() => new Array(5).fill(false))
  );
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const Whack = (points) => setScore(score + points);

  const generate = () => {
    let newRats = new Array(3).fill(null).map(() => new Array(5).fill(false));
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 5; j++) {
        newRats[i][j] = Math.round(Math.random());
      }
    }
    setRats(newRats);
  };
  useEffect(() => {
    const interval = setInterval(
      () => setSeconds(Math.floor((60 / 1000) % 60)),
      1000
    );
    if (!start) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [start]);

  useEffect(() => {
    const interval = setInterval(() => {
      start === true ? generate() : clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, []);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#b40000",
        color: "white",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "row", gap: "100px" }}>
          <Typography>Time:{seconds}</Typography>
          <Typography>Score:{score}</Typography>
        </Box>
        {rats.map((row, index) => (
          <Grid container spacing={5} key={index}>
            {row.map((rat, ind) => (
              <Grid item xs={2}>
                <Rat active={rat} key={ind} />
              </Grid>
            ))}
          </Grid>
        ))}
      </Container>
      <button
        onClick={() => {
          setStart(true);
          console.log(start);
        }}
      >
        start
      </button>
    </Box>
  );
}

export default App;
