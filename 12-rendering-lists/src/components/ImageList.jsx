import React from "react";

const ImageList = (props) => {
    const images = props.images.map((item) => {
        return (
            <img
                src={item.urls.regular}
                alt={item.alt_description}
                key={item.id}
            />
        );
    });

    return <>{images}</>;
};

export default ImageList;
