import { motion, cubicBezier } from "framer-motion";
export default function Scroll({ children }) {
  
  const contentSequence = {
    visible: { opacity: 1, height: "100vh" },
    hidden: { opacity: 0, height: "0vh"}
  }

  const easing = cubicBezier(0.7, 0, 0.3, 1)


  return (
    <motion.div 
        className="copy-image"
        initial={contentSequence.hidden}
        whileInView={contentSequence.visible}
        viewport={{ once: false }}
        transition={{ ease: easing, duration: 0.5 }}
      >
      {children}
    </motion.div>
  );
}
