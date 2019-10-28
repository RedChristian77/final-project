import React, { useContext } from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PrivateRoute from "../private-route/PrivateRoute";

import { AuthContext } from "../../auth/auth";

import dungeongen from "../dungeonGen/dungeongen";
import encountergen from "../encounters/encountergen";
import newnpc from "../npcs/newnpc";
import saveddungeon from "../dungeonGen/saveddungeon";
import savedencounters from "../encounters/encountersaved";
import savednpc from "../npcs/savednpcs"

export default function Dashboard() {
  const { user, logoutUser } = useContext(AuthContext);



  return (
    <>
      <div style={{ height: "100vh" }} className="container">
        <div className="row">
          <div className="col s2 center-align">

            <Link to={'/dashboard/dungeongenerator'}
              style={{
                width: "250px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              className="btn btn-large hoverable black accent-3"
            > Dungeon Generator </Link>


            <button
              style={{
                width: "250px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={e => {
                e.preventDefault();
                console.log("New Encounter")
              }}
              className="btn btn-large hoverable black accent-3"
            >
              New Encounter
              </button>

            <button
              style={{
                width: "250px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={e => {
                e.preventDefault();
                console.log("New Dungeon")
              }}
              className="btn btn-large hoverable black accent-3"
            >
              New NPC
              </button>

            <Link to={'/dashboard/myDungeons'}
              style={{
                width: "250px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              className="btn btn-large hoverable green black-text accent-3"
            > Dungeon Generator </Link>

            <button
              style={{
                width: "250px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={e => {
                e.preventDefault();
                console.log("New Dungeon")
              }}
              className="btn btn-large hoverable green accent-3 black-text"
            >
              Saved Encounters
              </button>

            <button
              style={{
                width: "250px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={e => {
                e.preventDefault();
                console.log("New Dungeon")
              }}
              className="btn btn-large hoverable green accent-3 black-text"
            >
              Saved NPCS
              </button>

            <button
              style={{
                width: "250px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem"
              }}
              onClick={e => {
                e.preventDefault();
                logoutUser();
              }}
              className="btn btn-large hoverable blue accent-3"
            >
              Logout
              </button>
          </div>

          {/* Start of User Section */}

          <div className="col s10 center-align">
            <PrivateRoute path={"/dashboard/dungeongenerator"} component={dungeongen} />
            <PrivateRoute path={"/dashboard/newencounter"} component={encountergen} />
            <PrivateRoute path={"/dashboard/newnpc"} component={newnpc} />
            <PrivateRoute path={"/dashboard/myDungeons"} component={saveddungeon} />
            <PrivateRoute path={"/dashboard/savedencounters"} component={savedencounters} />
            <PrivateRoute path={"/dashboard/savednpc"} component={savednpc} />
          </div>
        </div>
      </div>
    </>
  );
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
