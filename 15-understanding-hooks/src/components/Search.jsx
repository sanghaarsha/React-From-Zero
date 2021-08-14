import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
    const [term, setTerm] = useState("hello world");
    const [results, setResults] = useState([]);

    const onTermChange = (e) => {
        setTerm(e.target.value);
    };

    // runs only when term is changed
    useEffect(() => {
        // immediately declaring and invoking function
        (async () => {
            const { data } = await axios.get(
                "https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        format: "json",
                        origin: "*",
                        srsearch: term,
                    },
                }
            );
            setResults(data.query.search);
        })();
    }, [term]);

    const renderedResults = results.map((item) => {
        return (
            <div className="item" key={item.pageid}>
                <div className="content">
                    <div className="header">{item.title}</div>
                    {item.snippet}
                </div>
            </div>
        );
    });

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
            </div>
            <div className="ui celled list">{renderedResults}</div>
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
