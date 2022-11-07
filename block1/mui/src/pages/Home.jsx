import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import MediaCard from "../components/Card";
import data from "../data.json";
// import Button from "@mui/material/Button";

export const Home = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={3}>
          {data.map((usedData, index) => {
            return (
              <Grid item xs={12} md={6} lg={4}>
                <MediaCard usedData={usedData} index={index} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
