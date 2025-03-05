"use client";

import { InfinityScrollTypes } from "@/types/layout";
import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const InfinityScroll: React.FC<InfinityScrollTypes> = ({ text }) => {
  /* VARIABLES */
  let xPercent = 0;
  const directionRef = useRef(0);

  /* REFS */
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);
  const sliderRef = useRef(null);

  /* ANIMATION FUNCTIONS */
  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstTextRef.current, { xPercent: xPercent });
    gsap.set(secondTextRef.current, { xPercent: xPercent });
    xPercent += 0.04 * directionRef.current;
    requestAnimationFrame(animation);
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    requestAnimationFrame(animation);

    gsap.to(sliderRef.current, {
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top bottom",
        end: "bottom top",
        onUpdate: (e) => (directionRef.current = e.direction * -1),
        scrub: 2,
        // markers: true,
      },
      x: "-=300px",
    });
  });

  return (
    <div className="flex whitespace-nowrap" ref={sliderRef}>
      <p
        style={{
          fontFamily: "var(--font-gobold)",
        }}
        ref={firstTextRef}
      >
        {text}&nbsp;
      </p>
      <p
        style={{
          fontFamily: "var(--font-gobold)",
        }}
        ref={secondTextRef}
      >
        {text}&nbsp;
      </p>
    </div>
  );
};
