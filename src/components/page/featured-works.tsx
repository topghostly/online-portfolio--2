"use client";

import { SectionTitle } from "../ui/section-title";
import { Separator } from "../ui/separator";
import { ArrowUpRight } from "lucide-react";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface LinkHolderProps {
  text: string;
  href: string;
}

const Badge = ({ text }: { text: "Web App" | "Mobile App" | "Website" }) => {
  return (
    <div className="text-[8px] text-white font-bold bg-[var(--theme)] w-fit h-fit px-2 py-1 rounded-2xl">
      {text}
    </div>
  );
};

export const LinkHolder: React.FC<LinkHolderProps> = ({ text, href }) => {
  const containerRef = useRef<HTMLAnchorElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !arrowRef.current) return;

    // build the hover timeline, but leave it paused
    const tl = gsap.timeline({ paused: true });
    // 1) shoot arrow up/right
    tl.to(arrowRef.current, {
      x: 20,
      y: -20,
      duration: 0.15,
      delay: 0.1,
      ease: "power4.in",
    })
      // 2) immediately teleport arrow to bottom/left outside
      .set(arrowRef.current, { x: -20, y: 20 })
      // 3) slide arrow back to center
      .to(arrowRef.current, {
        x: 0,
        y: 0,
        duration: 0.15,
        ease: "power4.out",
      });

    const onEnter = () => tl.play(0);
    const onLeave = () => tl.reverse();

    const el = containerRef.current;
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    return () => {
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      tl.kill();
    };
  }, []);

  return (
    <a
      ref={containerRef}
      href={href}
      // className="absolute top-3 left-3"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="font-semibold text-[0.8rem] h-[30px] bg-foreground text-background w-[110px] grid grid-cols-[30px_1fr] cursor-pointer">
        <div className="w-full bg-background border border-foreground flex justify-center items-center overflow-hidden">
          <div ref={arrowRef} className="w-fit h-fit">
            <ArrowUpRight color="var(--theme)" size={20} />
          </div>
        </div>
        <div
          className="flex w-full justify-center items-center text-[12px] px-3 border border-foreground"
          style={{
            fontFamily: "var(--font-gobold)",
            letterSpacing: "1px",
          }}
        >
          {text}
        </div>
      </div>
    </a>
  );
};

