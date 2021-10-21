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


  // backend_deploy_url: https://we-fitness-backend.herokuapp.com/

  const url = "http://localhost:3000/"

  useEffect(() => {
    fetch(`${url}exercises`)
    .then((res) => res.json())
    .then(data => console.log(data))
  }, [])

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
