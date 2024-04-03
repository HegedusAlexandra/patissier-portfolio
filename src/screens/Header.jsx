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
    <section
      className={`flex justify-center items-center h-[10vh] w-[100%] font-poppins text-[1.8vh] ${
        isScrolled ? "fixed z-10 py-[3%]" : "static bg-red-300"
      }`}
    >
      <div
        className={`flex flex-row justify-between items-center h-[8vh] px-[5%] uppercase text-white ${
          isScrolled ? "w-[90%] rounded-full bg-red-500/70 backdrop-blur-lg" : "w-[100%]"
        }`}
      >
        <h2 className="w-[20%]">{t("Header.AIM")}</h2>
        <NavComponent />
        <DropDown type={"Language"} />
      </div>
    </section>
  );
}

export default memo(Header);
