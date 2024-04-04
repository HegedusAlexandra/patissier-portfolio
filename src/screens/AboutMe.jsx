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
      className="flex flex-row justify-center items-center w-[100%] bg-white px-[5vw] font-poppins"
    >
      <div className="w-[40%]">{View}</div>
      <div className="flex flex-col items-start justify-center w-[60%]">
        <h2 className="font-pacifico drop-shadow-smaller text-orange-500 text-[10vh] mb-[4vh]">
          {t("HomePage.AboutMe.TITLE")}
        </h2>
        <p className="text-[1.8vh]">{t("HomePage.AboutMe.INTRODUCTION")}</p>
      </div>
    </section>
  );
}
