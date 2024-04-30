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

  const goToScreen = (screen, href) => {
    navigate(`/${screen}`, { state: { href } });
  };

  console.log(isHovered);

  return (
    <section className="w-[100%] bg-gradient-to-b from-white to-[#FFF7ED] p-[5vw]">
      <ul className="flex flex-row items-center justify-center w-[100%] h-[100%] gap-[0.5%]">
        <li
          onMouseEnter={() => setHovered(2)}
          onMouseOut={() => setHovered(null)}
          onClick={() => goToScreen("products", "cake")}
          className="flex-1 h-[70%] bg-white rounded-full md:rounded-sm object-cover overflow-hidden shadow-type "
        >
          {isHovered === 2 && (
            <div className="absolute w-[30vw] flex flex-row items-center justify-between translate-y-[10vh] text-[3vh] gap-[1vw] px-[2vw]">
              <span className="material-symbols-outlined text-[5vh]">cake</span>
              <h2 className="uppercase text-[4vh]">cakes</h2>
              <span className="material-symbols-outlined text-[8vh]">
                chevron_right
              </span>
            </div>
          )}
          <LazyImage
            class_img={"w-[100%] object-contain hover:opacity-45 rounded-full md:rounded-none"}
            alt_img={"cake"}
            lazy_img={lazy_cake}
            ready_img={ready_cake}
          />
        </li>
        <li
          onMouseEnter={() => setHovered(1)}
          onMouseOut={() => setHovered(null)}
          onClick={() => goToScreen("products", "plated")}
          className="flex-1 h-[70%] bg-white rounded-full md:rounded-sm overflow-hidden shadow-type"
        >
          {isHovered === 1 && (
            <div className="absolute w-[30vw] flex flex-row items-center justify-between translate-y-[10vh] text-[3vh] gap-[1vw] px-[2vw]">
              <span className="material-symbols-outlined text-[5vh]">icecream</span>
              <h2 className="uppercase text-[4vh]">plated desserts</h2>
              <span className="material-symbols-outlined text-[8vh]">
                chevron_right
              </span>
            </div>
          )}
          <LazyImage
            class_img={"w-[100%] object-contain hover:opacity-45 rounded-full md:rounded-none"}
            alt_img={"plated"}
            lazy_img={lazy_plated}
            ready_img={ready_plated}
          />
        </li>

        <li
          onMouseEnter={() => setHovered(3)}
          onMouseOut={() => setHovered(null)}
          onClick={() => goToScreen("products", "other")}
          className="flex-1 h-[70%] bg-white overflow-hidden shadow-type rounded-full md:rounded-sm"
        >
          {isHovered === 3 && (
            <div className="absolute w-[30vw] flex flex-row items-center justify-between translate-y-[10vh] text-[3vh] gap-[1vw] px-[2vw]">
              <span className="material-symbols-outlined text-[5vh]">cookie</span>
              <h2 className="uppercase text-[3.5vh]">bonbons & cookies</h2>
              <span className="material-symbols-outlined text-[8vh]">
                chevron_right
              </span>
            </div>
          )}
          <LazyImage
            class_img={"w-[100%] object-contain hover:opacity-45 rounded-full md:rounded-none"}
            alt_img={"bonbon"}
            lazy_img={lazy_bonbon}
            ready_img={ready_bonbon}
          />
        </li>
      </ul>
    </section>
  );
}
