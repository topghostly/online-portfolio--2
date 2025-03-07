"use client";

import { SlideTypes } from "@/types/layout";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const Test: React.FC<SlideTypes> = ({ text }) => {
  let xPercent = 0;

  /* REFS */
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  const animation = () => {
    if (xPercent <= -100) {
      xPercent = 0;
    }
    if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstTextRef.current, { xPercent: xPercent });
    gsap.set(secondTextRef.current, { xPercent: xPercent });
    xPercent -= 0.04;
    requestAnimationFrame(animation);
  };

  useLayoutEffect(() => {
    requestAnimationFrame(animation);
  });
  return (
    <div className="max-w-[200px] h-full overflow-x-hidden">
      <div className="w-full font-bold overflow-hidden flex gap-1.5">
        <p className="flex gap-1.5" ref={firstTextRef}>
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index}>{text}</span>
          ))}
        </p>
        <p className="flex gap-1.5" ref={secondTextRef}>
          {Array.from({ length: 10 }).map((_, index) => (
            <span key={index}>{text}</span>
          ))}
        </p>
      </div>
    </div>
  );
};
