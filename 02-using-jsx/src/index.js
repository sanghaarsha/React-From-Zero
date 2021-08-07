import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const buttonText = "Click Me!";

    const getText = () => {
        return "This is returned text!";
    };

    // const objectVal = { key: "val" };

    return (
        <div>
            {/* to avoid conflict with javascript */}
            {/* for becomes htmlFor, class becomes className*/}
            <label htmlFor="name" className="label">
                Enter Name:
            </label>

            <input type="text" id="name" />

            {/* inline styling : style:{JS-Object} :*/}
            <button
                style={{
                    backgroundColor: "blue",
                    color: "white",
                    border: "4px solid pink",
                    margin: "5px",
                }}
            >
                {/* Using JS Variable */}
                {buttonText}
            </button>

            {/* getting value from function */}
            <div className="getText">{getText()}</div>

            {/* Values JSX Can't Show */}
            {/* <div className="cantShowObject">{objectVal}</div> */}
            {/* it will give this error : Error: Objects are not valid as a React child */}
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));
