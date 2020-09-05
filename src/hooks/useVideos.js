import { useState, useEffect } from "react";
import API from "../apis/youtube";

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async (query) => {
    const response = await API.get("search", {
      params: {
        q: query,
      },
    });
    setVideos(response.data.items);
  };

  useEffect(() => {
    fetchVideos(defaultTerm);
  }, [defaultTerm]);

  return [videos, fetchVideos];
};

export default useVideos;
