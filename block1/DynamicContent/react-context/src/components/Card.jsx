import * as React from "react";
import { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { ColorModeContext } from "..//context/ThemeContext";

// import Image from "../svg/Rectangle.svg";

export const MediaCard = ({ usedData }) => {
  const { theme } = useContext(ColorModeContext);
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "20px",
        marginTop: "20px",
        fontFamily: "Mulish",
        backgroundColor: theme === "dark" ? "white" : "black",
        color: theme === "dark" ? "black" : "white",
      }}
    >
      <CardMedia
        component="img"
        image={usedData.image}
        alt="meeting"
        height="170"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ color: theme === "dark" ? "black" : "white" }}
        >
          {usedData.text}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ color: theme === "dark" ? "black" : "white" }}
        >
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non eos
          obcaecati ipsa quaerat libero suscipit sunt pariatur sequi harum
          fugiat consequuntur, totam ex alias distinctio dicta beatae aspernatur
          asperiores aut?
        </Typography>
      </CardContent>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Stack direction="row" spacing={2}>
          <img
            src={usedData.owner.picture}
            alt="profile"
            widht={30}
            height={30}
          />
        </Stack>
        <p sx={{ fontSize: "10px" }}>{usedData.owner.firstName}</p>
        <p sx={{ fontSize: "10px" }}>{usedData.publishDate}</p>
      </CardContent>
    </Card>
  );
};
