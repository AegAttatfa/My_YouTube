import React from "react";
import "./VideoDetail.css";

export default function VideoDetail({ video }) {
  if (!video) {
    return null;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="card">
      <div>
        <div className="video_detail">
          <iframe
            className="video_player"
            src={videoSrc}
            title={video.snippet.title}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
      <div className="content">
        <div className="header">
          <h1>{video.snippet.title}</h1>
        </div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
}
