import React, { useContext } from "react";
import { GlobalContext } from "../context/CalorieState";

function DataEntry({ entry }) {
  const {deleteEntry} = useContext(GlobalContext);

  const sign = entry.calories < 0 ? "-" : "+";

  return (
    <li className={entry.calories < 0 ? "minus" : "plus"}>
      {entry.text} <span>{sign}{Math.abs(entry.calories)}kcal</span>
      <button onClick={() => deleteEntry(entry.id)} className="delete-btn">x</button>
    </li>
  );
}

export default DataEntry;
