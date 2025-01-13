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
  const lineRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({});
    tl.to(lineRef.current, {
      delay: 2,
      width: "70vw",
      ease: "power3.out",
      duration: 1.5,
    }).fromTo(
      textRef.current.querySelectorAll("span"),
      {
        y: "110%",
      },
      {
        y: 0,
        stagger: 0.06,
      }
    );
  });
  return (
    <LoaderContainer>
      <Content>
        <Text ref={textRef}>
          <span>THE</span>
          <span>REAL</span>
          <span>AYINLA</span>
        </Text>
        <Line ref={lineRef} />
      </Content>
      <Curtain className="upper-curtain" />
      <Curtain className="lower-curtain" />
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

  span {
    font-size: var(--fs-6);

    &:nth-child(3) {
      color: var(--color-brown-400);
    }
  }
`;

const Line = styled.div`
  position: relative;
  width: 0px;
  background-color: var(--color-brown-500);
  height: 1px;
`;

const Curtain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: var(--color-brown-800);
`;
export default Loader;
