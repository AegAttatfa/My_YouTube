import axios from "axios";

const API_KEY = "AIzaSyAEvQbDUBFH8JM90r9sBjbbQb8DsEeFlzQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 5,
    key: API_KEY,
  },
});
