import React from "react";
import Navbar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Services from "./sections/services/Services";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
import FAQS from "./sections/faqs/FAQS";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Theme from "./themes/Theme";
import { useThemeContext } from "./context/theme-context";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import { useRef, useState, useEffect } from "react";

const App = () => {
  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPosition, setSiteYPosition] = useState(0);

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // check if floating nav shold be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if (
      siteYPosition < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPosition > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  }, [siteYPosition]);

  const { themeState } = useThemeContext();

  return (
    <main
      className={`${themeState.primary} ${themeState.background}`}
      ref={mainRef}
    >
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQS />
      <Contact />
      <Footer />
      <Theme />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
