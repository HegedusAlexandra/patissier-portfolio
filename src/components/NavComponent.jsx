import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import DropDown from "../components/DropDown";

export default function NavComponent() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const goToScreen = (screen, href) => {
    navigate(`/${screen}`, { state: { href } });
  };

  return (
    <ul className="flex-1 flex flex-row items-center md:justify-end justify-between md:gap-[10%] text-black/80 tracking-wide cursor-pointer">
      {window.innerWidth > 780 && (
        <>
          <li
            onClick={() =>
              goToScreen(process.env.REACT_APP_ROUTING_PREFIX + "", "about_me")
            }
            className="nav_link "
          >
            {t("Header.ABOUT_ME")}
          </li>
          <li
            onClick={() =>
              goToScreen(process.env.REACT_APP_ROUTING_PREFIX + "", "skills")
            }
            className="nav_link "
          >
            {t("Header.SKILLS")}
          </li>
        </>
      )}
      {window.innerWidth < 780 && (
        <li
          onClick={() =>
            goToScreen(process.env.REACT_APP_ROUTING_PREFIX + "", "landing")
          }
          className="nav_link "
        >
          <span class="material-symbols-outlined">home_and_garden</span>
        </li>
      )}
      <li
        onClick={() =>
          goToScreen(
            process.env.REACT_APP_ROUTING_PREFIX + "products",
            "products"
          )
        }
        className="nav_link "
      >
        {window.innerWidth > 780 ? (
          t("Header.CAKES")
        ) : (
          <span class="material-symbols-outlined">cake</span>
        )}
      </li>
      <li
        onClick={() =>
          goToScreen(process.env.REACT_APP_ROUTING_PREFIX + "", "contact")
        }
        className="nav_link flex justify-center items-center px-[1%] rounded-full"
      >
        {window.innerWidth > 780 ? t("Header.CONTACT") : (
          <span class="material-symbols-outlined">phone</span>
        )}
      </li>
      <DropDown type={"Language"} />
    </ul>
  );
}
