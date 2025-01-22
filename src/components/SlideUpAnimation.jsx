import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import gsap from "gsap";

function SlideUpAnimation({ children, delay }) {
  const animationRef = useRef(null);

  // Slide Animation logic
  useEffect(() => {
    gsap.to(animationRef.current, {
      y: 0,
      opacity: 1,
      delay,
      duration: 0.5,
    });
  });
  return <AnimationContainer ref={animationRef}>{children}</AnimationContainer>;
}

const AnimationContainer = styled.div`
  position: relative;
  transform: translateY(70px);
  opacity: 0;
`;

export default SlideUpAnimation;
