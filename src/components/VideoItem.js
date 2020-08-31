import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography, Divider } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
  media: {
    height: 140,
  },
});

export default function VideoItem({ video, onVideoSelect }) {
  const classes = useStyles();
  return (
    <Card
      onClick={() => {
        onVideoSelect(video);
      }}
      className={classes.root}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={video.snippet.thumbnails.high.url}
          title={video.snippet.title}
        />
        <CardContent>
          <Typography gutterBottom component="h2">
            {video.snippet.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider variant="inset" component="li" />
    </Card>
  );
}
