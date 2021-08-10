import React from "react";

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state = { spans: 0 };

        // creating ref
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        // this does not work [reason : order of operations]
        // console.log(this.imageRef.current.clientHeight);

        // so after image loads, we will perform some operation
        this.imageRef.current.addEventListener("load", this.setSpans);
    }

    // setSpans is a callback function &
    // *callbacks hate 'this' :( . so, using arrow functions
    // calculating span required
    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    };

    render() {
        const { alt_description, urls } = this.props.image;

        return (
            // setting span dynamically
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    // pass ref as prop
                    ref={this.imageRef}
                    alt={alt_description}
                    src={urls.regular}
                />
            </div>
        );
    }
}

export default ImageCard;

// ? ref -> reference
// React refs are system that give direct access to a single DOM element
// that is rendered by a component
// this is used in-place of document.querySelector
// *we create ref in the constructor, assign them to instance variables
// *then pass a particular JSX element as props
