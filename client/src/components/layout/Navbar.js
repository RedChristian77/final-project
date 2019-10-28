import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-3">
        <div className="nav-wrapper grey">
          <Link
            to="/"
            style={{
              fontFamily: "monospace"
            }}
            className="col s5 brand-logo center black-text"
          >
           <b>Dungeon Masters Toolbelt</b>
          </Link>
        </div>
      </nav>
    </div>
  );
}
