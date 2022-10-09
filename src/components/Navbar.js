/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav m-auto mt-3 centered">
        <li className="nav-item link">
          <a className="nav-link" aria-current="page" href="#intro">About Me</a>
        </li>
        <li className="nav-item link">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item link">
          <a className="nav-link " href="#social">Social</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default Navbar;
