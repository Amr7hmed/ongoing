import React from "react";
import "./style.scss";
import Imgcover from "../../images/header/image.png";

function Banner() {
  return (
    <main className="main__cover">
      <img src={Imgcover} alt="Main Cover Img" />
    </main>
  );
}

export default Banner;
