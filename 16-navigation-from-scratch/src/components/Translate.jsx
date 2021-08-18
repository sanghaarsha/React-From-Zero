import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
    {
        label: "Nepali",
        value: "ne",
    },
    {
        label: "Afrikaans",
        value: "af",
    },
    {
        label: "Arabic",
        value: "ar",
    },
    {
        label: "Hindi",
        value: "hi",
    },
];

const Translate = (props) => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState("");

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Text :</label>
                    <input
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>
            <Dropdown
                options={options}
                selected={language}
                onSelectionChange={setLanguage}
                dropdownLabel={"Translate To :"}
            />
            <hr />
            <div className="ui header">
                <Convert text={text} language={language} />
            </div>
        </div>
    );
};

export default Translate;
