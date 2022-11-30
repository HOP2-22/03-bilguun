import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import Rat from "./Components/hole.jsx";
import hammer from "./assets/hammer.png";

function App() {
  const [rats, setRats] = useState(
    new Array(3).fill(null).map(() => new Array(5).fill(false))
  );
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  const [seconds, setSeconds] = useState(30);
  const Whack = () => setScore(score + 1);
  const game = () => {
    setStart(true);
    setSeconds(30);
    setScore(0);
  };

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
    let interval = null;
    if (start === true) {
      interval = setInterval(() => setSeconds(seconds - 1), 10);
      console.log(seconds + " seconds");
    } else {
      clearInterval(interval);
    }

    if (seconds === 0) {
      clearInterval(interval);
      alert(`game is over you clicked ${score} times`);
      // }
    }

    return () => clearInterval(interval);
    // }
  }, [seconds, start]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (start === true && seconds > 0) {
        generate();
      } else {
        clearInterval(interval);
      }
    }, 300);
    return () => clearInterval(interval);
  }, [start, seconds]);
  return (
    <div style={{ cursor: "url(../assets/hammer.jpg), auto" }}>
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
                  <Rat active={rat} key={ind} Whack={Whack} />
                </Grid>
              ))}
            </Grid>
          ))}
          <Button
            variant="contained"
            onClick={() => {
              game();
            }}
          >
            start
          </Button>
        </Container>
      </Box>
    </div>
  );
}

export default App;
