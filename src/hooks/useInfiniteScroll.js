// hooks/useInfiniteScroll.js
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const useInfiniteScroll = (initialItems, allItems, itemsPerLoad) => {
    const [displayedItems, setDisplayedItems] = useState(initialItems);

    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    useEffect(() => {
        if (inView) {
            const nextItems = allItems.slice(displayedItems.length, displayedItems.length + itemsPerLoad);
            setDisplayedItems((prevItems) => [...prevItems, ...nextItems]);
        }
    }, [inView]);

    return [displayedItems, ref];
};
