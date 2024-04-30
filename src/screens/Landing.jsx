import React from "react";
import lazy_landing from "../assets/pictures/kol.png";
import ready_landing from "../assets/pictures/ko.png";
import { useTranslation } from "react-i18next";
import LazyImage from "../components/LazyImage";

export default function Landing() {
  const { t } = useTranslation();

  return (
    <section
      id="landing"
      className="flex flex-row w-[100%] bg-transparent px-[5vw] font-poppins text-white pb-[10vh]"
    >
      <div className="flex flex-col justify-between items-start w-[45vw] h-[80vh] pt-[10vh]">
        <div className="flex flex-row justify-start items-center w-[100%] gap-2 text-[1.4vh]">
          <span class="material-symbols-outlined">globe</span>
          <h3>Budapest</h3>
        </div>
        <h1>
          <p className="text-[4vh] font-bold w-[30vw]">
            {t("HomePage.Landing.HELLO")}
          </p>
          <p className="text-[22vh] font-pacifico text-red-600 drop-shadow-smaller">
            {t("HomePage.Landing.PATISSIER")}
          </p>
          <p className="text-[2vh] w-[20vw] text-orange-100">
            {t("HomePage.Landing.BRING_MAGIC")}
          </p>
        </h1>
      </div>
      <div className="flex justify-end items-center w-[44vw] h-[80vh] pt-[10vh] ">
        <LazyImage
          class_img={"bg-transparent size-[40vw]"}
          alt_img={"first_dessert"}
          lazy_img={lazy_landing}
          ready_img={ready_landing}
        />
      </div>
    </section>
  );
}
