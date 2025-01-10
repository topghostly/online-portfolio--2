import React, { useRef } from "react";
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useControls } from "leva";

function Model(props) {
  // const { nodes } = useGLTF("/modias/simple_casette.glb");
  const { viewport } = useThree();

  const meshRef = useRef(null);

  // useFrame(() => {
  //   meshRef.current.rotation.y += 0.002;
  // });

  const { nodes, materials } = useGLTF("/modias/cassette-freepoly.org.glb");

  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -65]}>
        <group>
          <group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes["fggggg001_01_-_Default_0"].geometry}
              material={materials["01_-_Default"]}
              position={[-18.144, 7.778, -3.822]}
            />
          </group>
        </group>
      </group>
    </group>
  );

  //
  //// Chess piece model
  //

  // return (
  //   <group rotation={[-Math.PI / 2, 0, 0]}>
  //     <mesh
  //       {...nodes.Object_2}
  //       // ref={meshRef}
  //       position={[0, 2, 0]}
  //     >
  //       <MeshTransmissionMaterial {...materialProps} />
  //     </mesh>
  //     <Text rotation={[Math.PI / 2, 0, 0]} position={[0, 3, 0]} fontSize={3}>
  //       This
  //     </Text>
  //   </group>
  // );
}

export default Model;
