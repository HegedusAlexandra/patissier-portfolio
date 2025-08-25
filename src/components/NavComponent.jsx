import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";

export default function NavComponent() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToScreen = (screen, href) => {
    navigate(`/${screen}`, { state: { href } });
  };

  return (
    <ul className="flex-1 flex flex-row items-center md:justify-end justify-between md:gap-[10%] text-black/80 tracking-wide">
      {window.innerWidth > 780 && (
        <>
          <li onClick={() => goToScreen("/", "about_me")} className="nav_link ">
            {t("Header.ABOUT_ME")}
          </li>
          <li onClick={() => goToScreen("/", "skills")} className="nav_link ">
            {t("Header.SKILLS")}
          </li>
        </>
      )}
      {window.innerWidth <  780 && (
          <li onClick={() => goToScreen("/", "landing")} className="nav_link ">
            {t("Header.MAIN")}
          </li> 
      )}
      <li
        onClick={() => goToScreen("/products", "products")}
        className="nav_link "
      >
        {t("Header.CAKES")}
      </li>
      <li
        onClick={() => goToScreen("/", "contact")}
        className="nav_link flex justify-center items-center px-[1%] bg-white/90 text-red-600 rounded-full"
      >
        {t("Header.CONTACT")}
      </li>
      <DropDown type={"Language"} />
    </ul>
  );
}
