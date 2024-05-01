import React, { useState, useEffect } from "react";
import LazyImage from "../components/LazyImage";

// Import all lazy and ready images dynamically
const importImages = async () => {
  const lazyImages = [];
  const readyImages = [];
  const numOfPlated = 18;
  for (let i = 1; i <= numOfPlated; i++) {
    lazyImages.push(import(`../assets/pictures/ca (${i}l).jpg`));
    readyImages.push(import(`../assets/pictures/ca (${i}).jpg`));
  }
  return Promise.all([Promise.all(lazyImages), Promise.all(readyImages)]);
};

export default function CakeScreen() {
  const [images, setImages] = useState({ lazyImages: [], readyImages: [] });

  useEffect(() => {
    const fetchImages = async () => {
      const [lazyImages, readyImages] = await importImages();
      setImages({ lazyImages, readyImages });
    };

    fetchImages();
  }, []);

  return (
    <section id="cake" className="w-[100%] bg-amber-50">
      <div className="w-[100%] h-[30vh] bg-red-400">
      <h2 className="font-pacifico text-red-600 drop-shadow-smaller md:text-[22vh] text-[8vh] md:font-regular font-semibold text-center translate-y-[10vh]">
          Cakes
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center w-[100%] rounded-sm overflow-hidden p-[4vw] gap-[4vw] mt-[2vh]">
        {images.lazyImages.map((lazyImage, index) => (
          <LazyImage
          loading={index < 4 ? 'eager' : 'lazy'}
          class_img={"md:size-[24vw] object-contain shadow-type bg-red-300 md:m-[4vh] product_img"}
          alt_img={`cake ${index + 1}`}
            key={`cake ${index + 1}`}
            lazy_img={lazyImage.default}
            ready_img={images.readyImages[index].default}
          />
        ))}
      </div>
    </section>
  );
}
