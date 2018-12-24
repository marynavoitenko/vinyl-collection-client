import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="NavBar">
      <NavLink
        className="NavLink"
        to="/"
        exact
      >
        Home
      </NavLink>
      <NavLink
        className="NavLink"
        to="/vinyls"
        exact
      >
        Vinyls
      </NavLink>
      <NavLink
        className="NavLink"
        to="/artists"
        exact
      >
        Artists
      </NavLink>
    </div>
  );
}

export default NavBar;
