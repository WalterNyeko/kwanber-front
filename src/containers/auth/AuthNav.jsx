import React from "react";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <nav className="nav-items-department navbar navbar-expand-md fixed-top navbar-dark bg-dark nav-margin">
      <NavLink to="/" className="h1">
        KWANBER
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample05"
        aria-controls="navbarsExample05"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarsExample05">
        <ul
          className="nav nav-pills mb-3 navbar-nav m-auto nav-link-item"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item nav-items-department">
            <a
              className="nav-link nav-items-department"
              id={`pills-test-tab`}
              data-toggle="pill"
              href="/"
              role="tab"
              aria-controls={`pills-test`}
              aria-selected="true"
            >
              Test
            </a>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;
        </ul>
      </div>
    </nav>
  );
}
