import * as THREE from "three";
import { useRef } from "react";
import fragmentShader from "../../shaders/Skybox.glsl";

export default function SkyBox(props: JSX.IntrinsicElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!);
  return (
    <mesh {...props} ref={mesh} scale={10} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <shaderMaterial
        side={THREE.BackSide}
        fragmentShader={fragmentShader}
        uniforms={{ resolution: { value: [1, 2] } }}
      />
    </mesh>
  );
}
