import React from "react";

function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-${props.theme} navbar-expand-sm bg-body-tertiary`}
      data-bs-theme={`${props.theme}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          TextPoint
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about">
                About TextPoint
              </a>
            </li>
          </ul>
        </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleTheme}
            />
            <label className={`form-check-label text-${props.theme==='dark'?'light':'dark'}`} htmlFor="flexSwitchCheckDefault">
              {props.theme==='dark'?"Enable Light Mode":"Enable Dark Mode"}
            </label>
          </div>
      </div>
    </nav>
  );
}

export default Navbar;
