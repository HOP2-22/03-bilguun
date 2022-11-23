import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import Gifs from "./components/gifs";
import Button from "@mui/material/Button";
import Loading from ".//components/Loading";

function App() {
  const [gifs, setGifs] = useState([]);
  const [inputValue, setInputValue] = useState("nba");
  const [loading, setLoading] = useState(false);
  // useEffect(() => {
  const data = async () => {
    try {
      const res = await axios.get(
        `https://api.giphy.com/v1/stickers/search?api_key=V04bmYdkIDL1LCJ5Q5ji3yBqfBoePq9G&q=${inputValue}&limit=25&offset=0&rating=r&lang=en`
      );
      // setLoading(true);
      setGifs(res);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
    // setLoading(false);
  };
  // data();
  // }, []);
  useEffect(() => {
    const reqInterceptor = (request) => {
      setLoading(true);
      return request;
    };
    const interceptor = axios.interceptors.request.use(reqInterceptor);
    return () => axios.interceptors.request.eject(interceptor);
  }, []);
  useEffect(() => {
    const resInterceptor = (response) => {
      console.log("res");
      setLoading(false);
      return response.data.data;
    };
    const interceptor = axios.interceptors.response.use(
      resInterceptor,
      () => {}
    );

    return () => axios.interceptors.response.eject(interceptor);
  }, []);
  console.log(gifs);
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100%",
        padding: "100px",
        dipslay: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:
          "linear-gradient(140deg, black 0%, aqua 50%, blue 75%)",
      }}
    >
      <form
        onChange={(e) => {
          setInputValue(e.target.value);
          console.log(inputValue);
        }}
        style={{ marginBottom: "30px" }}
      >
        <OutlinedInput
          type="search"
          placeholder="Search..."
          sx={{ color: "white" }}
        />
        <Button variant="contained" onClick={data}>
          Search
        </Button>
      </form>
      <Box sx={{ width: "2000px", display: "flex", flexWrap: "wrap" }}>
        {loading === true ? (
          <Loading />
        ) : (
          <Grid container spacing={3}>
            {gifs?.map((useGifs, index) => {
              return (
                <Grid item xs={12} md={6} lg={4}>
                  <Gifs useGifs={useGifs} index={index} key={index} />
                </Grid>
              );
            })}
          </Grid>
        )}
      </Box>
    </Box>
  );
}

export default App;
