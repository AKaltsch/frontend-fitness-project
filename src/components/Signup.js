import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Signup({signUp}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmation, setConfirmation] = useState("")

    function handleSignUp(e){
        e.preventDefault();
        signUp(username, password)
    }
    

    // const production = "https://we-fitness-backend.herokuapp.com/"
    // const developement = "http://localhost:3000"
    // const url = (process.env.NODE_ENV ? developement : production



    return (
        <div>
            <form onSubmit={handleSignUp}>
                Username:
                <input
                    className="login-inputs"
                    type="text"
                    id="username"
                    placeholder=" Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <br/>
                Password:
                <input
                    className="login-inputs"
                    type="password"
                    id="password"
                    placeholder=" Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                Confirm Password
                <input
                    className="login-inputs"
                    type="password"
                    id="password"
                    placeholder="Confirm Password"
                    value={confirmation}
                    onChange={(e) => setConfirmation(e.target.value)}
                />
                <br/>
                <button type="submit">Signup</button>
            </form>

        </div>
    )
}

export default Signup