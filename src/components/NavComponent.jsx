import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";

export default function NavComponent() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToScreen = (screen, href) => {
    navigate(`/${screen}`, { state: { href } });
  };

  return (
    <ul className="flex-1 flex flex-row items-center md:justify-end justify-between md:gap-[10%]">
      {window.innerWidth > 780 && (
        <>
          <li onClick={() => goToScreen("patissier-portfolio", "about_me")} className="nav_link ">
            {t("Header.ABOUT_ME")}
          </li>
          <li onClick={() => goToScreen("patissier-portfolio", "skills")} className="nav_link ">
            {t("Header.SKILLS")}
          </li>
        </>
      )}
      {window.innerWidth <  780 && (
          <li onClick={() => goToScreen("patissier-portfolio", "landing")} className="nav_link ">
            {t("Header.MAIN")}
          </li> 
      )}
      <li
        onClick={() => goToScreen("patissier-portfolio/products", "products")}
        className="nav_link "
      >
        {t("Header.CAKES")}
      </li>
      <li
        onClick={() => goToScreen("patissier-portfolio", "contact")}
        className="nav_link flex justify-center items-center p-[1%] bg-white text-red-300 font-bold rounded-full"
      >
        {t("Header.CONTACT")}
      </li>
      <DropDown type={"Language"} />
    </ul>
  );
}
