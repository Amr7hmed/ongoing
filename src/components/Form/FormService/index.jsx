import React, { useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMobileScreen,
  faUserPen,
  faTextWidth,
} from "@fortawesome/free-solid-svg-icons";

const initialValues = {
  name: "",
  position: "",
  mobile: "",
  date: "",
};

function FormService() {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <section className="form__service">
      <div className="form__inputs">
        <div className="input-group">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faUser} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Name *"
            value={values.name}
            onChange={handleInputChange}
            name="name"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faMobileScreen} />
          </span>
          <input
            type="tel"
            className="form-control"
            placeholder="Mobile *"
            value={values.mobile}
            onChange={handleInputChange}
            name="mobile"
          />
        </div>
        <div className="input-group">
          <span className="input-group-text">
            <FontAwesomeIcon icon={faUserPen} />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Job Title *"
            value={values.position}
            onChange={handleInputChange}
            name="position"
          />
        </div>
      </div>

      <div className="form__textarea">
        <span className="textarea_icon">
          <FontAwesomeIcon icon={faTextWidth} />
        </span>
        <textarea
          className="form-control"
          placeholder="The Message"
          value={values.date}
          onChange={handleInputChange}
          name="date"
        ></textarea>
      </div>
    </section>
  );
}

export default FormService;
