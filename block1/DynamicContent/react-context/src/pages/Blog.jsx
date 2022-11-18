import React, { useState, useEffect, useContext } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { MediaCard } from "../components/Card";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ColorModeContext } from "../context/ThemeContext";
import Loading from "..//components/Loading";

const instance = axios.create({
  baseURL: "https://dummyapi.io/data/v1/post",
  headers: { "app-id": "636e0d6642c1f665f684f489" },
});

function Blog() {
  const { theme } = useContext(ColorModeContext);
  console.log(theme);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const res = await instance.get("/");
        setPosts(res.data.data);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: theme === "white" ? "black" : "white",
        marginTop: "50px",
      }}
    >
      <Container>
        <div
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {loading === true ? (
            <Loading />
          ) : (
            <Grid container spacing={3}>
              {posts?.map((usedData, index) => {
                return (
                  <Grid item xs={12} md={6} lg={4}>
                    <MediaCard usedData={usedData} index={index} />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </div>
      </Container>
    </Box>
  );
}
export default Blog;
