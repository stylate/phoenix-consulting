import React from 'react';
import './App.css';
import Home from './Home.js';
import Services from './Services.js';
import logo from './phoenixlogo.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Nav">
        <div className="Nav-contents">
          <Link to="/">
            <img src={logo} className="Nav-logo" alt="phoenix logo" />
          </Link>
          <nav>
            <ul>
              <li>
                <Link to="">about</Link>
              </li>
              <li>
                <Link to="/services">services</Link>
              </li>
              <li>
                <Link to="">team</Link>
              </li>
              <li>
                <Link to="">articles</Link>
              </li>
              <li>
                <Link to="">join</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
