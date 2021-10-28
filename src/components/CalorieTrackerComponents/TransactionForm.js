import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/CalorieState";

function TransactionForm() {
  const [text, setText] = useState("");
  const [calories, setCalories] = useState(0);

  const {addEntry} = useContext(GlobalContext);

  function handleSubmit(e) {
    console.log("clicked-------------------------")
    e.preventDefault();

    const newEntry = {
      id: Math.floor(Math.random() * 100000000),
      text,
      calories: +calories,
    }

    console.log()
    return addEntry(newEntry);
  }

  return (
    <div>
      <h3>Add New Entry</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label>Text</label>
          <br/>
          <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Calories <br />
            (negative - consumed, positive - exercise)
          </label>
          <input type="number" placeholder="Enter amount..." value={calories} onChange={(e) => setCalories(e.target.value)}/>
        </div>
        <button className="btn" type="submit">Add transaction</button>
      </form>
    </div>
  );
}

export default TransactionForm;
