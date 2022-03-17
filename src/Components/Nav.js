import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import reportWebVitals from '../reportWebVitals';
import { BrowserRouter, Router, Switch, Route, Link, useHistory, useLocation } from "react-router-dom";
import '../index.css';

function Nav() {
  const history = useHistory();
  const location = useLocation();

  const logout=()=> {
    localStorage.removeItem("isLoggedin")
    history.push("/")
  }

  return (<div>
    <nav>
      <ul>
        <li>
          <Link className={location.pathname === "/std" ? 'active' : ""} to="/std">Student</Link>
        </li>
        <li>
          <Link className={location.pathname === "/user" ? 'active' : ""} to="/user">User</Link>
        </li>
        <li>
          <Link className={location.pathname === "/emp" ? 'active' : ""} to="/emp">Employee</Link>
        </li>
        <li>
          <button className='logoutBtn' onClick={logout}>Logout</button>
        </li>
      </ul>
    </nav>
  </div>)
}

export default Nav