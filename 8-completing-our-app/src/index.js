import React from "react";
import ReactDOM from "react-dom";
import Season from "./Season";

class App extends React.Component {
    state = { lat: null, errorMessage: "" };

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
            return <Season lat={this.state.lat} />;
        } else {
            return <h1>loading...</h1>;
        }
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
