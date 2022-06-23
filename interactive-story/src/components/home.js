import React from "react";

import "./home.css";

import { NavLink } from "react-router-dom";

import Donnees from "./Donnees.json";

import Header from "./headerSpectator";

const layoutCSS = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const Home = () => {
  return (
    <div className="base">
      <Header />
      <div className="liste" style={{ ...layoutCSS }}>
        <div className="valeur">
          {Donnees &&
            Donnees.map((donnee) => (
              <NavLink
                to="/artist/delacoux"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="rectangle">
                  <tr key={donnee.id}>
                    <div className="artiste">
                      <div className="image"></div>
                      <td>{donnee.nom}</td>
                    </div>
                    <div className="contenu">
                      <td>{donnee.description}</td>
                    </div>
                  </tr>
                </div>
              </NavLink>
            ))}
          <NavLink to="/formulaire">
            <button className="button" variant="outlined">
              Demande
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
