import { HTMLAttributes, useState } from "react";
import "../styles/Dropdown.css";

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  header: string;
  items: string[];
  reverse?: boolean;
}

export default function Dropdown(props: DropdownProps) {
  const [show, setShow] = useState(false);
  const itemList = props.items.map((item) => {
    return <p key={item}>{item}</p>;
  });
  return (
    <div
      className={`dropdown ${props.className ?? ""}`}
      onClick={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      <button className={`dropdown-header ${show ? "show" : ""}`}>
        {props.header}
      </button>
      <div
        className={`dropdown-content ${show ? "show" : ""} ${
          props.reverse ? "dropdown-right" : ""
        }`}
      >
        {itemList}
      </div>
    </div>
  );
}
