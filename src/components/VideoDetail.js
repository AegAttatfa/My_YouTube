import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 800,
  },
  media: {
    height: 140,
  },
});

export default function VideoDetail({ video }) {
  const classes = useStyles();
  if (!video) {
    return <div>Loading ...</div>;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia>
          <iframe
            width="100%"
            height="400px"
            src={videoSrc}
            title={video.snippet.title}
          />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {video.snippet.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {video.snippet.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
