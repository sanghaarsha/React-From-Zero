import React, { useState, useEffect } from "react";
import axios from "axios";

// API_KEY = AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
// https://translation.googleapis.com/language/translate/v2

const Convert = ({ text, language }) => {
    const [translated, setTranslated] = useState("");
    const [debouncedText, setDebouncedText] = useState(text);

    // debouncing the text
    useEffect(() => {
        // effect
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 1000);
        return () => {
            // cleanup
            clearTimeout(timerId);
        };
    }, [text]);

    // only run when debounced text || language changes
    useEffect(() => {
        const doTranslation = async () => {
            const {
                data: { data },
            } = await axios.post(
                "https://translation.googleapis.com/language/translate/v2",
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: "AIzaSyCHUCmpR7 cT_yDFHC98CZJy2LTms-IwDlM",
                    },
                }
            );
            setTranslated(data.translations[0].translatedText);
        };

        doTranslation();
    }, [debouncedText, language]);

    return (
        <div>
            <div className="ui header">Output : </div>
            <h2>{translated}</h2>
        </div>
    );
};
export default Convert;
