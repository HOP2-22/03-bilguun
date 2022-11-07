import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
// import Image from "../svg/Rectangle.svg";
import data from "..//data.json";

export default function MediaCard({ usedData }) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "20px",
        marginTop: "20px",
        fontFamily: "Roboto",
        color: "grey",
      }}
    >
      <CardMedia
        component="img"
        image={usedData.dataImage}
        alt="meeting"
        height="170"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {usedData.dataTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {usedData.dataDescription}
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
          <Avatar alt="Remy Sharp" src={usedData.avatar} />
        </Stack>
        <p>{usedData.dataName}</p>
        <p>{usedData.dataDate}</p>
      </CardContent>
    </Card>
  );
}
