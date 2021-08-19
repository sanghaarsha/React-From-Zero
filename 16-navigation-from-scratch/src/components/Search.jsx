import React, { useState, useEffect } from "react";
import axios from "axios";
const Search = () => {
    const [term, setTerm] = useState("hello world");
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    const onTermChange = (e) => {
        setTerm(e.target.value);
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        return () => {
            clearTimeout(timerId);
        };
    }, [term]);

    // when debounceTerm changes :
    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get(
                "https://en.wikipedia.org/w/api.php",
                {
                    params: {
                        action: "query",
                        list: "search",
                        format: "json",
                        origin: "*",
                        srsearch: debouncedTerm,
                    },
                }
            );
            setResults(data.query.search);
        };

        search();

        return () => {};
    }, [debouncedTerm]);

    const renderedResults = results.map((item) => {
        return (
            <div className="item" key={item.pageid}>
                <div className="right floated content">
                    <a
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${item.pageid}`}
                        rel="noreferrer"
                        target="_blank"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{item.title}</div>
                    {/* ! DANGER : CAN INTRODUCE XSS */}
                    <span
                        dangerouslySetInnerHTML={{ __html: item.snippet }}
                    ></span>
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
