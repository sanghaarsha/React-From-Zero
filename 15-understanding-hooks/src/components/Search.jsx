import React, { useState, useEffect } from "react";
import axios from "axios";

const url =
    "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=javascript";

const Search = () => {
    const [term, setTerm] = useState("");

    const onTermChange = (e) => {
        setTerm(e.target.value);
    };

    console.log("I run with every render");

    useEffect(() => {
        console.log("I only run ONCE!!");
    }, []);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="search-term">Enter Search Term</label>
                    <input
                        type="text"
                        className="input"
                        onChange={onTermChange}
                    />
                </div>

                <h1>{term}</h1>
            </div>
        </div>
    );
};

export default Search;

// ? The useEffect Hook :

// *Functional components do not have naturally access to life-cycle methods like : componentDidMount...
// *useEffect allows functional components to access something similar to life cycle methods [note: not same but similar]
// *useEffect takes some configuration that tells when a code is needed to be run automatically

// ?three ways of configuration :
// * 1. only for the first time rendering of component
// * 2. first time rendering and whenever it re-renders
// * 3. first time rendering and (whenever it re-renders and when some piece of data is changed)

// ? syntax
// useEffect(() => {
//     console.log("hey hey it's executed!");
// }, []);
// * first argument is a function that executes when it matches criteria provided by second criteria
//* second criteria can be nothing, empty array or array with some parameters

// ? meaning of second arguments
//    []   : Run at inital render
// nothing : Run at initial render -> run after every re-render
// [data]  : Run at inital render -> Run after every re-render 'if'
//           data has changed since last render
