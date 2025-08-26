import React from "react";
import DropDown from "../components/DropDown";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();

  return (
    <div
      id="contact"
      className="flex flex-row justify-center w-[100%]  py-[5vw] pt-[10vw] bg-orange-50 font-poppins"
    >
      <div className="flex flex-col justify-between  md:w-[88%] w-[100%] border-x-2 border-solid border-red-500 px-[2vw]">
        <h3 className="text-[2vh] mb-[2vh]">{t("Footer.LETS")}</h3>
        <h2 className="text-[3vh] flex items-center gap-4">
          <span class="material-symbols-outlined text-[3vh] text-stone-600">person</span>
          Hegedüs Alexandra
        </h2>
        <h2 className="md:text-[3vh] flex items-center gap-4">
          <span class="material-symbols-outlined text-[3vh] text-stone-600">mail</span>
          hegale.dev@yahoo.com
        </h2>
        <h2 className="md:text-[3vh] flex items-center gap-4">
          <span className="material-symbols-outlined text-[3vh] text-stone-600">mail</span>
          hexapastry@gmail.com
        </h2>
        <h2 className="md:text-[3vh] flex items-center gap-4">
          <span className="material-symbols-outlined text-[3vh] text-stone-600">phone</span>
          +39/379/3227524
        </h2>
        {/*  <DropDown/>   */}
      </div>
    </div>
  );
}
