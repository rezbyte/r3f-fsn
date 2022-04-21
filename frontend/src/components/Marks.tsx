import PathList from "./PathList";
import "../styles/Marks.css";
export default function Marks() {
  return (
    <div className="marks">
      <p className="marks-header">Marks</p>
      <PathList />
      <div className="marks-buttons">
        <button className="goto-button">go to</button>
        <button>delete</button>
      </div>
      <button>mark</button>
    </div>
  );
}
