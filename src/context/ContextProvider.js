import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(16);

  return (
    <Context.Provider value={{ fontSize, setFontSize }}>
      {children}
    </Context.Provider>
  );
};

export const useGlobalContext = () => {
    return useContext(Context);
}

export default ContextProvider;
