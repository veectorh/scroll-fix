import { useRef } from "react";
import { motion, cubicBezier, useScroll, useTransform } from "framer-motion";
export default function Scroll({ children }) {

  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0, 1", "1, 1"]
  });

  const scaler = useTransform(scrollYProgress, [0,1], [0, 1]);
  const hider = useTransform(scrollYProgress, [0,1], [0.5, 1])

  const easing = cubicBezier(0.7, 0, 0.3, 1)


  return (
    <motion.div 
        ref={ref}
        className="copy-image"
        style={{
          scale: scaler,
          opacity: hider
        }}
      >
      {children}
    </motion.div>
  );
}
