import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


export default function ScrollInverse({ children }) {
  const ref = useRef(null);
  const [copyRef, copyInView] = useInView({
    triggerOnce: false,
  });
  const [imageRef, imageInView] = useInView({
    triggerOnce: false,
  });

  const copyvariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: "0%",
        transition: {
            duration: 1
        } 
    },
  };

  const imagevariants = {
    hidden: { opacity: 0, x: "-100%" },
    visible: { opacity: 1, x: "0%",
        transition: {
            duration: 1
        } 
    },
  };

  return (
    <div ref={ref} className="copy-image">
      <motion.div
        ref={copyRef}
        initial="hidden"
        animate={copyInView ? "visible" : "hidden"}
        variants={copyvariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="copy"
      >
        {children[0]}
      </motion.div>

      <motion.div
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={imagevariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="image"
      >
        {children[1]}
      </motion.div>
    </div>
  );
}
