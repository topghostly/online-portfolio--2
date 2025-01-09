import React from "react";
import { useGLTF } from "@react-three/drei";
function Model(props) {
  const { nodes } = useGLTF("/medias/head.glb");
  return (
    <group>
      <mesh {...nodes.Wolf3D_Outfit_Top001}></mesh>
    </group>
  );
}

export default Model;
