import React from "react";
import ReactDOM from "react-dom";
import Season from "./Season";

// Rules for Class Based Components :
// 1. Must be a JS Class
// 2. Must extend React.Component
// 3. Must define a render method that returns some amount of JSX

class App extends React.Component {
    render() {
        // Using browser's geolocation API
        window.navigator.geolocation.getCurrentPosition(
            (pos) => console.log(pos),
            (err) => console.log(err)
        );
        return (
            <div>
                <Season />
                <div>Latitide :</div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
