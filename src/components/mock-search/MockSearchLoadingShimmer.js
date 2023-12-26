import React from "react";

const MockSearchLoadingShimmer = () => {
  return (
    <div className="w-full mx-auto bg-white p-2 md:p-8  mt-8 hover-shadow">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-4 py-1">
          <div className="h-6 bg-gray-400 rounded w-3/4 mb-4 "></div>
          <div className="h-4 bg-gray-400 rounded w-2/4"></div>
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="h-4 bg-gray-400 rounded w-2/4"></div>
          <div className="h-4 bg-gray-400 rounded w-2/4"></div>
          <div className="h-20 w-40 bg-gray-400 rounded mx-auto"></div>
          <div className="h-4 w-14 bg-gray-400 rounded "></div>
          <div className="h-4 w-40 bg-gray-400 rounded "></div>
          <div className="h-4 w-40 bg-gray-400 rounded "></div>
        </div>
      </div>
    </div>
  );
};

export default MockSearchLoadingShimmer;
