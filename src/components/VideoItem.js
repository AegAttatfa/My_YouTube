import React from "react";

export default function VideoItem({ video, onVideoSelect }) {
  return (
    <div
      className="ui fluid card"
      style={{ padding: 10 }}
      onClick={() => onVideoSelect(video)}
    >
      <div className="image">
        <img
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
        />
      </div>
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
}
