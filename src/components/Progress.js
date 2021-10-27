import { useState, useEffect } from "react";
import Graph from "./Graph";
import MileForm from "./Forms/MileForm"
import SquatForm from "./Forms/SquatForm"
import BenchForm from "./Forms/BenchForm"
import DistanceForm from "./Forms/DistanceForm"

const production = "https://we-fitness-backend.herokuapp.com/";
const developement = "http://localhost:3000/";
const url = process.env.NODE_ENV ? developement : production;

function Progress({ user }) {
  const [times, setTimes] = useState([]);
  const [distances, setDistances] = useState([]);
  const [squatWeight, setSquatWeight] = useState([]);
  const [benchWeight, setBenchWeight] = useState([]);

  useEffect(() => {
    fetch(`${url}api/v1/distances`)
      .then((res) => res.json())
      .then((data) => setDistances(data));
  }, []);

  useEffect(() => {
    fetch(`${url}api/v1/miles`)
      .then((res) => res.json())
      .then((data) => setTimes(data));
  }, []);

  useEffect(() => {
    fetch(`${url}api/v1/squats`)
      .then((res) => res.json())
      .then((data) => setSquatWeight(data));
  }, []);

  useEffect(() => {
    fetch(`${url}api/v1/benchpresses`)
      .then((res) => res.json())
      .then((data) => setBenchWeight(data));
  }, []);

  const mileTimes = times
    .filter((dat) => dat.user_id === user.id)
    .map((dat) => dat.time);

  const distanceData = distances
    .filter((dat) => dat.user_id === user.id)
    .map((dat) => dat.distance);

  const squatData = squatWeight
    .filter((dat) => dat.user_id === user.id)
    .map((dat) => dat.weight);

  const benchData = benchWeight
    .filter((dat) => dat.user_id === user.id)
    .map((dat) => dat.weight);

  const mileLabel = "Mile Times";
  const distanceLabel = "Distance Ran";
  const squatLabel = "Squats";
  const benchLabel = "BenchPress";

  return (
    <div className="graph">
      <Graph array={mileTimes} label={mileLabel} />
      <MileForm times={times} setTimes={setTimes} user={user}/>
      <Graph array={distanceData} label={distanceLabel} />
      <DistanceForm distances={distances} setDistances={setDistances} user={user}/>
      <Graph array={squatData} label={squatLabel} />
      <SquatForm squatWeight={squatWeight} setSquatWeight={setSquatWeight} user={user}/>
      <Graph array={benchData} label={benchLabel} />
      <BenchForm benchWeight={benchWeight} setBenchWeight={setBenchWeight} user={user}/>
    </div>
  );
}

export default Progress;
