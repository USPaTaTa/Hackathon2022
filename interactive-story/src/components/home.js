import React from "react";

import "./home.css";

import { NavLink } from "react-router-dom";

import Donnees from "./Donnees.json";

import partiste from "../img/artiste.webp";

import photo from "../img/artiste.webp";
import photo2 from "../img/mascagne.jpg";
import photo3 from "../img/marion.jpg";

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
              <NavLink
                to="/artiste"
                style={{ textDecoration: "none", color: "black" }}>
                <div className="rectangle">
                  <tr>
                    <div className="artiste">
                      <div className="image">                  
                        <img src={photo} alt="partiste" width="115" height="115" />
                      </div>
                      <div className="nom1">
                        <td>Christian Delacoux</td>
                      </div>
                    </div>
                    <div className="contenu">
                      <td>Au pied des Pyrénées, entre Pau et Lourdes, Christian Delacoux sculpte  son univers depuis plus de vingt ans.
Il vous présente ici un aperçu de ses œuvres passées ainsi que toutes ses sculptures disponibles à la vente et rassemblées dans sa salle d'exposition personnelle à Montaut (64800).</td>
                    </div>
                  </tr>
                </div>
                <div className="rectangle">
                  <tr>
                    <div className="artiste">
                      <div className="image">                  
                        <img src={photo2} alt="partiste" width="115" height="115" />
                      </div>
                      <div className="nom2">
                        <td>Mister Mascagne</td>
                      </div>
                    </div>
                    <div className="contenu">
                      <td>Spectacles humoristiques : One man show pour soirée théâtre et public ado/adultes + duo burlesque pour tous (de 5 à 105 ans, francophones ou non) sur le thème des cow-boys.</td>
                    </div>
                  </tr>
                </div>
                <div className="rectangle">
                  <tr>
                    <div className="artiste">
                      <div className="image">                  
                        <img src={photo3} alt="partiste" width="115" height="115" />
                      </div>
                      <div className="nom3">
                        <td>Marion Siéfert</td>
                      </div>
                    </div>
                    <div className="contenu">
                      <td>Marion Siéfert est autrice, metteuse en scène et performeuse. Son travail mêle plusieurs champs artistiques et théoriques et se réalise via différents médiums : spectacles, films, écriture. Accueillie en 2022 avec Le Grand Sommeil et le projet Extrem’Ados, Marion Siéfert travaillera sur sa nouvelle création, Daddy, qui sera présentée au Parvis en 23.24.</td>
                    </div>
                  </tr>
                </div>
              </NavLink>
          <NavLink to="/formulaire">
            <button className="button" variant="outlined">
              Demande d'être artiste
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
