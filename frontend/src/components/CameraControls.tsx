import "../styles/CameraControls.css";

export default function CameraControls() {
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
      <hr />
      <div className="sliders">
        <input id="tilt-slider" type="range" />
        <label htmlFor="tilt-slider">Tilt</label>
        <input id="height-slider" type="range" />
        <label htmlFor="height-slider">Height</label>
      </div>
    </div>
  );
}
