/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import FooterLeft from "./FooterLeft/index.jsx";
import FooterMiddle from "./FooterMiddle/index.jsx";
import FooterRight from "./FooterRight/index.jsx";
import "./style.scss";

export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-12 col-xl-4">
              <FooterLeft />
            </div>
            <div className="col-lg-12 col-xl-4">
              <FooterMiddle />
            </div>
            <div className="col-lg-12 col-xl-4">
              <FooterRight />
            </div>
          </div>


          <div className="footer__copyright">
            <p>
            Copyright  2022 | <span>INGENIOUS</span> | All Rights Reserved
            <br/>
            Powered by <a href="#">EvoTech</a>
            </p>

          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;
