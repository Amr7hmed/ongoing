import React, { Component } from "react";
import "./style.scss";
import FormRequest from "./FormRequest";
import FormUpload from "./FormUpload";

export class FormFiles extends Component {
  render() {
    return (
      <section className="form__file">
        <div className="row">
          <div className="col-md-12 col-lg-6">
            <FormRequest />
          </div>
          <div className="col-md-12 col-lg-6">
            <FormUpload />
          </div>
        </div>
      </section>
    );
  }
}

export default FormFiles;
