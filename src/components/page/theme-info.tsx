"use client";

import { MenuBox } from "../ui/menu-box";
import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export const ThemeInfo: React.FC = () => {
  const [open, setopen] = useState<boolean>(false);

  const hamburgerTextRef = useRef(null);

  useLayoutEffect(() => {
    if (open) {
      gsap.to(hamburgerTextRef.current, {
        y: -22,
        transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
        delay: 0.3,
        ease: "power1.inOut",
        duration: 0.15,
      });
    } else {
      gsap.to(hamburgerTextRef.current, {
        y: 0,
        transition: "all 0.2s cubic-bezier(0.25, 0.1, 0.25, 1)",
        delay: 0.3,
        duration: 0.15,
        ease: "power1.inOut",
      });
    }
  }, [open]);
  return (
    <div className="fixed top-3 w-full z-[300] h-fit max-w-[1280px] mx-auto px-3 lg:px-0.5">
      <div className="w-full flex justify-end gap-2 mb-7 md:mb-2 relative ">
        <MenuBox open={open} />
        <div
          className="font-semibold text-[0.8rem] h-[30px] bg-foreground text-background w-[90px] grid grid-cols-[30px_1fr] group cursor-pointer"
          onClick={() => setopen(!open)}
        >
          <div className="w-full bg-background border border-foreground flex flex-col gap-0.5 justify-center items-center group">
            <span className="h-[2px] w-[50%] bg-[var(--theme)] hover:w-[10%] group-hover:w-[20%] duration-200"></span>
            <span className="h-[2px] w-[50%] bg-[var(--theme)]"></span>
            <span className="h-[2px] w-[50%] bg-[var(--theme)] hover:w-[10%] group-hover:w-[20%] duration-200"></span>
          </div>
          <div
            className="flex justify-center items-center text-[12px] border border-foreground relative"
            style={{
              fontFamily: "var(--font-gobold)",
              letterSpacing: "1px",
            }}
          >
            <div className="w-[50px] h-[18px] relative overflow-hidden">
              <div
                ref={hamburgerTextRef}
                className="absolute right-0 w-full h-[40px] flex flex-col justify-between items-center"
              >
                <span>MENU</span>
                <span>CLOSE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

{
  /* Open to
        <span className="italic font-extralight">new opportunities</span>
        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-fade ml-2"></div> */
}
