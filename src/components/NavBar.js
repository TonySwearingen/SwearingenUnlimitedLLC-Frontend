import React from 'react';
import Login from './Login';
import Logout from './Logout';
// import { NavLink } from './react-router-dom';

function NavBar({ isAuthenticated }) {



  return (
    <div>
      <li className="nav-bar">
        {isAuthenticated ?
        <div className="logout">
          <Logout />
        </div>
        :
        <div className="login">
          <Login />
        </div>
      }
      </li>
    </div>
  )
}

export default NavBar;
