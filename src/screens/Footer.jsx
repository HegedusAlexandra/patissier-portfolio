import React, { memo } from "react";
import DropDown from "../components/DropDown";
import ContactForm from "../components/ContactForm";
import { useLocation } from "react-router-dom";

function Footer() {
  const location = useLocation();

  return (
    <footer>
      {location.pathname === "/" ? (
       <></>
      ) : (
        <div
          className={`w-[100%] h-[30vh] ${
            location.pathname === "/" ? "bg-orange-50" : "bg-red-400"
          }`}
        >
          <h2 className="font-pacifico text-red-600 drop-shadow-smaller text-[20vh] text-center translate-y-[10vh]">
            Contact
          </h2>
        </div>
      )}
      <ContactForm />
      <div className="flex flex-col justify-center items-center bg-orange-50 w-[100%] px-[4%] h-[32vh] ">
        <h2 className="md:text-[20vh] text-[4vh] font-pacifico text-sky-700 drop-shadow-smaller">
          Alexandra's Portfolio
        </h2>
        <p className="pb-[1vh]">&copy; Copyright 2024 Hegedüs Alexandra</p>
      </div>
    </footer>
  );
}

export default memo(Footer);
