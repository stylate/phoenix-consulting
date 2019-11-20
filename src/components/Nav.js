import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from '../assets/phoenixlogo.png';
import '../layout/Nav.css';

// pages
import Home from '../routes/Home';
import Services from '../routes/Services';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Home />
  },
  {
    path: "/about",
    sidebar: () => <div>about</div>
  },
  {
    path: "/services",
    sidebar: () => <Services />
  },
  {
    path: "/team",
    sidebar: () => <div>team</div>
  },
  {
    path: "/articles",
    sidebar: () => <div>articles</div>
  },
  {
    pathj: "/join",
    sidebar: () => <div>join</div>
  }
];

function Nav() {
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
                        <Link to="/about">about</Link>
                    </li>
                    <li>
                        <Link to="/services">services</Link>
                    </li>
                    <li>
                        <Link to="/team">team</Link>
                    </li>
                    <li>
                        <Link to="/articles">articles</Link>
                    </li>
                    <li>
                        <Link to="/join">join</Link>
                    </li>
                    </ul>
                </nav>
                </div>
            </div>
            <Switch>
                {routes.map((route, index) => (
                    <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.sidebar />}
                />
                ))}
            </Switch>
        </Router>
    );
}

export default Nav;
