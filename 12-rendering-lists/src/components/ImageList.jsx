import React from "react";

const ImageList = (props) => {
    const images = props.images.map((item, index) => {
        return (
            <img
                src={item.urls.regular}
                alt={item.alt_description}
                id={index}
            />
        );
    });

    return <>{images}</>;
};

export default ImageList;
