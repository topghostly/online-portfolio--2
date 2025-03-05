"use client";

import React, { useEffect, useState } from "react";
import Script from "next/script";

function GrainAnimation() {
  const [isGrainedLoaded, setIsGrainedLoaded] = useState(false);

  useEffect(() => {
    // Check if grained is defined once the script is loaded
    if (typeof grained !== "undefined") {
      setIsGrainedLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!isGrainedLoaded) return;

    grained("#grainLayer", {
      animate: true,
      patternWidth: 100,
      patternHeight: 100,
      grainOpacity: 0.1,
      grainDensity: 1,
      grainWidth: 1,
      grainHeight: 1,
    });
  }, [isGrainedLoaded]);

  const applyFixedStyle = () => {
    const grainLayer = document.getElementById("grainLayer");

    if (!grainLayer) return console.error("Grain layer not found");

    Object.assign(grainLayer.style, {
      position: "fixed",
      width: "100vw",
      height: "100vh",
      top: "0",
      left: "0",
      opacity: 0.8,
      display: "block",
      pointerEvents: "none",
    });
  };

  setTimeout(() => {
    applyFixedStyle();
  }, 200);

  return (
    <>
      <Script
        src="/grained.js"
        strategy="afterInteractive"
        onLoad={() => setIsGrainedLoaded(true)}
      />
      <div id="grainLayer"></div>
    </>
  );
}

export default GrainAnimation;
