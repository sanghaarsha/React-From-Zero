import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

const items = [
    {
        title: "What is react?",
        content: "React is a front end JS framework!",
    },
    {
        title: "Why use react?",
        content: "React is a fovorite JS library among engineers",
    },
    {
        title: "How do you use react?",
        content: "React can be used by creating components.",
    },
];

const App = () => {
    return (
        <div>
            {/* <Accordion items={items} /> */}
            {/* <Search /> */}
            <Dropdown />
        </div>
    );
};

export default App;
