import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

function Signup() {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const url = "http://localhost:3000"

    const history = useHistory();
    // console.log("history", history)

    function handleSignupSubmit(e) {
        e.preventDefault()
        fetch(`${url}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({user: {
                username: `${username}`,
                password: `${password}`,
            }}),
        })
            .then((r) => r.json())
            .then((data) => {
                history.push("/home");
            }
            );
    }

    return (
        <div>
            <form onSubmit={handleSignupSubmit}>
                Username:
                <input
                    className="login-inputs"
                    type="text"
                    id="username"
                    placeholder=" Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                Password:
                <input
                    className="login-inputs"
                    type="password"
                    id="password"
                    placeholder=" Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Signup</button>
            </form>

        </div>
    )
}

export default Signup