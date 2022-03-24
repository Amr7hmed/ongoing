/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

function UpperNavbar() {
  return (
    <nav className="upper__navbar">
      <div className="container-lg">
        <div className="inner">
          <div className="upper__navbar__left">
            <ul>
              <li>
                <span>
                  <FontAwesomeIcon icon={faPhone} />{" "}
                </span>
                <span>Call Us : +2 - 0114 - 32 777 - 15</span>
              </li>
              <li>
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />{" "}
                </span>
                <span>Mail : info@ingenious.com</span>
              </li>
            </ul>
          </div>
          <div className="upper__navbar__right">
            <ul>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faGooglePlusG} />
                </a>
              </li>

              <li className="language">
                <a href="#">AR</a>
              </li>

            </ul>

            <button className="btn">
              <span>
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              Shopping Cart (0)
            </button>
            
          </div>
        </div>
      </div>
    </nav>
  );
}

export default UpperNavbar;
