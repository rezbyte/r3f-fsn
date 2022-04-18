import Dropdown from "./Dropdown";
import "../styles/Search.css";

export default function Search() {
  return (
    <div className="search">
      <p>Search</p>
      <div>
        <label>Name:</label>
        <input type="text" />
      </div>
      <div>
        <label>Size:</label>
        <Dropdown header=">" items={[">", "<", "="]} />
        <input type="text" />
      </div>
      <div>
        <label>Age:</label>
        <Dropdown header=">" items={[">", "<", "="]} />
        <input type="text" />
      </div>
      <div className="search-buttons">
        <button>OK</button>
        <button>Next</button>
        <button>Clear</button>
      </div>
    </div>
  );
}
