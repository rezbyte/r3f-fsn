import { Group, PerspectiveCamera } from "three";
import { ReactNode, useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface worldProps {
  camera: PerspectiveCamera;
  children: ReactNode;
}

export default function World(props: worldProps) {
  const group = useRef<Group>(null!);
  useFrame((state, delta, xrFrame) => {
    const cameraPosition = props.camera.position;
    group.current!.position.y = cameraPosition.y;
  });
  return <group ref={group}>{props.children}</group>;
}
