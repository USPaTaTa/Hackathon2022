import React from "react";
import ReactPlayer from "react-player";
import Header from "./headerSpectator";
import "../styles/artistPage.css";
import Delacoux from "../video/delacoux.mp4";
import CommentBox from "./CommentBox";
import AddContenu from "./artistes";
import Link from "@mui/material/Link";

import Paypal from "../img/paypal.png";

const artistPage = () => {
  return (
    <div className="base">
      <Header />
      <Link href="https://www.paypal.com/fr/home" id="ledon">
        <img src={Paypal} alt="" srcset="" width={50}/>
        </Link>
      <AddContenu />
      <div className="artistHeader">
        <h2>Delacoux</h2>
      </div>
      <div className="video">
        <ReactPlayer url={Delacoux} controls />
        <p className="description" id="desc">Description :Sculpture en bois d'un amérindien et d'un loup à la tronçonneuse.</p>
        <Link href="/sondage">{"Sondage"}</Link>
      </div>
      <div className="comment">
        <CommentBox />
      </div>
    </div>
  );
};

export default artistPage;
