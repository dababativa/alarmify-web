import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

export default function AlarmCard({ name }: { name?: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        border: "1px solid black",
        borderRadius: "10px",
        width: "385px",
        height: "149px",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "white",
      }}
    >
      <Typography variant="h4" component="span">
        <strong>10:02 AM</strong>
      </Typography>
      {name && (
        <Typography variant="h6" component="span">
          <strong>{name}</strong>
        </Typography>
      )}
    </Box>
  );
}
