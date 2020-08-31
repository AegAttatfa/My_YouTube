import axios from "axios";

const API_KEY = "AIzaSyAhPgk83yod6j5HcTsx7sK6dU5tlRFOxts";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY,
  },
});
