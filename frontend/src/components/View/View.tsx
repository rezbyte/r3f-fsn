import { Canvas } from "@react-three/fiber";
import SkyBox from "./Skybox";
import Folder from "./Folder";
import { PerspectiveCamera } from "three";
import World from "./World";
import FileInterface from "../../types/file";

interface viewProps {
  camera: PerspectiveCamera;
}

export default function View(props: viewProps) {
  const testFiles: FileInterface[] = [
    {
      name: "a.png",
      byteSize: 8381,
      creationDate: new Date("2022/07/01"),
    },
    {
      name: "b.txt",
      byteSize: 15000,
      creationDate: new Date("2022/07/01"),
    },
    {
      name: "c.png",
      byteSize: 8381,
      creationDate: new Date("2022/07/01"),
    },
    {
      name: "d.txt",
      byteSize: 15000,
      creationDate: new Date("2022/07/01"),
    },
    {
      name: "e.png",
      byteSize: 8381,
      creationDate: new Date("2022/07/01"),
    },
    {
      name: "f.txt",
      byteSize: 15000,
      creationDate: new Date("2022/07/01"),
    },
    {
      name: "g.png",
      byteSize: 8381,
      creationDate: new Date("2022/07/01"),
    },
    {
      name: "h.txt",
      byteSize: 15000,
      creationDate: new Date("2022/07/01"),
    },
  ];
  return (
    <Canvas className="view" camera={props.camera}>
      <World camera={props.camera}>
        <SkyBox />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Folder name="home" files={testFiles} />
      </World>
    </Canvas>
  );
}
