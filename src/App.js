import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Workouts from './components/Workouts';
import Progress from './components/Progress';
import HikeMap from './components/HikeMap';
import Signup from './components/Signup';
import SigninHome from './components/SigninHome'

function App() {

  const production = "https://we-fitness-backend.herokuapp.com/"
  const developement = "http://localhost:3000/"
  const url = (process.env.NODE_ENV ? developement : production)

  const [loggedIn, setLoggedIn] = useState(false)
  const [user, setUser] = useState()

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    console.log("token: " + token)
    // console.log(user.user.username)
    fetch(`${url}/api/v1/profile`, {
      method: "GET",
      headers: {
      Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          setLoggedIn(true)
          setUser(data.user)
        });
      } else {
        console.log("please log in")
      }
    });
    });

  return (
    
        //<img src={logo} className="App-logo" alt="logo" />
      <Router>
        <div className="App">
          <Switch>

            <Route exact path="/">
              <SigninHome />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/workouts">
              <Workouts />
            </Route>

            <Route exact path="/progress">
              <Progress />
            </Route>

            <Route exact path="hikeMap">
              <HikeMap />
            </Route>

          </Switch>
        </div>
      </Router>
       
  );
}

export default App;
