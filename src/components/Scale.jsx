import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Scale({
  containerWidth = 100,
  scaleWidth = 60,
  containerHeight = 3,
  scaleHeight = 80,
  containerColor = "black",
  scaleColor = "lightsalmon"
}) {
  const [scaleRef, scaleInView] = useInView({
    threshold: 0.3
  });

  const variants = {
    hiddenScale: {
      width: "10%", // For smaller devices
      backgroundColor: containerColor,
      transition: { duration: 1, ease: ["backIn", "backOut"] }
    },
    visibleScale: {
      width: `${scaleWidth}%`,
      backgroundColor: scaleColor,
      transition: { duration: 1, ease: ["backIn", "backOut"] }
    }
  };

  return (
    <div
      className={`flex items-center px-1 rounded-full`}
      style={{
        width: `${containerWidth}%`,
        height: `${containerHeight}vh`,
        backgroundColor: containerColor,
      }}
    >
      <motion.div
        ref={scaleRef}
        animate={scaleInView ? "visibleScale" : "hiddenScale"}
        variants={variants}
        style={{
          height: `${scaleHeight}%`,
          borderRadius: '9999px', // This will make the div fully rounded
        }}
        className="bg-red-500" // This class can be removed or adjusted if you're setting backgroundColor dynamically
      ></motion.div>
    </div>
  );
}
