import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
    const onItemClick = () => {
        onVideoSelect(video);
    };

    return (
        <div className="item video-item" onClick={onItemClick}>
            <img
                className="ui image"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
                <div className="description channel-name">
                    {video.snippet.channelTitle}
                </div>
            </div>
        </div>
    );
};

export default VideoItem;
