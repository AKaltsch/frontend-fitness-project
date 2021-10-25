import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Link,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Workouts from "./components/Workouts";
import Progress from "./components/Progress";
import HikeMap from "./components/HikeMap";
import Signup from "./components/Signup";
import SigninHome from "./components/SigninHome";

function App() {
  const production = "https://we-fitness-backend.herokuapp.com/";
  const developement = "http://localhost:3000/";
  const url = process.env.NODE_ENV ? developement : production;

  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("token: " + token);
    // console.log(user.user.username)
    fetch(`${url}/api/v1/profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setLoggedIn(true);
          setUser(data.user);
        });
      } else {
        console.log("please log in");
      }
    });
  }, []);

  function onLogin(username, password) {
    fetch(`${url}/api/v1/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
        },
      }),
    }).then((response) => {
      console.log(response);
      if (response.ok) {
        response.json().then((data) => {
          console.log("hi" + data.jwt);
          setUser(data.user);
          setLoggedIn(true);
          localStorage.setItem("jwt", data.jwt);
          console.log("signed in!!!!!!!!!!!!!!!!!!");
        });
      } else {
        console.log("wrong username/password");
      }
    });
  }

  function logout() {
    localStorage.clear();
    setUser(null);
    setLoggedIn(false);
  }

  function signUp(username, password) {
    fetch(`${url}/api/v1/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user: {
          username: `${username}`,
          password: `${password}`,
        },
      }),
    })
    .then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setUser(data.user)
          setLoggedIn(true)
          localStorage.setItem("jwt", data.jwt);
        });
      } else {
        console.log("form incorrectly filled out")
      }
    })
  }

  return (
    //<img src={logo} className="App-logo" alt="logo" />
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route exact path="/">
    //         <SigninHome onLogin={onLogin}/>
    //       </Route>

    // <Route exact path="/home">
    //   <Home />
    // </Route>

    //       <Route exact path="/workouts">
    //         <Workouts />
    //       </Route>

    //       <Route exact path="/progress">
    //         <Progress />
    //       </Route>

    //       <Route exact path="hikeMap">
    //         <HikeMap />
    //       </Route>
    //     </Switch>
    //   </div>
    // </Router>

    <div className="App">
      {loggedIn ? (
        <Router>
          <nav className="navbar-container">
            {user ? <img src={user.avatar} alt="you" /> : ""}
            <NavLink className="links" to="/home">
              Home
            </NavLink>
            <NavLink className="links" to="/hikeMap">
              Hike Map 
            </NavLink>
            <NavLink className="links" to="/progress">
              Progress
            </NavLink>
            <button className="logout" onClick={logout}>
              Logout
            </button>
          </nav>
          <Route exact path="/">
            <Home currentUser={user} />
          </Route>
          <Route exact path="/workouts">
            <Workouts />
          </Route>
          <Route exact path="/progress">
            <Progress />
          </Route>
          <Route exact path="/hikeMap">
            <HikeMap />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Router>
      ) : (
        <div>
          <SigninHome onLogin={onLogin} signUp={signUp}/>
          {/* <NavLink className="signin-home-link" to="/signup">
            Signup
          </NavLink> */}
        </div>
      )}
    </div>
  );
}

export default App;
