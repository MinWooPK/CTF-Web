import { useState, useEffect } from "react";

// constants
import { MAX_WITH_MOBILE } from "@utils/constants";

const useDevice = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < MAX_WITH_MOBILE);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < MAX_WITH_MOBILE);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export default useDevice;
