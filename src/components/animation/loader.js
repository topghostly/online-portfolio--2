import gsap from "gsap";

// Fuction to stop scrolling while loader is active
export const stopScrolling = () => {
  document.body.style.overflow = "hidden";
};

export const enableScrolling = () => {
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
    },
    "-=1.5"
  )
    .to(textRef.current.querySelectorAll("span"), {
      y: "-110%",
      delay: 2,
      stagger: -0.06,
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
      "<0.2"
    );
};
