import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Gifs from "./components/gifs";
import Button from "@mui/material/Button";

function App() {
  const [gifs, setGifs] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const Data = async () => {
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/stickers/search?api_key=V04bmYdkIDL1LCJ5Q5ji3yBqfBoePq9G&q=${inputValue}&limit=25&offset=0&rating=r&lang=en`
      );
      setGifs(res.data.data);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Box
      sx={{
        width: "100vw",
        padding: "100px",
        dipslay: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(140deg, black 0%, blue 50%, grey 75%)",
      }}
    >
      <form
        onChange={(e) => {
          Data();
          setInputValue(e.target.value);
        }}
        style={{ marginBottom: "30px" }}
      >
        <OutlinedInput
          type="search"
          placeholder="Search..."
          sx={{ color: "white" }}
        />
        <Button variant="contained">Search</Button>
      </form>
      <Box sx={{ width: "2000px", display: "flex", flexWrap: "wrap" }}>
        {gifs?.map((useGifs, index) => {
          return <Gifs useGifs={useGifs} index={index} key={index} />;
        })}
      </Box>
    </Box>
  );
}

export default App;
