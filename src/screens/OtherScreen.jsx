import React, { useState, useEffect } from "react";
import LazyImage from "../components/LazyImage";
import { useTranslation } from "react-i18next";

// Import all lazy and ready images dynamically
const importImages = async () => {
  const lazyImages = [];
  const readyImages = [];
  const numOfOther = 12;
  for (let i = 1; i <= numOfOther; i++) {
    lazyImages.push(import(`../assets/pictures/ot (${i}l).jpg`));
    readyImages.push(import(`../assets/pictures/ot (${i}).jpg`));
  }
  return Promise.all([Promise.all(lazyImages), Promise.all(readyImages)]);
};

export default function CakeScreen() {
  const [images, setImages] = useState({ lazyImages: [], readyImages: [] });
  const {t} = useTranslation()

  useEffect(() => {
    const fetchImages = async () => {
      const [lazyImages, readyImages] = await importImages();
      setImages({ lazyImages, readyImages });
    };

    fetchImages();
  }, []);

  return (
    <section id="other" className="w-[100%] bg-amber-50">
      <div className="w-[100%] h-[30vh] bg-red-400">
      <h2 className="font-pacifico text-red-600 drop-shadow-smaller md:text-[22vh] text-[8vh] md:font-regular text-center translate-y-[10vh]">
      {t('HomePage.CakeTypeNav.BONBON')}
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center w-[100%] rounded-sm overflow-hidden md:p-[4vw] p-[2vw] gap-[4vw] md:gap-0 mt-[2vh]">
        {images.lazyImages.map((lazyImage, index) => (
          <LazyImage
          loading={index < 4 ? 'eager' : 'lazy'}
          class_img={"md:size-[20vw] object-contain shadow-type bg-red-300 md:m-2 product_img"}
            alt_img={`other ${index + 1}`}
            key={`other ${index + 1}`}
            lazy_img={lazyImage.default}
            ready_img={images.readyImages[index].default}
          />
        ))}
      </div>
    </section>
  );
}
