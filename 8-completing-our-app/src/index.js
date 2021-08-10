import React from "react";
import ReactDOM from "react-dom";
import Season from "./Season";
import Spinner from "./Spinner";

class App extends React.Component {
    state = { lat: null, errorMessage: "" };

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (pos) => this.setState({ lat: pos.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    // creating a helper function for render method
    renderContent() {
        if (this.state.errorMessage && !this.state.lat) {
            return <h1> Error : {this.state.errorMessage} </h1>;
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <Season lat={this.state.lat} />;
        }

        return <Spinner message="Please accept location request!" />;
    }

    // main reason of creating a helper function is to avoid multiple return statements inside render method!
    render() {
        return <div>{this.renderContent()}</div>;
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
