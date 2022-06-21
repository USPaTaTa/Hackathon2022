import React from "react";
import ReactPlayer from 'react-player'
// import { NavLink } from "react-router-dom";
import Header from "./headerSpectator";
import "../styles/artistPage.css";
import Montagne from "../video/montagne.mp4";

const artistPage = () => {
  return (
    <div className="base">
      <Header />
      <div className="artistHeader">
        <h2>Delacoux</h2>
      </div>
      <div className="video">
      <ReactPlayer url={Montagne} controls />
      <span>commentaires</span>
      </div>
    </div>
  );
};

export default artistPage;
