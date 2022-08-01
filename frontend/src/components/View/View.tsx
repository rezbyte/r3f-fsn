import { Canvas } from "@react-three/fiber";
import SkyBox from "./Skybox";
import File from "./File";

export default function View() {
  return (
    <Canvas className="view" frameloop="demand">
      <SkyBox />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <File
        name="a.png"
        byteSize={8381}
        creationDate={new Date("2022/07/01")}
        position={[-1.2, 0, 0]}
      />
      <File
        name="b.txt"
        byteSize={15000}
        creationDate={new Date("2020/07/01")}
        position={[1.2, 0, 0]}
      />
    </Canvas>
  );
}
