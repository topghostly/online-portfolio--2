import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

function Loader() {
  // Fuction to stop scrolling while loader is active
  const stopScrolling = () => {
    document.body.style.overflow = "hidden";
  };

  const enableScrolling = () => {
    document.body.style.overflow = "";
  };

  useEffect(() => {
    stopScrolling();

    return () => {
      enableScrolling();
    };
  }, []);

  // Animation Logic
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
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
  });
  return (
    <LoaderContainer ref={containerRef}>
      <Content>
        <Text ref={textRef}>
          <span>THE</span>
          <span>REAL</span>
          <span>AYINLA</span>
        </Text>
      </Content>
    </LoaderContainer>
  );
}

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 50% 50%;
  z-index: 900;
  height: 100%;
  background-color: var(--color-brown-800);
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  z-index: 1;
  height: fit-content;
`;

const Text = styled.p`
  color: white;
  pointer-events: none;
  display: flex;
  gap: 8px;
  overflow: hidden;

  @media (max-width: 400px) {
    gap: 4px;
  }

  span {
    font-size: var(--fs-6);
    transform: translateY(110%);

    @media (max-width: 826px) {
      font-size: var(--fs-4);
    }
    @media (max-width: 505px) {
      font-size: var(--fs-3);
    }
    @media (max-width: 400px) {
      font-size: var(--fs-2);
    }

    &:nth-child(3) {
      color: var(--color-brown-400);
    }
  }
`;

export default Loader;
