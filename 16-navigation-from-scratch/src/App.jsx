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
        content: "React is a favorite JS library among engineers",
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

    const navAccordion = () => {
        if (window.location.pathname === "/") {
            return <Accordion items={items} />;
        }
        return null;
    };

    const navSearch = () => {
        if (window.location.pathname === "/search") {
            return <Search />;
        }
        return null;
    };

    const navDropdown = () => {
        if (window.location.pathname === "/dropdown") {
            return (
                <React.Fragment>
                    <button
                        onClick={() => {
                            setShowDropdown(!showDropdown);
                        }}
                    >
                        Toggle Dropdown!
                    </button>
                    {showDropdown ? (
                        <Dropdown
                            options={options}
                            selected={selectedColor}
                            onSelectionChange={setSelectedColor}
                            dropdownLabel={"Select A Color"}
                        />
                    ) : null}
                </React.Fragment>
            );
        }
        return null;
    };

    const navTranslate = () => {
        if (window.location.pathname === "/translate") {
            return <Search />;
        }
        return null;
    };
    return (
        <div className="ui container">
            {navAccordion()}
            {navSearch()}
            {navDropdown()}
            {navTranslate()}
        </div>
    );
};

export default App;
