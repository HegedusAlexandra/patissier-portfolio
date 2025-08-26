import { memo } from "react";
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
            location.pathname === "/products" ? "bg-orange-50" : "bg-red-400"
          }`}
        >
          <h2 className="font-pacifico text-red-600 drop-shadow-smaller md:text-[22vh] text-[8vh] font-semibold md:font-regular text-center translate-y-[10vh]">
            Contact
          </h2>
        </div>
      )}
      <ContactForm />
      <div className="flex flex-col justify-center items-center bg-orange-50 w-[100%] px-[4%] h-[32vh] ">
        <h2 className="md:text-[16vh] text-[4vh] font-pacifico text-orange-600 drop-shadow-smaller">
          Alexandra's Portfolio
        </h2>
        <p className="pb-[1vh]">&copy; Copyright 2025 Hegedüs Alexandra</p>
      </div>
    </footer>
  );
}

export default memo(Footer);
