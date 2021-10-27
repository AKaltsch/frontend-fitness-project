import React, { useState } from "react";

const production = "https://we-fitness-backend.herokuapp.com/";
const developement = "http://localhost:3000/";
const url = process.env.NODE_ENV ? developement : production;

function MileForm({ times, setTimes, user }) {

  const [time, setTime] = useState("");

  function handleSubmit(e) {

    fetch(`${url}api/v1/miles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        time: time,
        user_id: user.id,
      }),
     }).then((r) => setTimes([...times, r])
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
          <label>Enter Mile time</label>
          <input
            type="text"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default MileForm;
