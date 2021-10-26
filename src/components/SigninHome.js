import React from "react";
import { useState } from "react";
import Signup from "./Signup";
import "./login.css";

function SigninHome({ onLogin, signUp }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e) {
    e.preventDefault();
    onLogin(username, password);
  }

  return (
    <div>
      <h1>Welcome to WeFit!</h1>
      <div className="div-login">
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
        <Signup signUp={signUp} />
        {/* <Link className="signin-home-link" to="/signup">
        Signup
      </Link> */}
      </div>
    </div>
  );
}

export default SigninHome;
