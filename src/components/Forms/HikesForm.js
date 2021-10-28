import React, { useState} from 'react'

const production = "https://we-fitness-backend.herokuapp.com/";
const developement = "http://localhost:3000/";
const url = process.env.NODE_ENV ? developement : production;

function HikesForm({hikes, setHikes, marker, setMarker, user}) {

    const[title, setTitle] = useState("")
    const[distance, setDistance] = useState("")
    const[imageUrl, setImageUrl] = useState("")
    const[description, setDescription] = useState("")
    const[errors, setErrors] = useState("")

    function handleSubmit(e){
        console.log(title)
        fetch(`${url}api/v1/hikes`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                image_url: imageUrl,
                description: description,
                distance: distance,
                lat: marker.lat, 
                lng: marker.lng,
                date_created: marker.date_created,
                user_id: user.id,
            }),
        }).then((r) => { 
                setHikes([...hikes, r])
                setMarker()
        })
    }

    return (
        <div>
            <h1>Submit new hike:</h1>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Image URL:</label>
                
                <input
                    type="url"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
                <label>Description:</label>
                
                <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>Distance:</label>
                
                <input
                    type="text"
                    id="distance"
                    value={distance}
                    onChange={(e) => setDistance(e.target.value)}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default HikesForm
