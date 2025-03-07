"use client";

import { useLayoutEffect, useRef } from "react";
import { SectionTitleTypes } from "@/types/layout";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Copyright } from "lucide-react";
import { Test } from "./test";

export const SectionTitle: React.FC<SectionTitleTypes> = ({
  text,
  imagepath,
}) => {
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
    // <div
    //   ref={backgroundImageRef}
    //   style={{
    //     // backgroundImage: "url(/images/titleBackground.webp)",
    //     // backgroundSize: "cover",
    //     // borderImageRepeat: "no-repeat",
    //     // backgroundPosition: "0%",
    //     // backgroundClip: "text",
    //     // WebkitTextFillColor: "transparent",
    //     // WebkitBackgroundClip: "text",
    //     // color: "transparent",
    //     fontSize: "1.1rem",
    //   }}
    //   className="sm:order-none sub font-bold order-1 parent"
    // >
    //   <p
    //     className="h-fit"
    //     ref={sectionNameRef}
    //     style={{
    //       fontFamily: "var(--font-gobold)",
    //     }}
    //   >
    //     {children}
    //   </p>
    // </div>

    <div className="h-[70px] w-[235px] grid grid-cols-[65px_170px] border border-foreground">
      <div className="grid relative place-content-center h-full border border-r-foreground w-full">
        <Image src={imagepath} alt="logo image" width={35} height={35} />
      </div>
      <div className="grid grid-rows-[0.9fr_1fr]">
        <div
          className="border border-b-foreground flex justify-center items-center"
          style={{
            fontFamily: "var(--font-gobold)",
            gap: "5px",
          }}
        >
          PRODUCTION <Copyright size={15} /> 2025
        </div>
        <div className="">
          <Test text={text} />
        </div>
      </div>
    </div>
  );
};
