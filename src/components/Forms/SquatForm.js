import React, {useState} from "react";

const production = "https://we-fitness-backend.herokuapp.com/";
const developement = "http://localhost:3000/";
const url = process.env.NODE_ENV ? developement : production;

function SquatForm({squatWeight, setSquatWeight, user}) {
  const [squat, setSquat] = useState("");

  function handleSubmit(e) {
    console.log(squat)
    fetch(`${url}api/v1/squats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weight: squat,
        user_id: user.id,
      }),
     }).then((r) => setSquatWeight([...squatWeight, r])
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
          <label>Enter Squat Max</label>
          <input
            type="text"
            id="squat"
            value={squat}
            onChange={(e) => setSquat(e.target.value)}
          />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SquatForm;
