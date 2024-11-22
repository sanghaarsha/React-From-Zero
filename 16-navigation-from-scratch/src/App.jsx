import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

    return (
        <div className="ui container">
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>

            <Route path="/search">
                <Search />
            </Route>

            <Route path="/translate">
                <Translate />
            </Route>

            <Route path="/dropdown">
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
            </Route>
        </div>
    );
};

export default App;
