/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faVimeoV,
  faFacebookF,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function FooterMiddle() {
  return (
    <section className="footer__middle">
      <h4>
        News <span>Letter</span>
      </h4>
      <p>
        Subscribe to our <span>Newsletter</span> and get exclusive deals you
        wont find anywhere else straight to your inbox ! ..
      </p>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Email Address"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <span className="input-group-text" id="basic-addon2">
          SUBSCRIBE
        </span>
      </div>

      <div className="social_media">
        <a href="#">
          <FontAwesomeIcon icon={faBehance} />
        </a>
        <a>
          <FontAwesomeIcon icon={faVimeoV} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className="youtube">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </section>
  );
}

export default FooterMiddle;