export const Featured: React.FC = () => {
  return (
    <section
      className="flex flex-col sm:grid sm:grid-cols-[0.2fr_2px_1fr]  lg:grid-cols-[0.3fr_2px_1fr] gap-7 w-full"
      id="featured-section"
    >
      <SectionTitle text="projects" imagepath="/images/svg/ico-04.svg" />
      <Separator orientation="vertical" className="hidden sm:block" />
      {/* Work holder div */}
      <div className="flex flex-col gap-14 sm:gap-7">
        <div className="flex flex-col gap-7 relative">
          <div className="absolute w-full top-3 px-3 flex justify-between">
            <LinkHolder
              text="GITHUB"
              href="https://github.com/topghostly/glyph-cms"
            />
            <LinkHolder text="PREVIEW" href="https://www.getglyph.app/" />
          </div>

          <div
            className={`
    w-full aspect-[16/9] rounded-md
    bg-[url('/images/glyph.webp')]
    hover:bg-[url('/images/glyph-hover.webp')]
    bg-center bg-cover bg-no-repeat
    transition-all duration-250
  `}
          />
          <div className="flex flex-col sm:grid sm:grid-cols-[150px_1fr] gap-2">
            <div className="flex flex-col">
              <Badge text="Web App" />
              <h3 className="text-2xl font-bold">Glyph</h3>
            </div>

            <p>
              Offline-first CMS for seamless storytelling: draft anywhere, embed
              rich media and tags offline, then sync instantly to the web.
              Includes a developer-friendly SDK for easy integration and custom
              workflows.
            </p>
          </div>
        </div>
        <Separator className="hidden sm:block" />
        <div className="flex flex-col sm:grid sm:grid-cols-[1fr_2px_1fr] gap-14 sm:gap-7 relative">
          <div className="flex flex-col gap-7 relative">
            <div className="absolute w-full top-3 px-3 flex justify-between">
              <LinkHolder
                text="GITHUB"
                href="https://github.com/topghostly/Echonote-react-native-app"
              />
              <LinkHolder
                text="ANDROID"
                href="https://drive.google.com/file/d/1FLgpAbNoK-XJ9x9ssS8LaGv6t-eg6OME/view?usp=sharing"
              />
            </div>
            <div
              className="w-full aspect-[9/10.5] rounded-md"
              style={{
                backgroundImage: "url('/images/EchoNote.webp')",
                backgroundPosition: "center 0%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <Badge text="Mobile App" />
                <h3 className="text-2xl font-bold">EchoNote</h3>
              </div>
              <p>
                A next-gen AI-powered image and video editing app that enhances
                creativity with smart tools. From automatic background removal
                to style transfers and real-time video enhancements, it
                streamlines editing like never before. Designed for speed,
                precision, and ease of use.
              </p>
            </div>
          </div>
          <Separator orientation="vertical" className="hidden sm:block" />
          <div className="flex flex-col gap-7 relative ">
            <div className="absolute w-full top-3 px-3 flex justify-between">
              <LinkHolder
                text="GITHUB"
                href="https://github.com/topghostly/backDropper-app"
              />
              <LinkHolder
                text="ANDROID"
                href="https://drive.google.com/file/d/1lexWO5wUMZME3XsH7wrRHUQxXOpIQLYU/view?usp=sharing"
              />
            </div>

            <div
              className="w-full aspect-[9/10.5] rounded-md"
              style={{
                backgroundImage: "url('/images/imageRaft.webp')",
                backgroundPosition: "center 0%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div className="flex flex-col gap-2">
              <div className="flex flex-col">
                <Badge text="Mobile App" />
                <h3 className="text-2xl font-bold">BackDropper</h3>
              </div>
              <p>
                A smart, intuitive voice memo app crafted with React Native for
                effortless audio recording and organization. Capture thoughts,
                meetings, and ideas on the fly with high-quality sound, quick
                playback, and easy file management. Perfect for productivity,
                creativity, and note-taking anytime, anywhere.
              </p>
            </div>
          </div>
        </div>
        <Separator className="hidden sm:block" />
        <div className="flex flex-col gap-7 relative">
          <div className="absolute w-full top-3 px-3">
            <LinkHolder
              text="PREVIEW"
              href="https://doshpal-next-site-pitch.vercel.app/"
            />
          </div>

          <div
            className={`
    w-full aspect-[16/9] rounded-md
    bg-[url('/images/payverge.webp')]
    hover:bg-[url('/images/payverge-hover.webp')]
    bg-center bg-cover bg-no-repeat
    transition-all duration-250
  `}
          />
          <div className="flex flex-col sm:grid sm:grid-cols-[150px_1fr] gap-2">
            <div className="flex flex-col">
              <Badge text="Website" />
              <h3 className="text-2xl font-bold">Payverge</h3>
            </div>

            <p>
              A Lending-as-a-Service platform built with Next.js, empowering
              businesses with seamless, scalable, and secure loan management
              solutions. From instant credit decisions to automated repayments,
              Payverge simplifies lending with speed, precision, and
              flexibility.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-7 relative">
          <div className="absolute w-full top-3 px-3 flex justify-between">
            <LinkHolder
              text="GITHUB"
              href="https://github.com/topghostly/next-AI-video-editor"
            />
            {/* <LinkHolder
              text="PREVIEW"
              href="https://github.com/topghostly/next-AI-video-editor"
            /> */}
          </div>

          <div
            className={`
    w-full aspect-[16/9] rounded-md
    bg-[url('/images/reelcraft.webp')]
    hover:bg-[url('/images/reelcraft-hover.webp')]
    bg-center bg-cover bg-no-repeat
    transition-all duration-250
  `}
          />
          <div className="flex flex-col sm:grid sm:grid-cols-[150px_1fr] gap-2">
            <div className="flex flex-col">
              <Badge text="Web App" />
              <h3 className="text-2xl font-bold">ReelCraft</h3>
            </div>

            <p>
              A next-gen AI-powered image and video editing app that enhances
              creativity with smart tools. From automatic background removal to
              style transfers and real-time video enhancements, it streamlines
              editing like never before. Designed for speed, precision, and ease
              of use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
