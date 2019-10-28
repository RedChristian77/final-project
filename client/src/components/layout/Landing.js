import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        <div className="col s12 center-align">
          <h4>
            A Area for all your Dungeon Master Needs
          </h4>
          <p className="flow-text grey-text text-darken-1">
            Where it's not hard to set up a group for your party of Murder Hobos
          </p>
          <p>

          </p>
          <br />
          <div className="col s12">
            <Link
              to="/register"
              style={{
                width: "300px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                margins: "3px"
              }}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3 mb-3"
            >
              Create New Account?
            </Link>
          </div>
          <div className="col s12">
            <Link
              to="/login"
              style={{
                width: "140px",
                borderRadius: "3px",
                letterSpacing: "1.5px"
              }}
              className="btn btn-large waves-effect green hoverable black-text"
            >
              Log In
            </Link>
            <p>
              Or Already have an account?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
