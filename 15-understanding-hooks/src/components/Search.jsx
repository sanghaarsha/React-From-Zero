import React, { useState, useEffect } from "react";

const url =
    "https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=";

const Search = () => {
    const [term, setTerm] = useState("");

    const onTermChange = (e) => {
        setTerm(e.target.value);
    };

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
