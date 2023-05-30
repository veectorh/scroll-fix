import ScrollStyles from "./styles/ScrollStyles";
import { useEffect, useRef, useState } from "react";

export default function Scroll({ children, active, setActive }) {
  const placeholderRefs = useRef([]);
  const parentRef = useRef();
  useEffect(() => {
    if (
      parentRef.current &&
      parentRef.current.getBoundingClientRect().top === 0
    ) {
      placeholderRefs.current[active].scrollIntoView();
    }
  }, [active]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const newEntry = entries.find((entry) => entry.isIntersecting);
        if (newEntry) {
          const idx = Number(newEntry.target.attributes.idx.textContent);
          setActive(idx);
        }
      },
      { threshold: 0.25 }
    );
    placeholderRefs.current.forEach((placeholder, idx) => {
      observer.observe(placeholder);
    });
  }, [placeholderRefs.current]);

  return (
    <ScrollStyles childrenLen={children.length}>
      <div className="track" ref={parentRef}>
        {children}
      </div>
      <div className="placeholders">
        {children.map((child, idx) => (
          <div
            id={`scroll-elem-${idx}`}
            idx={idx}
            key={`scroll-elem-${idx}`}
            className="placeholder"
            ref={(el) => (placeholderRefs.current[idx] = el)}
          />
        ))}
      </div>
    </ScrollStyles>
  );
}
