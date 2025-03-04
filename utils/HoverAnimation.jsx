import React, { useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

function HoverAnimation({ children }) {
  const hoverRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(hoverRef.current, {
      duration: 0.3,
      backgroundSize: "100%",
      ease: "power1.in",
    });
  };
  const handleMouseLeave = () => {
    gsap.to(hoverRef.current, {
      duration: 0.3,
      backgroundSize: "0%",
      ease: "power1.out",
    });
  };
  return (
    <HoverContainer
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <Placholder className="place-holder">{children}</Placholder>
      <HoverHolder ref={hoverRef}>{children}</HoverHolder>
    </HoverContainer>
  );
}

const HoverContainer = styled.div`
  position: relative;
  width: fit-content;
  display: inline;
  padding: 10px 20px;
  display: grid;
  place-content: center;
  .place-holder {
    opacity: 1;
    transition: all 0.1s ease-in-out;
    transition-delay: 0.05s;
    cursor: pointer;
  }

  &:hover {
    .place-holder {
      opacity: 0.7;
      transition: all 0.1s ease-in-out;
      transition-delay: 0.24s;
    }
  }
`;

const Placholder = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  display: grid;
  color: black;
  place-content: center;
`;

const HoverHolder = styled.div`
  position: relative;
  width: fit-content;
  background-image: url(/images/hover-background.png);
  background-size: 0%;
  background-repeat: no-repeat;
  background-position: center;
  width: fit-content;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -ms-baclground-clip: text;
  -moz-background-clip: text;
  color: transparent;
  transform: translateY(-0.5px);
  z-index: 2;
  cursor: pointer;
`;

export default HoverAnimation;
