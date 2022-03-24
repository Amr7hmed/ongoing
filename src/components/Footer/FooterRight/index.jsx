/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

function FooterRight() {
  return (
    <section className="footer__right">
      <h4>
        Main <span>Menu</span>
      </h4>
      <div className="list">
        <ul>
          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faAnglesRight} />
              </span>
              <span className="text">Home</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faAnglesRight} />
              </span>
              <span className="text">About Us</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faAnglesRight} />
              </span>
              <span className="text">Services</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faAnglesRight} />
              </span>
              <span className="text">Board of Directors</span>
            </a>
          </li>

          <li>
            <a href="#">
              <span className="icon">
                <FontAwesomeIcon icon={faAnglesRight} />
              </span>
              <span className="text">Contact Us</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default FooterRight;
