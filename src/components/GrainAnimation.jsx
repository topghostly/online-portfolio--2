import React, { useEffect } from "react";
import styled from "styled-components";

function GrainAnimation({ children }) {
  useEffect(() => {
    // Check if the grain function is loaded
    if (typeof grained === "undefined") {
      console.error("Grained is not defined");
      return;
    }

    grained("#grainLayer", {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.1,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1,
    });
  }, []);

  const applyFixedStyle = () => {
    const grainLayer = document.getElementById("grainLayer");

    if (!grainLayer) return console.error("Grain layer not found");

    Object.assign(grainLayer.style, {
      position: "fixed",
      width: "100vw",
      height: "100vh",
      top: "0",
      left: "0",
      opacity: 1,
      display: "block",
    });
  };

  setTimeout(() => {
    applyFixedStyle();
  }, 200);
  return <Holder id="grainLayer">{children}</Holder>;
}

const Holder = styled.div`
  position: fixed;
  width: 100px;
  height: 100px;
  top: 100px;
  left: 0px;
  z-index: 999;
  pointer-events: none;
  opacity: 0;
  display: none;
`;

export default GrainAnimation;
