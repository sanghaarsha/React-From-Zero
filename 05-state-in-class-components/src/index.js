import React from "react";
import ReactDOM from "react-dom";
import Season from "./Season";

// Rules of state :
// Only useable with class components (...hooks lets us use state in functional components)
// 'State' is a JS Object that contains data relevant to a component
// Updating 'state' on a component causes the component to (almost) instantly re-render
// State must be initialized when a component is created

class App extends React.Component {
    render() {
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
