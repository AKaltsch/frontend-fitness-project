import React from "react";
import { useState } from "react";
import { Router, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Signup from "./Signup";


function SigninHome({onLogin, signUp}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e){
      e.preventDefault();
      onLogin(username, password)
  }
 

//   const url = "https://localhost:3000";

//   const history = useHistory()

//   function onLogin(username, password) {
//     fetch(`${url}/api/v1/login`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//       body: JSON.stringify({
//         user: {
//           username: `${username}`,
//           password: `${password}`,
//         },
//       }),
//     }).then((response) => {
//       console.log(response);
//       if (response.ok) {
//         response.json().then((data) => {
//           console.log("hi" + data.jwt);
//           setUser(data.user);
//           setLoggedIn(true);
//           localStorage.setItem("jwt", data.jwt);
//           history.push('/home')
//           console.log("signed in!!!!!!!!!!!!!!!!!!");
//         });
//       } else {
//         console.log("wrong username/password");
//       }
//     });
//   }

  return (
    <div>
      <h1>Welcome to WeFit!</h1>
      <form onSubmit={handleLogin} className="SignIn">
        Username:
        <input
          className="login-inputs"
          type="text"
          id="username"
          placeholder=" Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        Password:
        <input
          className="login-inputs"
          type="password"
          id="password"
          placeholder=" Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <br />
      Not a Member Yet?
      <Signup signUp={signUp}/>
      {/* <Link className="signin-home-link" to="/signup">
        Signup
      </Link> */}
    </div>
  );
}

export default SigninHome;
