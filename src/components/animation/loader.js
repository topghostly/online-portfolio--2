import gsap from "gsap";

// Fuction to stop scrolling while loader is active
export const stopScrolling = () => {
  console.log("stop scrolling");
  document.body.style.overflow = "hidden";
};

export const enableScrolling = () => {
  console.log("enable scrolling");
  document.body.style.overflow = "";
};

export const loaderAnimation = (textRef, containerRef) => {
  const tl = gsap.timeline({});

  tl.to(
    textRef.current.querySelectorAll("span"),
    {
      delay: 2,
      y: 0,
      stagger: 0.06,
      transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
    },
    "-=1.5"
  )
    .to(textRef.current.querySelectorAll("span"), {
      y: "-110%",
      delay: 2,
      stagger: -0.06,
      transition: "all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
    })
    .to(
      containerRef.current,
      {
        opacity: 0,
        onComplete: () => {
          enableScrolling();
          gsap.to(containerRef.current, {
            display: "none",
          });
        },
      },
      "<0.8"
    );
};
