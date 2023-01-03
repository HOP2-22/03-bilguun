import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import Group from "../assets/Group.svg";

export const Boginoo = () => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "100px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Group} alt="group" />
          <Typography
            sx={{ fontFamily: "Lobster", fontSize: "56px", color: "#02B589" }}
          >
            Boginoo
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "40px",
          }}
        >
          <TextField
            id="outlined-basic"
            label="https://www.web-huudas.mn"
            variant="outlined"
            sx={{ width: "30%", padding: "0" }}
          />
          <Button
            variant="outlined"
            height={44}
            sx={{
              backgroundColor: "#02B589",
              color: "white",
              height: "55px",
              borderRadius: "100px",
            }}
          >
            Богиносгох
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Boginoo;
