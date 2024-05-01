import React, { useEffect, useRef } from "react";

const LazyImage = ({ lazy_img, ready_img, alt_img, class_img,loading }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const imgTargets = document.querySelectorAll("img[data-src]");

    const loadImg = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target === imgRef.current) {
          entry.target.src = entry.target.dataset.src;
          entry.target.addEventListener("load", () => {
            entry.target.classList.remove("lazy-img");
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const imgObserver = new IntersectionObserver(loadImg, {
      root: null,
      threshold: 0,
      rootMargin: "200px 0px 200px 0px"
    });

    imgTargets.forEach((img) => imgObserver.observe(img));

    return () => {
      imgTargets.forEach((img) => imgObserver.unobserve(img));
    };
  }, []);

  return (
    <img
      ref={imgRef}
      loading={loading}
      className={`${class_img} lazy-img`}
      src={lazy_img}
      data-src={ready_img}
      alt={alt_img}
    />
  );
};

export default LazyImage;
