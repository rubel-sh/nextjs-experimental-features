import { generateUsers } from "@/utils/user";
import React from "react";
import LastInView from "./LastInView";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { personsList } from "@/utils/constants/personLists";

const IntersectionObserverPage = () => {
    const allPersons = personsList; // or whatever function you're using
    const initialDisplay = allPersons.slice(0, 8);

    const [displayedPersons, ref] = useInfiniteScroll(initialDisplay, allPersons, 5);

    return (
        <div className="max-w-[1260px] px-2 mx-auto mt-10 relative">
            <h1 className="text-2xl mb-5">Intersection Observer</h1>
            <LastInView>Last person in view: {displayedPersons[displayedPersons.length - 1]?.name}</LastInView>

            {displayedPersons.map((person, index) => {
                const isLastItem = index === displayedPersons.length - 1;
                return (
                    <div
                        key={index}
                        id={`person-${index}`}
                        className="bg-gray-100 p-5 mb-5"
                        ref={isLastItem ? ref : null}
                    >
                        <h4 className="text-xl mb-2">{person.name}</h4>
                        <p className="text-gray-500">{person.jobTitle}</p>
                        <p className="text-gray-500">{person.description}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default IntersectionObserverPage;
