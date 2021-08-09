import React from "react";
import ReactDOM from "react-dom";

// Rules of state :
// Only useable with class components (...hooks lets us use state in functional components)
// 'State' is a JS Object that contains data relevant to a component
// Updating 'state' on a component causes the component to (almost) instantly re-render
// State must be initialized when a component is created
// State can only be updated using function setState

// Creating Compnent :
// Our App component is sub-classing React.Component class
// that means we are borrowing features from that class
class App extends React.Component {
    // first method to be called
    constructor(props) {
        // super is a reference to the parent's constructor function , here: React.Component
        // this base (parent) class must have its own constructor function too
        // when we are defining our constructor function inside our App class we are overriding the parents constructor function
        // so to make sure parent's (React.Component)'s constructor gets called we need super() method
        super(props);

        // initialize the state object
        // this is the ONLY TIME we direct assign to this.state
        this.state = { lat: null, errorMessage: "" };

        // get position
        window.navigator.geolocation.getCurrentPosition(
            (pos) => {
                // updating state
                this.setState({ lat: pos.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // React says each component requires "render" method !!
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
