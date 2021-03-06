import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

import "./App.css";

const App = () => {
  const [videos, fetchVideos] = useVideos("Docker");
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui grid">
      <div className="sixteen wide column">
        <SearchBar onFormSubmit={fetchVideos} />
      </div>
      <div className="ten wide column">
        <VideoDetail video={selectedVideo} />
      </div>
      <div className="six wide list_videos column">
        <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
      </div>
    </div>
  );
};

export default App;
