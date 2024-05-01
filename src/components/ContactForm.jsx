import React from "react";
import DropDown from "../components/DropDown";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
const {t} = useTranslation()

  return (
    <div
      id="contact"
      className="flex flex-row justify-center w-[100%] md:h-[68vh] h-[30vh] p-[5vw] pt-[10vw] bg-orange-50 font-poppins"
    >
      <div className="flex flex-col justify-between  md:w-[80%] w-[100%] border-x-2 border-solid border-cyan-500 px-[2vw]">
        <h3 className="text-[2vh] mb-[2vh]">
          {t('Footer.LETS')}
        </h3><h2 className="text-[3vh]">Hegedüs Alexandra</h2>        
        <h2 className="md:text-[5vh]">hegale.dev@yahoo.com</h2>
        <h2 className="md:text-[5vh]">hexapastry@gmail.com</h2>
        {/*  <DropDown/>   */}
      </div>
    </div>
  );
}
