"use client";

import { About } from "@/components/page/about-section";
import { Featured } from "@/components/page/featured-works";
import { Footer } from "@/components/page/footer-section";
import { ImageSection } from "@/components/page/image-section";
import { NameIntro } from "@/components/page/name-intro";
import { Resume } from "@/components/page/resume-section";
import { Service } from "@/components/page/service-section";
import { ThemeInfo } from "@/components/page/theme-info";
import { InfinityScroll } from "@/components/ui/infinity-scroll";
import { Separator } from "@/components/ui/separator";
import { useEffect, useRef } from "react";
import Loader from "@/components/page/loader";

export default function Home() {
  /* INITIALISE LOCOMOTIVE SCROLL */

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  /* ANIMATION REFS */
  const textRef = useRef(null); // LOADER TEXT
  const containerRef = useRef(null); // LOADER CONTAINER
  return (
    <>
      <Loader ref={[textRef, containerRef]} />
      <div className=" max-w-[1280px] mx-auto px-3 lg:px-0.5 flex flex-col gap-[0rem] items-center justify-items-center min-h-screen pb-2 pt-12">
        <ThemeInfo />
        <NameIntro />
        <ImageSection />
        <Separator className="my-7" />
        <About /> {/* Has a grid-2 layout */}
        <Separator className="my-7" />
        <Service /> {/* Has a grid-2 layout */}
        <Separator className="my-7" />
        <div className="w-full text-8xl font-bold overflow-hidden">
          <InfinityScroll text="WORK WORK WORK WORK WORK WORK WORK" />
        </div>
        <Separator className="my-7" />
        <Resume />
        <Separator className="my-7" />
        <Featured />
        <Separator className="my-7" />
        <Footer />
      </div>
    </>
  );
}
