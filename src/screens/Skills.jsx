import React, { useCallback } from "react";
import lazy_kalacs from "../assets/pictures/ot (2l).jpg";
import ready_kalacs from "../assets/pictures/ot (2).jpg";
import Scale from "../components/Scale";
import { useTranslation } from "react-i18next";
import LazyImage from "../components/LazyImage";
import lazy_pavlova from "../assets/pictures/ca (13l).jpg";
import ready_pavlova from "../assets/pictures/ca (13).jpg";
import Counter from "../components/Counter";

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
        <div className="flex flex-col justify-center items-center md:size-[20vw] size-[60vw] bg-white my-[6vh] rounded-full shadow-[6px_24px_16px_4px_rgba(50,0,0,0.5)]">
          <div className="absolute w-[24vw] md:h-[16vh] h-[80vw] bg-red-300 md:-rotate-[24deg] rotate-[90deg] -translate-y-[14vh] -translate-x-[3vw]"></div>
          <Counter
            num={num}
            counter_class={
              "font-pacifico font-bold text-red-700 md:text-[26vh] text-[16vh] drop-shadow-smaller"
            }
          />
          <p className="text-[3vh] w-[100%] text-center -translate-y-[10vh]">
            {t(`${name}`)}
          </p>
        </div>
      </div>
    ),
    []
  );

  return (
    <section id="skills" className="w-[100%] font-poppins">
      <div className="flex md:flex-row flex-col-reverse w-[100%] bg-transparent px-[5vw] pt-[6vh] pb-[10vh] gap-2">
        {counterItem("100", "HomePage.Skills.COUNTER.RECEIPES")}
        {counterItem("10", "HomePage.Skills.COUNTER.EXPERIENCE")}
        {counterItem("8", "HomePage.Skills.COUNTER.COUNTRIES")}
      </div>
      <div className="flex flex-col justify-center items center bg-transparent px-[5vw] py-[10vh] gap-[10vh] bg-white">
        <div className="flex md:flex-row flex-col w-[100%] md:h-[50vh]">
          <div className="flex flex-col justify-center md:w-[54%] w-[100%] md:pr-[10vw] md:pb-0 pb-[2vh]">
            <h2 className="font-pacifico drop-shadow-smaller text-sky-700 mb:text-[8vh] text-[6vh] mb-[4vh]">
            {t('HomePage.Skills.TECHNICAL_SKILLS')} <span className="text-sky-300">.</span>
            </h2>
            <p className="mb-[1vh]">
            {t('HomePage.Skills.TECHNICAL.0')}
            </p>
            <p className="mb-[1vh]">
            {t('HomePage.Skills.TECHNICAL.1')}
            </p>
            <p className="mb-[1vh]">
            {t('HomePage.Skills.TECHNICAL.2')}
            </p>
            <p className="mb-[1vh]">
            {t('HomePage.Skills.TECHNICAL.3')}
            </p>
          </div>
          <div className="md:w-[50%] w-[100%]">
            <LazyImage
              class_img={
                "w-[100%] md:h-[50vh] h-[30vh] object-cover object-top rounded-sm"
              }
              alt_img={"pavlova"}
              lazy_img={lazy_pavlova}
              ready_img={ready_pavlova}
            />
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse w-[100%] md:h-[50vh]">
          <div className="md:w-[50%] w-[100%]">
            <LazyImage
              class_img={
                "w-[100%] md:h-[50vh] h-[30vh] object-cover md:object-top object-center rounded-sm"
              }
              alt_img={"kalacs"}
              lazy_img={lazy_kalacs}
              ready_img={ready_kalacs}
            />
          </div>
          <div className="flex flex-col justify-center md:items-end md:w-[50%] w-[100%] md:pl-[10vw] md:pb-0 pb-[2vh]">
            <h2 className="font-pacifico drop-shadow-smaller text-sky-700 mb:text-[8vh] text-[6vh] mb-[4vh]">
            {t('HomePage.Skills.SOFT_SKILLS')} <span className="text-sky-300">.</span>
            </h2>
            <p className="mb-[1vh] md:text-right">
            {t('HomePage.Skills.SOFT.0')}
            </p>
            <p className="mb-[1vh] md:text-right">
            {t('HomePage.Skills.SOFT.1')}
            </p>
            <p className="mb-[1vh] md:text-right">
            {t('HomePage.Skills.SOFT.2')}
            </p>
            <p className="mb-[1vh] md:text-right">
            {t('HomePage.Skills.SOFT.3')}
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col w-[100%] md:h-[50vh]">
          <div className="flex flex-col justify-center md:w-[35%] w-[100%] md:pr-[5%] -translate-y-[2vh]">
            <h2 className="font-pacifico drop-shadow-smaller text-sky-700 mb:text-[8vh] text-[6vh] mb-[4vh]">
            {t('HomePage.Skills.LANGUAGES_SKILLS')} <span className="text-sky-300">.</span>
            </h2>
            <p className="mb-[1vh]">
            {t('HomePage.Skills.LANGUAGE')}
            </p>
          </div>
          <span className="flex flex-col justify-center md:w-[65%] w-[100%] md:pl-[5%] h-[100%] gap-[2vh]">
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
