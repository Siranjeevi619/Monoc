import React from "react";
import ReactLogo from "../assets/images/logo192.png";
import "../assets/styles/Admin.css";
function Navbar() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand mx-auto" href="/">
            <img
              src={ReactLogo}
              alt="Logo"
              width="40"
              height="34"
              className="d-inline-block align-text-top"
            />
            <span className="ms-2">Monoco</span>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
