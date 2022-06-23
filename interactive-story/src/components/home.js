import React from "react";

import "../styles/home.css";

import { NavLink } from "react-router-dom";

import photo from "../img/artiste.webp";
import photo2 from "../img/mascagne.jpg";
import photo3 from "../img/kevin.jpeg";

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
                to="/artist/delacoux"
                style={{ textDecoration: "none", color: "black" }}
              >
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
Il vous présente ici un aperçu de ses œuvres passées ainsi que toutes ses sculptures disponibles à la vente et rassemblées dans sa salle d'exposition personnelle à Montaut (64800). <b>Rue Torte, 64800 Montaut</b></td>
                    </div>
                  </tr>
                </div>
                </NavLink>
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
                      <td>Spectacles humoristiques : One man show pour soirée théâtre et public ado/adultes + duo burlesque pour tous (de 5 à 105 ans, francophones ou non) sur le thème des cow-boys. <b>Boulevard Jean Moulin, 65000 Tarbes</b> </td>
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
                        <td>Kevin Denard</td>
                      </div>
                    </div>
                    <div className="contenu">
                      <td>Artiste tarbais, il est multi-instrumentiste, joue et compose une musique qui est un mix de blues et de sonorités indiennes. Parcours atypique car il a du surmonter son handicap (malentendant), est diplômé de la MAI de Nancy puis de la JAI de Nancy, a rencontré les plus grands musiciens de blues à  Boston.
En 2014, il découvre à Vancouver son instrument de prédilection le Mohan Veena, instrument à 22 cordes. <b>Rue Dauriac, 65000 Tarbes</b>
</td>
                    </div>
                  </tr>
                </div>
            <NavLink to="/formulaire">
            <button className="button" variant="outlined">
              Devenir un artiste
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Home;
