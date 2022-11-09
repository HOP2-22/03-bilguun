import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import data from "../data.json";
import { MediaCard } from "../components/Card";
import { Box } from "@mui/material";

function Home() {
  //   const { theme, changeTheme } = useContext(ColorModeContext);
  //   return (
  //     <div>
  //       <div>home theme: {theme}</div>
  //       <button onClick={changeTheme}>Change theme</button>
  //     </div>
  //   );
  return (
    <Box>
      <Container>
        <Grid container spacing={3}>
          {data?.map((usedData, index) => {
            return (
              <Grid item xs={12} md={6} lg={4}>
                <MediaCard usedData={usedData} index={index} />
              </Grid>
            );
          })}
          asd asdfasdf
        </Grid>
      </Container>
    </Box>
  );
}
export default Home;
