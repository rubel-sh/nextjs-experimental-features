import React from "react";

const MockSearchErrorMessage = ({ message }) => {
  return (
    <div className="w-full mx-auto bg-white p-2 md:p-8  mt-8 hover-shadow">
      <h2 className="text-2xl font-bold mb-4 text-red-400">Error</h2>
      <p className="text-slate-400 font-semibold mb-4">{message}</p>
    </div>
  );
};

export default MockSearchErrorMessage;
