"use client";
import { ReactNode, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ModeSwitch from "../theme/mode-toggle";
import Link from "next/link";

/* SOCIAL MEDIA DATA */
export const SOCIALS = [
  {
    name: "GITHUB",
  },
  {
    name: "TWITTER",
  },
  {
    name: "LINKEDIN",
  },
  {
    name: "MAIL",
  },
];

/* MENU HOLDER */
const MenuHolder = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full text-3xl px-2 font-medium opacity-0 menu-links cursor-pointer">
      {children}
    </div>
  );
};

export const MenuBox = ({ open }: { open: boolean }) => {
  const holdeRef = useRef(null);

  /* MENU BOX OPENING LOGIC */
  useLayoutEffect(() => {
    const menuLinks = document.querySelectorAll(".menu-links");
    const socialLinks = document.querySelectorAll(".social-link a");
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    if (open) {
      tl2.kill();
      tl.set(menuLinks, {
        y: 40,
        rotationX: 90,
        display: "block",
      })
        .set(socialLinks, {
          opacity: 0,
          display: "block",
          y: 10,
        })
        .to(holdeRef.current, {
          width: `${"300px"}`,
          height: `${"370px"}`,
          transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
          duration: 0.2,
          ease: "power1.inOut",
          boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          top: `${open ? "-10px" : "0px"}`,
          right: `${open ? "-10px" : "0px"}`,
        })
        .to(menuLinks, {
          delay: 0.1,
          opacity: 1,
          stagger: 0.08,
          duration: 0.3,
          y: 0,
          rotationX: 0,
        })
        .to(
          socialLinks,
          {
            opacity: 1,
            y: 0,
            stagger: 0.04,
          },
          "-=.5"
        );
    }

    // MENU CLOSE
    if (!open) {
      tl.pause();
      tl2
        .to(menuLinks, {
          opacity: 0,
          duration: 0.3,
          display: "none",
        })
        .to(
          socialLinks,
          {
            opacity: 0,
            display: "none",
          },
          "-=.3"
        )
        .to(
          holdeRef.current,
          {
            width: `${"90px"}`,
            height: `${"30px"}`,
            transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
            duration: 0.2,
            ease: "power1.inOut",
            boxShadow: "none",
            top: `${open ? "-10px" : "0px"}`,
            right: `${open ? "-10px" : "0px"}`,
          },
          "-=.3"
        );
    }
  }, [open]);

  return (
    <div
      style={{
        position: "absolute",
        width: "90px",
        height: "30px",
        zIndex: -1,
        top: 0,
        right: 0,
      }}
      ref={holdeRef}
      className="bg-foreground text-background"
    >
      <div className="mt-[45px] p-3 flex flex-col gap-3">
        <MenuHolder>
          <ModeSwitch />
        </MenuHolder>
        <MenuHolder>
          <a href="#about-section">About</a>
        </MenuHolder>
        <MenuHolder>
          <a href="#resume-section">Work Experience</a>
        </MenuHolder>
        <MenuHolder>
          <a href="#featured-section">Pro jects</a>
        </MenuHolder>
        <MenuHolder>
          <a
            href="files/Temitope Abolaji Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </MenuHolder>
        <div className="grid grid-cols-2 mt-3 gap-2 text-[12px] font-thin px-3 social-link">
          {SOCIALS.map((s, index) => {
            return (
              <Link href={"#"} key={index} className="opacity-0">
                {s.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
