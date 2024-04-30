import React, { useEffect } from "react";
import AboutMe from "../screens/AboutMe";
import Skills from "../screens/Skills";
import Landing from "../screens/Landing";
import { useLocation } from "react-router-dom";
import CakeTypeNav from "../screens/CakeTypeNav";

export default function HomePage() {
  const location = useLocation();
  const { href } = location.state || {};

  useEffect(() => {
    const scrollToSection = () => {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToSection();
  }, [href]);

  return (
    <div className="w-[100%] bg-red-300 overflow-x-hidden">
      <Landing />
      <AboutMe />
      <Skills />
      <CakeTypeNav/>
    </div>
  );
}
