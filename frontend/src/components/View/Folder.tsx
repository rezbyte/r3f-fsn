import { useRef } from "react";
import { Vector3 } from "three";
import FileInterface from "../../types/file";
import File from "./File";
import Text from "./Text";

interface folderProps {
  name: string;
  files: FileInterface[];
}

export default function Folder(
  props: folderProps & JSX.IntrinsicElements["mesh"]
) {
  const mesh = useRef<THREE.Mesh>(null);

  function getFolderSize(files: FileInterface[]): number {
    let totalBytes = 0;
    for (const index in files) {
      const file = files[index];
      totalBytes += file.byteSize;
    }
    return totalBytes;
  }

  function mapFiles(
    files: FileInterface[],
    y: number,
    rowWidth: number,
    spacing: number
  ): JSX.Element[] {
    const fileElements: JSX.Element[] = [];

    let row = 0;
    let column = 0;

    for (const index in files) {
      const file = files[index];
      const x = column * spacing - (files.length - spacing / 2);
      const z = row * spacing;
      fileElements.push(<File key={index} {...file} position={[x, y, z]} />);

      column++;
      if (column >= rowWidth) {
        row++;
        column = 0;
      }
    }

    return fileElements;
  }

  const byteSize = getFolderSize(props.files);

  const rowSize = 7;
  const spacing = 2;

  const width = props.files.length * spacing;
  const height = byteSize / 25000;
  const depth = (props.files.length * spacing) / rowSize;

  const files = mapFiles(props.files, height * 0.6, rowSize, spacing);

  return (
    <group>
      {files}
      <mesh {...props} ref={mesh} scale={[width, height, depth]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"white"} />
        <Text text={props.name} position={[0, 0, 1]} />
      </mesh>
    </group>
  );
}
