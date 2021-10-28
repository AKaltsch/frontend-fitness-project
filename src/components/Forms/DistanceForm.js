import React, {useState} from "react";

const production = "https://we-fitness-backend.herokuapp.com/";
const developement = "http://localhost:3000/";
const url = process.env.NODE_ENV ? developement : production;

function DistanceForm({distances, setDistances, user}) {
  const [distance, setDistance] = useState("");

  function handleSubmit(e) {
    console.log(distance)
    fetch(`${url}api/v1/distances`, { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        distance: distance,
        user_id: user.id,
      }),
     }).then((r) => setDistances([...distances, r])
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
          <label>Enter Distance:</label>
          <input
            type="text"
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
          />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DistanceForm;
