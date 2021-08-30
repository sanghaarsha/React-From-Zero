import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    // alternate way to initialize state :
    // babel will transpile this one line into our previous code :)
    state = { lat: null, errorMessage: "" };

    // get data from geoAPI when component mounts
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => this.setState({ lat: pos.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <h1> Error : {this.state.errorMessage} </h1>;
        } else if (!this.state.errorMessage && this.state.lat) {
            return <h1> Latitide : {this.state.lat} </h1>;
        } else {
            return <h1>loading...</h1>;
        }
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
