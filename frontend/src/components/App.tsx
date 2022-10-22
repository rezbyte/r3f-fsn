import { useState, ChangeEvent } from "react";
import { Vector3 } from "three";
import CameraControls from "./CameraControls";
import ColourGuide from "./ColourGuide";
import Marks from "./Marks";
import PathManager from "./PathManager";
import Search from "./Search";
import Toolbar from "./Toolbar";
import View from "./View/View";
import { PerspectiveCamera } from "three";

export default function App() {
  const [cameraPosition, setCameraPosition] = useState(new Vector3(0, 0, 5));
  function createCamera(): PerspectiveCamera {
    const camera = new PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
    return camera;
  }
  function setHeight(e: ChangeEvent<HTMLInputElement>) {
    const newY: number = -e.target.valueAsNumber;
    setCameraPosition(new Vector3(cameraPosition.x, newY, cameraPosition.z));
  }
  return (
    <div className="app">
      <Toolbar />
      <PathManager />
      <CameraControls height={cameraPosition.y} onHeightChange={setHeight} />
      <Search />
      <Marks />
      <View camera={createCamera()} />
      <ColourGuide />
    </div>
  );
}
