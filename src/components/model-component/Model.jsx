import React, { useRef } from "react";
import { useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

function Model(props) {
  const { viewport } = useThree();

  const meshRef = useRef(null);

  useFrame(() => {
    meshRef.current.rotation.x += 0.0005;
    meshRef.current.rotation.y += 0.0005;
    meshRef.current.rotation.z += 0.0005;
  });

  const { nodes, materials } = useGLTF("/modias/cassette-freepoly.org.glb");

  return (
    <group {...props} dispose={null}>
      <group
        position={[0, 0, 0]}
        scale={[
          viewport.width / 350,
          viewport.width / 350,
          viewport.width / 350,
        ]}
      >
        <group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["fggggg001_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
              position={[-18.144, 7.778, 0]}
              ref={meshRef}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

export default Model;
