import React from "react";

const IndexLoader = () => {
  // 12 empty array
  const arr = Array.from({ length: 12 });
  return arr.map((_, index) => (
    <div className="" key={index}>
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className=" bg-gray-400 rounded w-full h-[180px]"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default IndexLoader;
