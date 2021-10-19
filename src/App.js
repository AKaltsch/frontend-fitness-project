import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Workouts from './components/Workouts';
import Progress from './components/Progress';
import HikeMap from './components/HikeMap';

function App() {

  const url = "http://localhost:3000/"

  return (
    
        //<img src={logo} className="App-logo" alt="logo" />
      <Router>
        <div className="App">
          <Switch>

            <Route exact path="/login">
              <Login />
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
