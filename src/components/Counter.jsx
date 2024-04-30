import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Counter = ({ num, counter_class }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0); // Start counting from 0
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the counter is in view
      const rect = document.getElementById("counter").getBoundingClientRect();
      setIsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isVisible && count < num) {
      // If counter is in view and count is less than the target number, increase count
      controls.start({ opacity: 1, scale: 1 });
      const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, num == 100 ? 26 : 20*num);
      return () => clearInterval(interval);
    } else {
      controls.start({ opacity:1, scale: 0.9 ,translateY:'-6vh'});
    }
  }, [isVisible, count, controls, num]);

  return (
    <motion.h1
      animate={controls}
      id="counter"
      className={counter_class}
    >
      {count}{count > 99 && '+' }
    </motion.h1>
  );
};

export default Counter;
