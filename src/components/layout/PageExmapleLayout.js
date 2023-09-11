import React from "react";
import TopNavigation from "../pageExampleLayout/TopNavigation";
import SideNavigation from "../pageExampleLayout/SideNavigation";

const PageExmapleLayout = ({ children }) => {
    return (
        <div>
            <TopNavigation />
            <div className="px-4  ">
                <div className="container mx-auto ">
                    <div className="flex ">
                        {/* LEFT NAV */}
                        <SideNavigation />
                        {/* RIGHT CONTENT */}
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageExmapleLayout;
