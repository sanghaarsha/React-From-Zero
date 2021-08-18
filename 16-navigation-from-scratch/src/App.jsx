import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

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

const options = [
    {
        label: "Red Color",
        value: "red",
    },
    {
        label: "Green Color",
        value: "green",
    },
    {
        label: "Blue Color",
        value: "blue",
    },
];

const App = () => {
    const [selectedColor, setSelectedColor] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className="ui container">
            <hr />
            {/* Accordion Widget */}
            <Accordion items={items} />
            <hr />

            {/* Wikipedia Search Widget */}
            <hr />
            <Search />
            <hr />

            {/* Dropdown Widget */}
            <hr />
            <button
                onClick={() => {
                    setShowDropdown(!showDropdown);
                }}
            >
                Toogle Dropdown!
            </button>

            {showDropdown ? (
                <Dropdown
                    options={options}
                    selected={selectedColor}
                    onSelectionChange={setSelectedColor}
                    dropdownLabel={"Select A Color"}
                />
            ) : null}
            <hr />

            {/* Translate Widget */}
            <hr />
            <Translate />
            <hr />
        </div>
    );
};

export default App;
