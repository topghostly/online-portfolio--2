import React from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Model from "./Model";

function Scene() {
  return (
    <SceneHolder>
      <Canvas>{/* <Model /> */}</Canvas>
    </SceneHolder>
  );
}

const SceneHolder = styled.section`
  position: relative;
`;
export default Scene;
