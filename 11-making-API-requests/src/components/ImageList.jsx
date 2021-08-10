import React from "react";

class ImageList extends React.Component {
    render() {
        return (
            <>
                <h1>Found : {this.props.images.length}</h1>
            </>
        );
    }
}

export default ImageList;
