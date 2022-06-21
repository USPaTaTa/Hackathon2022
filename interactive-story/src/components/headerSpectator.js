import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/header.css";
import Logo from "../img/logo.png";
import thomas from "../img/thomas.jpg";
import title from "../img/title.png";

const header = () => {
  return (
    <div className="navigation">
      <div className="profil">
        <img src={thomas} alt="" srcset="" width={70} />
        <span>Chaoumet</span>
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
