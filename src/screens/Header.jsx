import React, { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DropDown from "../components/DropDown";
import NavComponent from "../components/NavComponent";

function Header() {
  const { t } = useTranslation();
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-[6vh] w-[100%] bg-red-300 font-poppins text-[1.8vh] ${
        isScrolled ? "fixed py-[3%]" : "static"
      }`}
    >
      <div
        className={`flex flex-row justify-between items-center h-[6vh] px-[5%] uppercase text-white ${
          isScrolled ? "w-[90%] rounded-full bg-white/20" : "w-[100%]"
        }`}
      >
        <h2>{t("Header.AIM")}</h2>
        <NavComponent />
        <DropDown type={"Language"} />
      </div>
    </div>
  );
}

export default memo(Header);
