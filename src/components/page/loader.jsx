"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import {
  stopScrolling,
  enableScrolling,
  loaderAnimation,
} from "../animation/loader";

const Loader = ({ ref }) => {
  const [textRef, containerRef] = ref;
  useEffect(() => {
    stopScrolling();
    loaderAnimation(textRef, containerRef);

    return () => {
      enableScrolling();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed top-0 left-0 w-screen h-screen grid grid-rows-2 bg-background z-[900]"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
        <p
          ref={textRef}
          className="text-forground text-md sm:text-md md:text-xl pointer-events-none flex gap-1 md:gap-1.5 overflow-hidden items-center"
        >
          <span className="w-[30px] h-[30px] relative">
            <Image
              className="w-[30px] h-[30px]"
              src={"/images/favicon.ico"}
              alt="Profile Icon"
              fill={"auto"}
            />
          </span>
          <span className="text-[var(--fs-6)] translate-y-[110%] md:text-[var(--fs-4)] sm:text-[var(--fs-3)] xs:text-[var(--fs-2)]">
            THE
          </span>
          <span className="text-[var(--fs-6)] translate-y-[110%] md:text-[var(--fs-4)] sm:text-[var(--fs-3)] xs:text-[var(--fs-2)]">
            REAL
          </span>
          <span className="text-[var(--fs-6)] font-bold translate-y-[110%] md:text-[var(--fs-4)] sm:text-[var(--fs-3)] xs:text-[var(--fs-2)]">
            AYINLA
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loader;
