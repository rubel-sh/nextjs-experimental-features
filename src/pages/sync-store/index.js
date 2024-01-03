import useSyncBackgroundColor from "@/hook/useSyncBackgroundColor";
import React, { useCallback, useEffect, useState } from "react";

/***
 * THIS PAGE DEMONSTRATES HOW TO SYNC STORE BETWEEN BROWSER WINDOWS
 * E.G. IF YOU OPEN THIS PAGE IN TWO BROWSER WINDOWS AND CHANGE THE FONT SIZE IN ONE WINDOW THEN THE OTHER WINDOW WILL ALSO BE UPDATED
 *
 * THIS IS DONE USING REACT HOOK useSyncExternalStore
 * https://react.dev/reference/react/useSyncExternalStore
 *
 * WE WILL CREATE A CUSTOM HOOK useSyncLocalStorage
 * NOTE: THIS WILL ONLY WORK IN DIFFERENT TABS OF THE SAME BROWSER (NOT IN SAME TAB).
 *
 ***/
const Page = () => {
    const initialColor = useSyncBackgroundColor(); // This is your custom hook for syncing across tabs
    const [bgColor, setBgColor] = useState(initialColor);

    const randomLightColors = [
        "#92C7CF",
        "#A1E8CC",
        "#B7F0D3",
        "#D4F3EF",
        "#F8F9FA",
        "#F9F871",
        "#F9C74F",
        "#F9844A",
        "#F8961E",
    ];

    const handleChangeBackgroundColor = (colorCode) => {
        localStorage.setItem("backgroundColor", colorCode);
        setBgColor(colorCode); // Update local state as well
    };

    // SET INITIAL VALUE FROM LOCAL STORAGE
    useEffect(() => {
        const currentColor = localStorage.getItem("backgroundColor");
        setBgColor(currentColor);
        // setCurrentPositionXY({ clientX, clientY });
    }, []);

    // This useEffect will be called whenever the value in localStorage changes
    useEffect(() => {
        const handleStorageChange = (event) => {
            // This is the key we are listening to for changes
            if (event.key === "backgroundColor") {
                setBgColor(event.newValue);
            }
        };

        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    return (
        <div className="min-h-screen" style={{ backgroundColor: bgColor, mixBlendMode: "color" }}>
            <div className="  pt-5 flex flex-wrap justify-center">
                {randomLightColors.map((colorCode) => (
                    <button
                        key={colorCode}
                        className="bg-gray-900 text-white p-4"
                        onClick={() => handleChangeBackgroundColor(colorCode)}
                    >
                        {colorCode}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Page;
