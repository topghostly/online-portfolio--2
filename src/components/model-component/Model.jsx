import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

function Model(props) {
  const { nodes } = useGLTF("/modias/king_chess.glb");
  const { viewport } = useThree();

  const meshRef = useRef(null);

  // useFrame(() => {
  //   meshRef.current.rotation.y += 0.002;
  // });
  return (
    <group rotation={[-Math.PI / 2, 0, 0]}>
      <mesh
        {...nodes.Object_2}
        // ref={meshRef}
        position={[0, 2, 0]}
      >
        {/* <torusGeometry args={[0.6]} /> */}
        <MeshTransmissionMaterial
          thickness={0.2}
          roughness={0}
          transmission={1}
          ior={1.2}
          chromaticAberration={0.02}
          backside={true}
        />
      </mesh>
    </group>
  );
}

export default Model;
