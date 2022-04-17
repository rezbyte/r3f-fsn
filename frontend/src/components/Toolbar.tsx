import Dropdown from "./Dropdown";
import "../styles/Toolbar.css";

export default function Toolbar() {
  return (
    <div className="toolbar">
      <Dropdown header="Session" items={["a", "b"]} />
      <Dropdown header="Show" items={["c", "d"]} />
      <Dropdown header="Display" items={["e", "f"]} />
      <Dropdown header="Directory" items={["g", "h"]} />
      <Dropdown header="File" items={["i", "j"]} />
      <Dropdown className="end" header="Help" items={["k", "l"]} />
    </div>
  );
}
