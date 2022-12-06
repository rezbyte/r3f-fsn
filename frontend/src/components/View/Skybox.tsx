import { useRef } from "react";
import { BackSide } from "three";
import fragmentShader from "../../shaders/Skybox.glsl";

export default function SkyBox(props: JSX.IntrinsicElements["mesh"]) {
  const mesh = useRef<THREE.Mesh>(null!);

  return (
    <mesh ref={mesh} scale={100} position={[0, 0, 0]} {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <shaderMaterial
        side={BackSide}
        fragmentShader={fragmentShader}
        uniforms={{ resolution: { value: [1, 2] } }}
      />
    </mesh>
  );
}
