import React, { useState } from "react";

const initialChecks = {
  filerequest: "",
};

function FormRequest() {
  const [values, setValues] = useState(initialChecks);

  const handleInputCheck = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <section className="form__file__request">
      <h4>File Request</h4>
      <ul onChange={handleInputCheck}>
        <li>
          <input
            className="form-check-input"
            type="radio"
            id="filerequest1"
            value={values.name}
            name="filerequest"
          />
          <label className="form-check-label" htmlFor="filerequest1">
            <span>File name</span> - Description of the required file
          </label>
        </li>
        <li>
          <input
            className="form-check-input"
            type="radio"
            id="filerequest2"
            value={values.name}
            name="filerequest"
          />
          <label className="form-check-label" htmlFor="filerequest2">
            <span>File name</span> - Description of the required file
          </label>
        </li>
        <li>
          <input
            className="form-check-input"
            type="radio"
            id="filerequest3"
            value={values.name}
            name="filerequest"
          />
          <label className="form-check-label" htmlFor="filerequest3">
            <span>File name</span> - Description of the required file
          </label>
        </li>
        <li>
          <input
            className="form-check-input"
            type="radio"
            id="filerequest4"
            value={values.name}
            name="filerequest"
          />
          <label className="form-check-label" htmlFor="filerequest4">
            <span>File name</span> - Description of the required file
          </label>
        </li>
      </ul>
    </section>
  );
}

export default FormRequest;
