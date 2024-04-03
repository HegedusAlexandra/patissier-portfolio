import React,{useEffect} from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom';

export default function ProductPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const { href } = location.state || {};

  useEffect(() => {
    const scrollToSection = () => {
      const element = document.getElementById(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    scrollToSection();
  }, [href]);

  return (
    <div id='products' className='w-[100%] h-[100vh] bg-red-300'>{t("ProductPage.TITLE")}</div>
  )
}
