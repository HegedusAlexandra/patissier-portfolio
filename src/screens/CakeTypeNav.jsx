import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import lazy_plated from "../assets/pictures/pl (2l).jpg";
import ready_plated from "../assets/pictures/pl (2).jpg";
import lazy_cake from "../assets/pictures/ca (11l).jpg";
import ready_cake from "../assets/pictures/ca (11).jpg";
import lazy_bonbon from "../assets/pictures/ot (4l).jpg";
import ready_bonbon from "../assets/pictures/ot (4).jpg";
import LazyImage from "../components/LazyImage";

export default function CakeTypeNav() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isHovered, setHovered] = useState(null);

  const items = [
    {
      id: "cake",
      hoverId: 1,
      icon: "cake",
      title: t("HomePage.CakeTypeNav.CAKES"),
      lazy: lazy_cake,
      ready: ready_cake,
      layout: "flex-col items-center justify-center text-[3vh]",
    },
    {
      id: "plated",
      hoverId: 2,
      icon: "icecream",
      title: t("HomePage.CakeTypeNav.PLATED"),
      lazy: lazy_plated,
      ready: ready_plated,
      layout: "flex-col items-center justify-center text-[3vh]",
    },
    {
      id: "other",
      hoverId: 3,
      icon: "cookie",
      title: t("HomePage.CakeTypeNav.BONBON"),
      lazy: lazy_bonbon,
      ready: ready_bonbon,
      layout: "flex-col items-center justify-center text-[3vh]",
    }
  ];

  const goToScreen = (screen, exact) => {
    navigate(`/${screen}`, { state: { exact } });
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#FFF7ED] p-[5vw]">
      <ul className="flex flex-row items-center justify-center w-full h-full gap-[0.5%]">
        {items.map(
          ({
            id,
            hoverId,
            icon,
            title,
            lazy,
            ready,
            layout,
          }) => (
            <li
              key={id}
              onMouseEnter={() => setHovered(hoverId)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => goToScreen("products", id)}
              className="flex-1 h-[70%] rounded-full md:rounded-sm overflow-hidden hover:shadow-type"
            >
              {isHovered === hoverId && (
                <div
                  className={`absolute w-[30vw] flex ${layout} text-[3vh] gap-[1vw] h-[62%]`}
                >
                  <span className={`material-symbols-outlined text-[8vh]`}>
                    {icon}
                  </span>
                  <h2 className={`text-[6vh] capitalize`}>{title}</h2>
                  <span className="material-symbols-outlined text-[8vh]">
                    chevron_right
                  </span>
                </div>
              )}
              <LazyImage
                loading="eager"
                class_img="w-full object-contain hover:opacity-45 rounded-full md:rounded-none"
                alt_img={id}
                lazy_img={lazy}
                ready_img={ready}
              />
            </li>
          )
        )}
      </ul>
    </section>
  );
}
