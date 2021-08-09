import React from "react";
import ReactDOM from "react-dom";

// Component lifecycle methods are the functions we can optionally define inside class based components
// These methods will be automatically called by React at certain points during it's lifecycle
// LifeCycle : Component Creation -> Show in DOM -> change in state -> also might be removed altogether from DOM!
// LifeCycle methods are functions that are called during a distinct time at that cycle

class App extends React.Component {
    // technically constructor() and render() are also lifecycle methods, as they run during a distinct time at component's creation/render
    constructor(props) {
        super(props);
        this.state = { lat: null, errorMessage: "" };

        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                this.setState({ lat: pos.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // this lifecycle method runs when a component first shows up
    componentDidMount() {
        console.log("Component is rendered!!");
    }
    // this lifecycle method runs everytime a component is updated
    componentDidUpdate() {
        console.log("Component was just updated!!");
    }

    // this lifecycle method sits and waits until the component is no longer shown
    // componentWillUnmount() {}

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
