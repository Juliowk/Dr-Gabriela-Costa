import { useState, useEffect } from "react";
import HeaderComponentMobile from "./components/Header/mobile";
import HeaderComponentDesktop from "./components/Header/desktop";
import HomeComponentDesktop from "./components/Home/desktop";
import HomeComponentMobile from "./components/Home/mobile";
import ContactComponentMobile from "./components/Contact/mobile";
import ContactComponentDesktop from "./components/Contact/desktop";
import ServicesComponentDesktop from "./components/services/desktop";
import ServicesComponentMobile from "./components/services/mobile";

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
      {isMobileScreenn ? (
        <>
          <HeaderComponentMobile />
          <HomeComponentMobile />
          <ContactComponentMobile />
          <ServicesComponentMobile />
        </>
      ) : (
        <>
          <HeaderComponentDesktop />
          <HomeComponentDesktop />
          <ContactComponentDesktop />
          <ServicesComponentDesktop />
        </>
      )}
    </>
  );
}

export default App;
