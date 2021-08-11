import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <h1>Loading...</h1>;
    }

    const url = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui embed">
                <iframe
                    width="888"
                    height="500"
                    src={url}
                    title={video.snippet.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                ;
            </div>
            <div className="ui segment">
                <h4 className="header">{video.snippet.title}</h4>
                <p className="description">{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;
