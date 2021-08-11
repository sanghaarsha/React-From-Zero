import React from "react";

// using props destucturing
const VideoItem = ({ video }) => {
    return <h1>{video.snippet.title}</h1>;
};

export default VideoItem;
