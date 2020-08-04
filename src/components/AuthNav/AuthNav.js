import React from 'react';
import { NavLink } from 'react-router-dom';
import './AuthNav.scss';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className="AuthNav__link"
      activeClassName="AutNav__active"
    >
      Sign Up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className="AuthNav__link"
      activeClassName="AutNav__active"
    >
      Sign In
    </NavLink>
  </div>
);

export default AuthNav;
