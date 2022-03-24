import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faFileWord,
  faXmark,
  faFilePdf,
  faFileImage,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function FormUpload() {
  return (
    <Fragment>
      <div className="form__file__upload">
        <div className="upload">
          <h4>Upload Files</h4>
          <div className="upload__file">
            <div className="file-upload">
              <label htmlFor="file-input">
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
              </label>
              <input id="file-input" type="file" />
              <span>Upload File</span>
            </div>

            <div className="file__list">
              <div className="item">
                <span>
                  <FontAwesomeIcon icon={faFileWord} />
                </span>
                <span>Word File</span>
                <button>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="item">
                <span>
                  <FontAwesomeIcon icon={faFilePdf} />
                </span>
                <span>PDF File</span>
                <button>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="item">
                <span>
                  <FontAwesomeIcon icon={faFileImage} />
                </span>
                <span>Image File</span>
                <button>
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="service__item">
            <p>
              service price : <span>260 Egp</span> 200 Egp
              <br />
              Estimated service time is : <span>( 20 days )</span>
            </p>
          </div>
          <div className="addcart">
            <span>
              <FontAwesomeIcon icon={faCartShopping} />
            </span>
            Add To Cart
          </div>
        </div>
      </div>
      <div className="clearfix"></div>
    </Fragment>
  );
}

export default FormUpload;
