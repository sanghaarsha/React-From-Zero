import React from "react";
import "./Season.css";

const seasonConfig = {
    summer: {
        displayText: "let's hit the beach!",
        iconName: "sun",
    },
    winter: {
        displayText: "brr it's chilly!",
        iconName: "snowflake",
    },
};

const findSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? "summer" : "winter";
    } else {
        return lat > 0 ? "winter" : "summer";
    }
};

const Season = (props) => {
    const currentSeason = findSeason(props.lat, new Date().getMonth());
    const { displayText, iconName } = seasonConfig[currentSeason]; //{displayText,iconName}
    return (
        <div className={`season ${currentSeason}`}>
            <i className={`icon ${iconName} massive icon-left`} />
            <h1>{displayText}</h1>
            <i className={`icon ${iconName} massive icon-right`} />
        </div>
    );
};

export default Season;
