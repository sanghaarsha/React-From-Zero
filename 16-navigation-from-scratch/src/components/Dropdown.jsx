import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectionChange, dropdownLabel }) => {
    const [isActive, setIsActive] = useState(false);

    const ref = useRef();
    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            setIsActive(false);
        };

        document.body.addEventListener("click", onBodyClick);

        return () => {
            document.body.removeEventListener("click", onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((item, index) => {
        if (item.value === selected.value) {
            return null;
        }

        return (
            <div
                key={index}
                className="item"
                onClick={() => {
                    onSelectionChange(item);
                }}
            >
                {item.label}
            </div>
        );
    });

    return (
        <div className="ui form" ref={ref}>
            <div className="field">
                <label className="label">{dropdownLabel}</label>
                <div
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                    className={`ui selection dropdown ${
                        isActive ? "visible active" : ""
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div
                        className={`menu ${
                            isActive ? "visible transition" : ""
                        }`}
                    >
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
