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
      interval = setInterval(() => setSeconds(seconds - 1), 1000);
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
    }, 1000);
    return () => clearInterval(interval);
  }, [start, seconds]);
  return (
    <>
      <h1>Whack a mole game</h1>
      {!start && (
        <div
          style={{
            width: "100vw",
            height: "70vh",
            backgroundColor: "#b40000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              game();
            }}
          >
            Start
          </Button>
        </div>
      )}
      {start && (
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
                <Typography variant="h6">Time:{seconds}</Typography>
                <Typography variant="h6">Score:{score}</Typography>
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
            </Container>
          </Box>
        </div>
      )}
    </>
  );
}

export default App;
