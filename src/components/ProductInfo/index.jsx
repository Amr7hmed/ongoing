import React, { Component } from "react";
import "./style.scss";

export class ProductInfo extends Component {
  render() {
    return (
      <section>
        <div className="container-lg">
          <div className="product">
            <div className="row">
              <div className="col-lg-12 col-xl-6">
                <div className="product__registration">
                  <h3>Product Registration</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud
                  </p>
                  <p>
                    service price : <span>260 Egp</span> 200 Egp
                    <br />
                    Estimated service time is : <span>( 20 days )</span>
                  </p>
                </div>
              </div>
              <div className="col-lg-12 col-xl-6">
                <div className="product__info">
                  <p>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua.
                  </p>
                  <p>
                    At vero eos et accusam et justo duo dolores et ea rebum.
                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProductInfo;
