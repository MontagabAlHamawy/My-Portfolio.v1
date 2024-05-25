
"use client";

import { useEffect, useState } from "react";

const ClientLoadingWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 second delay

    return () => clearTimeout(timer); // Clean up the timer if the component unmounts
  }, []);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div> // This can be a loading spinner or any placeholder content
      ) : (
        children
      )}
    </>
  );
};

export default ClientLoadingWrapper;
