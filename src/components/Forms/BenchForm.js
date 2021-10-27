import React, {useState} from "react";

const production = "https://we-fitness-backend.herokuapp.com/";
const developement = "http://localhost:3000/";
const url = process.env.NODE_ENV ? developement : production;

function BenchForm({benchWeight, setBenchWeight, user}) {
  const [bench, setBench] = useState("");

  function handleSubmit(e) {
    console.log(bench)
    fetch(`${url}api/v1/benchpresses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        weight: bench,
        user_id: user.id,
      }),
     }).then((r) => setBenchWeight([...benchWeight, r])
    );
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        
          <label>Enter Bench Max</label>
          <input
            type="text"
            id="bench"
            value={bench}
            onChange={(e) => setBench(e.target.value)}
          />
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BenchForm;
