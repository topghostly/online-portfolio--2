"use client";

import { useLayoutEffect, useRef } from "react";
import { SectionTitleTypes } from "@/types/layout";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

export const SectionTitle: React.FC<SectionTitleTypes> = ({ children }) => {
  const backgroundImageRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to(backgroundImageRef.current, {
        duration: 10,
        ease: "linear",
        scrollTrigger: {
          trigger: backgroundImageRef.current,
          start: "top top",
          end: "bottom top",
          pin: sectionNameRef.current,
          scrub: true,
          pinSpacing: false,
          pinnedContainer: backgroundImageRef.current,
        },
      });
    }, backgroundImageRef);

    return () => ctx.revert();
  }, []);

  const sectionNameRef = useRef(null);

  useLayoutEffect(() => {}, []);
  return (
    <div
      ref={backgroundImageRef}
      style={{
        // backgroundImage: "url(/images/titleBackground.webp)",
        // backgroundSize: "cover",
        // borderImageRepeat: "no-repeat",
        // backgroundPosition: "0%",
        // backgroundClip: "text",
        // WebkitTextFillColor: "transparent",
        // WebkitBackgroundClip: "text",
        // color: "transparent",
        fontSize: "1.1rem",
      }}
      className="sm:order-none sub font-bold order-1 parent"
    >
      <p
        className="h-fit"
        ref={sectionNameRef}
        style={{
          fontFamily: "var(--font-gobold)",
        }}
      >
        {children}
      </p>
    </div>
  );
};
