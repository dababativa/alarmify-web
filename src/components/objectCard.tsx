import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Box } from "@mui/material";

type props = {
  title: string;
  imageRoute: string;
};

export default function ActionAreaCard({ title, imageRoute }: props) {
  return (
    <Card
      sx={{
        maxWidth: 219,
        height: 219,
        margin: "10px",
        display: "inline-block",
        marginRight: "65px",
      }}
    >
      <CardActionArea>
        <CardMedia component="img" height="140" image={imageRoute} alt="." />
        <CardContent>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Typography gutterBottom variant="h4" component="div">
              {title}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
