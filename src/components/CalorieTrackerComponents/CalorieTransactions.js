import React, { useContext } from "react";
import { GlobalContext } from "../context/CalorieState";
import DataEntry from './DataEntry'

function CalorieTransactions() {
  const { entries } = useContext(GlobalContext);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {entries.map((entry) => (
          <DataEntry key={entry.id} entry={entry} />
        ))}
      </ul>
    </div>
  );
}

export default CalorieTransactions;
