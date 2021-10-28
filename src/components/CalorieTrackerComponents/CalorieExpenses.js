import React, { useContext } from "react";
import { GlobalContext } from "../context/CalorieState";

function CalorieExpenses() {
  const { entries } = useContext(GlobalContext);
  const amounts = entries.map((entry) => entry.calories);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Allowed</h4>
        <p className="money plus">2200kcal</p>
      </div>
      <div>
        <h4>Consumed</h4>
        <p className="money minus">{expense}kcal</p>
      </div>
    </div>
  );
}

export default CalorieExpenses;
