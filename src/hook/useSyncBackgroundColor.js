import { useSyncExternalStore } from "react";

const useSyncBackgroundColor = () => {
    const backgroundColor = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    return backgroundColor;
};

const getSnapshot = () => {
    return localStorage.getItem("backgroundColor");
};

const getServerSnapshot = () => {
    return "transparent"; // Returns this from server for initial render
};

// This function will be called whenever the value in localStorage changes
// Note: This function will be called in all tabs except the one that made the change (IMPORTANT)
const subscribe = (onChange) => {
    window.addEventListener("storage", onChange);
    return () => {
        window.removeEventListener("storage", onChange);
    };
};

export default useSyncBackgroundColor;
