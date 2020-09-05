import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const rendered_list = videos.map((video) => {
    return (
      <VideoItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />
    );
  });
  return (
    <div className="ui centered cards">
      <ul>{rendered_list}</ul>
    </div>
  );
};

export default VideoList;
