import React, { createContext, useContext } from "react";

const BaseUrlContext = createContext();

export const BaseUrlProvider = ({ children }) => {
  // Define your base URL here
  const baseUrl = `https://chamber.lokeshdev.co/`;

  return (
    <BaseUrlContext.Provider value={{baseUrl}}>
      {children}
    </BaseUrlContext.Provider>
  );
};

export const useBaseUrl = () => {
  return useContext(BaseUrlContext);
};
