import React from "react";
import { useTranslation } from "react-i18next";
import { useLottie } from "lottie-react";
import running from "../assets/lottie/running.json";

export default function AboutMe() {
  const { t } = useTranslation();

  const options = {
    animationData: running,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <section
      id="about_me"
      className="flex md:flex-row flex-col justify-center items-center w-[100%] bg-white px-[5vw] pb-[4vh] font-poppins"
    >
      <div className="absolute md:left-[5vw] top-[94vh] md:top-[100vh] md:size-[22vw] size-[44vw] bg-red-500 rounded-full mt-[2vh]"/>
      <div className="md:w-[40%] w-[80%] rounded-full mt-[2vh]">{View}</div>
      <div className="flex flex-col items-start justify-center md:w-[60%] w-[90%]">
        <h2 className="font-pacifico drop-shadow-smaller text-sky-700 md:text-[10vh] text-[6vh] mx-auto mb-[4vh] md:mx-0">
          {t("HomePage.AboutMe.TITLE")}
        </h2>
        <p className="text-[1.8vh]">{t("HomePage.AboutMe.INTRODUCTION")}</p>
      </div>
    </section>
  );
}
