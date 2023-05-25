import React from "react";

export default function DarkModeBtn(props) {
  return (
    <div className="container-fluid fixed-bottom">
      <div className="row mb-3">
        <div className="col-xxl-6"></div>
        <div className="col-xxl-5"></div>
        <div className="col-xxl-1">
          <div
            className="form-check form-switch fs-3"
            // style={{ maxWidth: "150px", height: "30px" }}
          >
            
            <input
              className="form-check-input text-bg-info"
              type="checkbox"
              role="switch"
              onClick={props.functionName}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
