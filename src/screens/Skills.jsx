import React, { useCallback } from "react";
import kalacs from "../assets/pictures/kalacs.jpg";
import pavlova from "../assets/pictures/pavlova másolata.jpg";
import Scale from "../components/Scale";
import { useTranslation } from "react-i18next";

export default function Skills() {
  const { t } = useTranslation();

  const scaleRow = useCallback(
    (str_lang, str_lev, scaleWidth) => (
      <span className="flex md:flex-row flex-col w-[100%] gap-[2vh]">
        <div className="md:w-[40%] flex flex-row">
          <p className="w-[50%] text-[2vh] md:text-[2.5vh]">{str_lang}</p>
          <p className="w-[50%] text-[2vh] md:text-[2.5vh]">{str_lev}</p>
        </div>
        <Scale scaleWidth={scaleWidth} />
      </span>
    ),
    []
  );

  const counterItem = useCallback(
    (num, name) => (
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center size-[20vw] bg-white rounded-full shadow-[6px_24px_16px_4px_rgba(50,0,0,0.5)]">
          <div className="absolute w-[24vw] h-[16vh] bg-red-300 -rotate-[24deg] -translate-y-[14vh] -translate-x-[3vw]"></div>
          <h2 className="font-pacifico font-bold text-red-700 text-[26vh] drop-shadow-smaller -translate-y-[8vh]">
            {num}
          </h2>
          <p className="text-[2vh] w-[50%] text-center -translate-y-[10vh]">
            {name}
          </p>
        </div>
      </div>
    ),
    []
  );

  return (
    <section id="skills" className="w-[100%]  font-poppins">
      <div className="flex flex-row w-[100%] bg-transparent px-[5vw] pt-[16vh] pb-[20vh] gap-2">
        {counterItem("100+", "receipes")}
        {counterItem("10", "years of experience")}
        {counterItem("8", "countries's desserts")}
      </div>
      <div className="flex flex-col justify-center items center bg-transparent px-[5vw] py-[10vh] gap-[10vh] bg-white">
        <div className="flex flex-row w-[100%] h-[50vh]">
          <div className="flex flex-col justify-center w-[50%] pr-[20vw]">
            <h2 className="font-pacifico drop-shadow-smaller text-sky-700 text-[8vh] mb-[4vh]">
              technical skills
            </h2>
            <p>
              making websites and this a short introduction so you can develop
              sympahy with memaking websites and this a short introduction so
              you can develop sympahy with memaking websites and this a short{" "}
            </p>
          </div>
          <div className="w-[50%]">
            <img
              className="w-[100%] h-[50vh] object-cover object-center rounded-sm"
              src={pavlova}
              alt="pavlova"
            />
          </div>
        </div>
        <div className="flex flex-row w-[100%] h-[50vh]">
          <div className="w-[50%]">
            <img
              className="w-[100%] h-[50vh] bg-ornge-500 object-cover rounded-sm"
              src={kalacs}
              alt="kalacs"
            />
          </div>
          <div className="flex flex-col justify-center items-end w-[50%] pl-[20vw]">
            <h2 className="font-pacifico drop-shadow-smaller text-sky-700 text-[8vh] mb-[4vh]">
              soft skills<span className="text-sky-300">.</span>
            </h2>
            <p className="text-right">
              making websites and this a short introduction so you can develop
              sympahy with memaking websites and this a short introduction so
              you can develop sympahy with memaking websites and this a short
            </p>
          </div>
        </div>
        <div className="flex flex-row w-[100%] h-[50vh]">
          <div className="flex flex-col  justify-center w-[35%] pr-[5%] -translate-y-[2vh]">
            <h2 className="font-pacifico drop-shadow-smaller text-sky-700 text-[8vh] mb-[4vh]">
              languages
            </h2>
            <p>
              making websites and this a short introduction so you can develop
              sympahy with memaking websites and this a short introduction so
              you can develop sympahy with memaking websites and this a short
            </p>
          </div>
          <span className="flex flex-col justify-center w-[65%] pl-[5%] h-[100%] gap-[2vh]">
            {scaleRow(
              t("HomePage.Skills.HUN"),
              t("HomePage.Skills.HUN_LEV"),
              100
            )}
            {scaleRow(
              t("HomePage.Skills.ENG"),
              t("HomePage.Skills.ENG_LEV"),
              90
            )}
            {scaleRow(
              t("HomePage.Skills.ITA"),
              t("HomePage.Skills.ITA_LEV"),
              22
            )}
            {scaleRow(
              t("HomePage.Skills.GER"),
              t("HomePage.Skills.ITA_LEV"),
              10
            )}
          </span>
        </div>
      </div>
    </section>
  );
}
