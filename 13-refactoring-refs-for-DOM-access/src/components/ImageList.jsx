import React from "react";
import ImageCard from "./ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
    const images = props.images.map((item) => {
        return <ImageCard key={item.id} image={item} />;
    });

    return <div className="image-list">{images}</div>;
};

export default ImageList;
