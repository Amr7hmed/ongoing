/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.scss";
import {NavLink} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import Logo from "../../../images/logo/blue_logo.png";

function BottomNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bottom__navbar">
      <div className="container-lg">
        <NavLink className="navbar-brand" to="/">
          <img src={Logo} alt="" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Management Board
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="account">
            <span className="account__icon">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            <span className="account__login">
              <span>Account</span>
                <NavLink to="/" className="active">Registration </NavLink> / <NavLink to="/"> Login</NavLink>
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default BottomNavbar;
