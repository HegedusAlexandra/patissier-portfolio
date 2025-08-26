import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import PlatedScreen from "../screens/PlatedScreen";
import CakeScreen from "../screens/CakeScreen";
import OtherScreen from "../screens/OtherScreen";

export default function ProductPage() {
  const location = useLocation();
  const { exact } = location.state || {};

  console.log(exact);
  

 useEffect(() => {
  if (!exact) return;

  const timer = setTimeout(() => {
    const element = document.getElementById(exact);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, 100); 

  return () => clearTimeout(timer);
}, [exact]);


  return (
    <div id="products" className="w-[100%] bg-red-500">
      <PlatedScreen />
      <CakeScreen />
      <OtherScreen />
    </div>
  );
}
