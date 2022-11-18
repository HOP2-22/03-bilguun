import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Container } from "@mui/material";

function App() {
  const [gifs, setGifs] = useState([]);
  useEffect(() => {
    const Data = async () => {
      try {
        const res = await axios.get(
          "https://api.giphy.com/v1/gifs/search?api_key=V04bmYdkIDL1LCJ5Q5ji3yBqfBoePq9G&q=hi&limit=25&offset=0&rating=pg&lang=en "
        );
        setGifs(res.data.data);
        console.log(res);
      } catch (error) {
        console.log(error.message);
      }
    };
    Data();
  }, []);
  return (
    <Box>
      {gifs?.map((useGifs, index) => {
        return (
          <Box>
            <img src={useGifs.bitly_gif_url} />
          </Box>
        );
      })}
    </Box>
  );
}

export default App;
