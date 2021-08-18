import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectionChange, dropdownLabel }) => {
    const [isActive, setIsActive] = useState(false);

    // useRef : reference to direct DOM element
    const ref = useRef();
    useEffect(() => {
        const onBodyClick = (event) => {
            //  if the element is inside 'ref', do nothing
            if (ref.current && ref.current.contains(event.target)) {
                return;
            }
            // else close dropdown
            setIsActive(false);
        };

        document.body.addEventListener("click", onBodyClick);

        // when dropdown is toggeled off event listener is removed
        return () => {
            document.body.removeEventListener("click", onBodyClick);
        };
    }, []);

    const renderedOptions = options.map((item, index) => {
        // not showing selected value as option
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

// Built-in event system only allows events to be
// registered inside the components direcly created by it
// eg. Dropdown cannot put event hanlder in body
