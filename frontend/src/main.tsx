import React from "react";
import { createRoot } from "react-dom/client";
import CameraControls from "./components/CameraControls";
import ColourGuide from "./components/ColourGuide";
import Marks from "./components/Marks";
import PathManager from "./components/PathManager";
import Search from "./components/Search";
import Toolbar from "./components/Toolbar";
import View from "./components/View";
import "./styles/Global.css";
import "./styles/Layout.css";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <Toolbar />
    <PathManager />
    <CameraControls />
    <hr />
    <Search />
    <hr />
    <Marks />
    <View />
    <ColourGuide />
  </React.StrictMode>
);
