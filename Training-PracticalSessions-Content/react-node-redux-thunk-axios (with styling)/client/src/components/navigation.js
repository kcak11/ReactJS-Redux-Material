/**
 * Import our dependencies
 */
import { Link } from 'react-router';
import React, { Component } from "react";

/**
 * This is our navigation component
 */
export default class Navigation extends Component {

  /**
   * Component render method, required and displays the navigation menu
   * @returns { ReactElement }
   */
  render() {
    return (
      <div className="frame bit-1 navigation_container">
        <h3 className="bit-40">
        <Link to="/">React - Redux - Thunk - Axios by Murthy</Link>
        </h3>
        <ul className="bit-60 nav_menu">
          <li key={100}><Link to="dashboard">Dashboard</Link></li>
          <li key={101}><Link to="login">Login</Link></li>
        </ul>
      </div>
    );
  }
}
