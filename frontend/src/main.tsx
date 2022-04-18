import React from "react";
import ReactDOM from "react-dom";
import CameraControls from "./components/CameraControls";
import PathManager from "./components/PathManager";
import Search from "./components/Search";
import Toolbar from "./components/Toolbar";
import "./styles/Global.css";

ReactDOM.render(
  <React.StrictMode>
    <Toolbar />
    <PathManager />
    <CameraControls />
    <Search />
    <hr />
  </React.StrictMode>,
  document.getElementById("root")
);
