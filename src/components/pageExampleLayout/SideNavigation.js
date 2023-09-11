import Link from "next/link";
import React from "react";

const SideNavigation = () => {
    const demoLinks = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Custom Layout",
            link: "/page-layout",
        },
        {
            name: "Virtuoso-list",
            link: "/virtuoso-list",
        },
        {
            name: "without-virtuoso-list",
            link: "/without-virtuoso-list",
        },
    ];
    return (
        <div className="basis-[350px] min-h-[calc(100vh-120px)] flex flex-col gap-y-2 bg-slate-700 px-2 py-4 font-semibold text-lg text-white">
            {demoLinks.map((link) => (
                <Link
                    key={link.name}
                    href={link.link}
                    className="hover:text-slate-300 transition-colors duration-200 py-2 px-3 bg-slate-600 hover:bg-slate-700 rounded-md"
                >
                    {link.name}
                </Link>
            ))}
        </div>
    );
};

export default SideNavigation;
