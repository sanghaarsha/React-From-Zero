import React from "react";

export default function Link({ href, className, children }) {
    const handleClick = (e) => {
        // if ctrl + click , allow browser default
        // i.e. open link in new tab
        if (e.metaKey || e.ctrlKey) {
            return;
        }
        // else :
        // prevent full page reload
        // so that browsers does not load assets again
        e.preventDefault();

        // change url without full-page refresh
        window.history.pushState({}, "", href);

        // emit navigation event when url updates
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
        // these events are communicated to route component
    };
    return (
        <a href={href} className={className} onClick={handleClick}>
            {children}
        </a>
    );
}
