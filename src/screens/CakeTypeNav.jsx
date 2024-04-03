import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import plated from '../assets/pictures/plated.jpg'
import cake from '../assets/pictures/cake.jpg'
import bonbon from '../assets/pictures/bonbon.jpg'

export default function CakeTypeNav() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToScreen = (screen, href) => {
    navigate(`/${screen}`, { state: { href } });
  };

  return (
    <section className="w-[100%] h-[50vh] bg-red-300 px-[5vw]">
      <ul className="flex flex-row items-center justify-center w-[100%] h-[100%] gap-[0.5%]">
        <li
          onClick={() => goToScreen("products", "plated")}
          className="flex-1 h-[70%] bg-white rounded-sm overflow-hidden shadow-type"
        >
          <img src={plated} alt='plated' className="w-[100%] object-cover"/>
        </li>
        <li
          onClick={() => goToScreen("products", "cake")}
          className="flex-1 h-[70%] bg-white rounded-sm object-cover overflow-hidden shadow-type"
        >
          <img src={cake} alt='cake' className="w-[100%] object-cover"/>
        </li>
        <li
          onClick={() => goToScreen("products", "other")}
          className="flex-1 h-[70%] bg-white rounded-sm overflow-hidden shadow-type"
        >
          <img src={bonbon} alt='bonbon' className="w-[100%] object-cover"/>
        </li>
      </ul>
    </section>
  );
}
