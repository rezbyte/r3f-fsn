import React from "react";
import ReactDOM from "react-dom";
import PathManager from "./components/PathManager";
import Toolbar from "./components/Toolbar";
import "./styles/Global.css";

ReactDOM.render(
  <React.StrictMode>
    <Toolbar />
    <PathManager />
  </React.StrictMode>,
  document.getElementById("root")
);
