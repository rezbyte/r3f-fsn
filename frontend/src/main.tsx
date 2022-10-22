import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/Global.css";
import "./styles/Layout.css";
import App from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
