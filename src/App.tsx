import { useState, useEffect } from "react";
import HeaderComponentMobile from "./components/Header/mobile";
import HeaderComponentDesktop from "./components/Header/desktop";

function App() {
  const [isMobileScreenn, setIsMobileScreenn] = useState(
    window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileScreenn(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isMobileScreenn ? <HeaderComponentMobile /> : <HeaderComponentDesktop />}
    </>
  );
}

export default App;
