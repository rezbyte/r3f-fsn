import * as THREE from "three";
import { useRef } from "react";
import { Color } from "@react-three/fiber";
import * as dayjs from "dayjs";
import Text from "./Text";
import { Vector3 } from "three";
import FileInterface from "../../types/file";

function getColourFromAge(date: Date): Color {
  const today = dayjs();
  const ageInWeeks = today.diff(date, "week");
  const ageInMonths = today.diff(date, "month");
  const ageInYears = today.diff(date, "year");
  if (ageInYears >= 2) {
    return new THREE.Color("#582341");
  } else if (ageInYears >= 1) {
    return new THREE.Color("#682489");
  } else if (ageInMonths >= 6) {
    return new THREE.Color("#1d4293");
  } else if (ageInMonths >= 3) {
    return new THREE.Color("#22605b");
  } else if (ageInMonths >= 1) {
    return new THREE.Color("#98952a");
  } else if (ageInWeeks >= 2) {
    return new THREE.Color("#985d1b");
  } else {
    return new THREE.Color("#9d1d1e");
  }
}

export default function File(
  props: FileInterface & JSX.IntrinsicElements["mesh"]
) {
  const mesh = useRef<THREE.Mesh>(null);

  const colour = getColourFromAge(props.creationDate);

  const position = props.position as Vector3 | undefined;
  const defaultPosition = new THREE.Vector3(
    position?.x ?? 0,
    position?.y ?? 0,
    position?.z ?? 0
  );
  const textPosition = defaultPosition.add(new Vector3(0, 0, 1));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={new THREE.Vector3(1, props.byteSize / 25000, 1)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={colour} />
      <Text text={props.name} position={textPosition} />
    </mesh>
  );
}
