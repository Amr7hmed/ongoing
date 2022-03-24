import React, { Component } from "react";
import "./style.scss";
import FormFiles from "./FormFiles/index.jsx";
import FormService from "./FormService/index.jsx";

export class Form extends Component {
  render() {
    return (
      <section className="form">
        <div className="container-lg">
          <div className="form__info">
            <h3>Service request</h3>
            <p>Please Fill In The Information And Attach The Required Files</p>
          </div>
          <FormService />
          <FormFiles />
        </div>
      </section>
    );
  }
}

export default Form;
