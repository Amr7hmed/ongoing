import React from "react";
import Logo from "../../../images/logo/white_logo.png";
import PaymentLogo from "../../../images/footer/payment_logo.png";

function FooterLeft() {
  return (
    <div className="footer__left">
      <img src={Logo} alt="White Logo" className="white_logo"/>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="payment_logo">
          <img src={PaymentLogo} alt="Payment Logo" />
      </div>
    </div>
  );
}

export default FooterLeft;
