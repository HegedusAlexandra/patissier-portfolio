import React from "react";
import DropDown from "../components/DropDown";

export default function ContactForm() {
  return (
    <div
      id="contact"
      className="flex flex-row justify-center w-[100%] h-[68vh] p-[5vw] pt-[10vw] bg-orange-50 font-poppins"
    >
      <div className="flex flex-col justify-between  w-[80%] border-x-2 border-solid border-cyan-500 px-[2vw]">
        <h3 className="text-[2vh] mb-[2vh]">
          Let's speak!Also if you just want to speak or have any idea, don't
          hasitate to get in touch
        </h3><h2 className="text-[3vh]">Hegedüs Alexandra</h2>        
        <h2 className="text-[5vh]">hegale.dev@yahoo.com</h2>
        <h2 className="text-[5vh]">hexapastry@gmail.com</h2>
        {/*  <DropDown/>   */}
      </div>
    </div>
  );
}
