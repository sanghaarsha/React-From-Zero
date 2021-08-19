import { useState, useEffect } from "react";

export default function Route({ path, children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        // Listening to the event emitted from Link component
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener("popstate", onLocationChange);

        return () => {
            window.removeEventListener("popstate", onLocationChange);
        };
    }, []);

    return currentPath === path ? children : null;
}
