import React from "react";
import landing from '../assets/pictures/ko.png'
import { useTranslation } from "react-i18next";

export default function Landing() {

const {t} = useTranslation()

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
          <p className="text-[4.5vh] font-bold w-[30vw]">{t('HomePage.Landing.HELLO')}</p>
          <p className="text-[24vh] font-sofia text-red-500 drop-shadow-green">{t('HomePage.Landing.PATISSIER')}</p>
          <p className="text-[2vh] w-[26vw]">
            {t('HomePage.Landing.BRING_MAGIC')}
          </p>
        </h1>
      </div>
      <div className="flex justify-end items-center w-[44vw] h-[80vh] pt-[10vh] ">
        <img src={landing} alt="first_dessert" className="bg-transparent size-[40vw]" />
      </div>
    </section>
  );
}