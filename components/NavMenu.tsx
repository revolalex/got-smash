import React from "react";

const NavMenu: React.FC<Props> = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-perso">
        <div className="container-fluid">
          <a className="navbar-brand color-white" href="#">
            🎾 TennisMatch
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link color-white" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-white" href="#">
                  Match
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link color-white" href="#">
                  Agenda
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style jsx>{``}</style>
    </>
  );
};

export default NavMenu;
