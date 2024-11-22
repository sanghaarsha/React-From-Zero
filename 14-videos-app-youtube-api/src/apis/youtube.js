import axios from "axios";

const KEY = process.env.REACT_APP_YT_API;

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 6,
        key: KEY,
    },
});
