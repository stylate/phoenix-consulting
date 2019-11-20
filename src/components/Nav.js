import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import logo from '../assets/phoenixlogo.png';
import '../layout/Nav.css';
import '../layout/_global.css';

// pages
import Home from '../routes/Home';
import About from '../routes/About';
import Join from '../routes/Join';

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <Home/>
  },
  {
    path: "/about",
    sidebar: () => <div className="Content"><About/></div>
  },
  {
    path: "/services",
    sidebar: () => <div>services</div>
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
    sidebar: () => <div className="Content"><Join/></div>
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
                        <a href="https://medium.com/@phoenixconsulting">articles</a>
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
