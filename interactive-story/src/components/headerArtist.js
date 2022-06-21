import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import Logo from "../img/logo.png";
import artist from "../img/artiste.webp";
import title from "../img/title.png";

const header = () => {
  return (
    <div className="navigation">
      <div className="profil">
        <img src={artist} alt="" srcset="" width={70} />
        <span>Delacoux</span>
      </div>
      <div className="title">
        <NavLink to="/">
          <img src={title} alt="" srcset="" />
        </NavLink>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded ">
        <div className="logo">
          <img src={Logo} className="logo" alt="logo" width={70} />
        </div>
      </nav>
    </div>
  );
};

export default header;
