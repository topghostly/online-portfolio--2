import React, { useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

function HoverAnimation({ children }) {
  const hoverRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(hoverRef.current, {
      duration: 0.5,
      backgroundSize: "100%",
    });
  };
  const handleMouseLeave = () => {
    gsap.to(hoverRef.current, {
      duration: 0.8,
      backgroundSize: "0%",
      ease: "power2.inOut",
    });
  };
  return (
    <HoverContainer
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <HoverHolder ref={hoverRef}>{children}</HoverHolder>
    </HoverContainer>
  );
}

const HoverContainer = styled.div`
  width: fit-content;
  display: inline;
  padding: 10px 20px;
  background-color: pink;
`;
const HoverHolder = styled.div`
  position: relative;
  width: fit-content;
  background-image: url(/images/hover-background.png);
  background-size: 0%;
  background-repeat: no-repeat;
  background-position: center;
  width: fit-content;
  cursor: pointer;
`;

export default HoverAnimation;
