"use client";

import { SlideTypes } from "@/types/layout";
import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

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
    <div className="max-w-[169px] h-full overflow-x-hidden">
      <div
        className="w-full font-bold overflow-hidden flex gap-1.5"
        style={{
          fontFamily: "var(--font-gobold)",
          height: "100%",
          display: "flex",
          alignItems: "center",
          fontSize: "22px",
        }}
      >
        <div className="flex gap-1.5 uppercase" ref={firstTextRef}>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex gap-3">
              <p>{text}</p>
              <Image
                src={"/images/svg/ico-01.svg"}
                width={20}
                height={20}
                alt="images"
              />
            </div>
          ))}
        </div>
        <div className="flex gap-1.5 uppercase" ref={secondTextRef}>
          {Array.from({ length: 10 }).map((_, index) => (
            <div key={index} className="flex">
              <p>{text}</p>
              <Image
                src={"/images/svg/ico-01.svg"}
                width={20}
                height={20}
                alt="images"
                className="ml-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
