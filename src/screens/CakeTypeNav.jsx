import React from "react";
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

  const goToScreen = (screen, href) => {
    navigate(`/${screen}`, { state: { href } });
  };

  return (
    <section className="w-[100%] bg-white px-[5vw]">
      <ul className="flex flex-row items-center justify-center w-[100%] h-[100%] gap-[0.5%]">
        <li
          onClick={() => goToScreen("products", "plated")}
          className="flex-1 h-[70%] bg-white rounded-sm overflow-hidden shadow-type"
        >
          <LazyImage
            class_img={"w-[100%] object-contain"}
            alt_img={"plated"}
            lazy_img={lazy_plated}
            ready_img={ready_plated}
          />
        </li>
        <li
          onClick={() => goToScreen("products", "cake")}
          className="flex-1 h-[70%] bg-white rounded-sm object-cover overflow-hidden shadow-type"
        >
           <LazyImage
            class_img={"w-[100%] object-contain"}
            alt_img={"cake"}
            lazy_img={lazy_cake}
            ready_img={ready_cake}
          />
        </li>
        <li
          onClick={() => goToScreen("products", "other")}
          className="flex-1 h-[70%] bg-white rounded-sm overflow-hidden shadow-type"
        >
          <LazyImage
            class_img={"w-[100%] object-contain"}
            alt_img={"bonbon"}
            lazy_img={lazy_bonbon}
            ready_img={ready_bonbon}
          />
        </li>
      </ul>
    </section>
  );
}
