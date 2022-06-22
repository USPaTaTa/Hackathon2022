import React from "react";

import './home.css';

import { NavLink } from "react-router-dom";

import Donnees from './Donnees.json';

import photo from '../img/profil.png';


const layoutCSS = {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const Home = () => {
  return (
    <div className="liste" style={{ ...layoutCSS}}>
        <div className="valeur">
          {Donnees && Donnees.map(donnee =>
          <NavLink to="/artiste" style={{ textDecoration: 'none', color: 'black' }}>
            <div className="rectangle">
              <tr key={donnee.id}>
              <div className="artiste">
                <div className="image">
                <img src={photo} alt="photo" width="115" height="115" />
                </div>
                <td>{donnee.nom}</td>
              </div>
              <div className="contenu">
                <td>
                  {donnee.description}
                  </td>
              </div>
              </tr>
            </div>
            </NavLink>
            )}
            <NavLink to="/formulaire">
              <button className="button" variant="outlined" >Demande</button>
            </NavLink>
          </div>
        </div>
  );
};

export default Home;
