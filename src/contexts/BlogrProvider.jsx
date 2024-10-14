/* eslint-disable react/prop-types */
import useScreenSize from "../hooks/useScreenSize";
import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const BlogrContext = createContext();

function BlogrProvider({ children }) {
  const [isMobile, setIsMobile] = useState(null);
  const screenSize = useScreenSize();

  useEffect(
    function () {
      setIsMobile(screenSize.width <= 1000);
    },
    [screenSize.width]
  );

  return (
    <BlogrContext.Provider
      value={{
        isMobile,
      }}
    >
      {children}
    </BlogrContext.Provider>
  );
}

function useBlogr() {
  const context = useContext(BlogrContext);
  if (context === undefined)
    throw new Error("bankContext was used outside the EasyBankProvider");
  return context;
}

export { BlogrProvider, useBlogr };
