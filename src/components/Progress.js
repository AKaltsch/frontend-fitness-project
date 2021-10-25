import {useState, useEffect} from "react"



const production = "https://we-fitness-backend.herokuapp.com/";
const developement = "http://localhost:3000/";
const url = process.env.NODE_ENV ? developement : production;



function Progress({user}) {
    const[mileData, setMileData] = useState([])
    const[times, setTimes] = useState([])

    useEffect(() => {
        fetch(`${url}api/v1/miles`)
        .then((res) => res.json())
        .then((data) => console.log(
            data.filter(dat => dat.user_id === user.id).map(dat => dat.time)
        ))
    }, [])

    return(
        <h1>Progress</h1>
    )
}

export default Progress