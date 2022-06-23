import React from "react";
import ReactPlayer from "react-player";
// import { NavLink } from "react-router-dom";
import Header from "./headerSpectator";
import "../styles/artistPage.css";
import Montagne from "../video/montagne.mp4";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import AddContenu from "./artistes";

const artistPage = () => {
  return (
    <div className="base">
      <Header />
      <div className="AddContenu">
        <AddContenu />
      </div>
      <div className="artistHeader">
        <h2>Delacoux</h2>
      </div>
      <div className="video">
        <ReactPlayer url={Montagne} controls />
      </div>
      <div className="comment">
        <CommentBox />
      </div>
    </div>
  );
};

export default artistPage;
