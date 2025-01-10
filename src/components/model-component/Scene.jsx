import React from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Model from "./Model";
import {
  Environment,
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
} from "@react-three/drei";

function Scene() {
  return (
    <SceneHolder>
      <Canvas>
        {/* <GizmoHelper>
          <GizmoViewport />
        </GizmoHelper> */}
        {/* <axesHelper args={[10]} />
        <gridHelper args={[10]} /> */}
        <OrbitControls />
        <directionalLight intensity={10} position={[0, 1.6, 10]} />
        <Model />
      </Canvas>
    </SceneHolder>
  );
}

const SceneHolder = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: none;
  /* z-index: 100; */
`;
export default Scene;
