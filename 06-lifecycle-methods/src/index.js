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

// Why lifecycle methods ?

// 1. Constructor -> *Do one time setup (initialize state, oustside API call for data [like geolocation API here] ,etc..)*

// 2. render -> *Return JSX, it's the only thing it does!*

// 3. componentDidMount -> *Initial data loading for component, if it needs to be done just one time, as componentDidMount just runs one time!*

// NOTE: -- Notice how constructor and componentDidMount have similar use-case? It's true one can be used in place of another but it's best to use componentDidMount for inital data loading for components --

// 4. componentDidUpdade -> *Load more data when state/props change, send data requests every time component is updated*

// 5. componentWillUnmount -> *Clean up after a component is removed from DOM*

// there are more lifecycle methods but less used...
