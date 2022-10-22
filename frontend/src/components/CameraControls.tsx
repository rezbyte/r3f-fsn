import { ChangeEventHandler } from "react";
import "../styles/CameraControls.css";

interface cameraControlsProps {
  height: number;
  onHeightChange: ChangeEventHandler<HTMLInputElement>;
}

export default function CameraControls(props: cameraControlsProps) {
  return (
    <div className="camera-controls">
      <div className="buttons">
        <button>
          reset <kbd>Alt+R</kbd>
        </button>
        <button>
          go back <kbd>Alt+B</kbd>
        </button>
        <button>birds eye</button>
        <button>front view</button>
      </div>
      <div className="sliders">
        <input id="tilt-slider" type="range" />
        <label htmlFor="tilt-slider">Tilt</label>
        <input
          id="height-slider"
          type="range"
          min="-10"
          max="10"
          step="0.1"
          value={-props.height}
          onChange={props.onHeightChange}
        />
        <label htmlFor="height-slider">Height</label>
      </div>
    </div>
  );
}
