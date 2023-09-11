import Link from "next/link";
import React from "react";

const TopNavigation = () => {
    return (
        <header class="bg-gray-800 text-white px-4">
            <nav class="container mx-auto py-4 flex items-center justify-between flex-wrap gap-5 w-full">
                <Link href="/page-layout" class="text-xl font-semibold">
                    Custom Layout
                </Link>
                <Link href="/page-layout" class="ml-4">
                    Profile
                </Link>
            </nav>
        </header>
    );
};

export default TopNavigation;
