import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import PlatedScreen from "../screens/PlatedScreen";
import CakeScreen from "../screens/CakeScreen";
import OtherScreen from "../screens/OtherScreen";

export default function ProductPage() {
  const { t } = useTranslation();
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
    <div id="products" className="w-[100%] bg-red-500">
      <PlatedScreen />
      <CakeScreen />
      <OtherScreen />
    </div>
  );
}
