import React, { useState } from "react";
import ReactDOM from "react-dom";
import './sondage.css';




import { LeafPoll, Result } from "react-leaf-polls"
import "react-leaf-polls/dist/index.css";

const PollCust = () => {

  const resData = [[
    { id: 0, text: "Un chat", votes: 0 },
    { id: 1, text: "Un Oeuf", votes: 0 },
    { id: 2, text: "Un oiseau", votes: 0 },
  ],[
    { id: 0, text: "Oui", votes: 0 },
    { id: 1, text: "Non", votes: 0 },

  ],[
    { id: 0, text: "Oui ", votes: 0 },
    { id: 1, text: "Non", votes: 0 },
  ],
  [
    { id: 0, text: "Oui", votes: 0 },
    { id: 1, text: "Non", votes: 0 },
  ]
];
  const pairRandom = Math.floor(Math.random()*4);
  let questionType = 'multiple'
  const questions = ['Choisissez la prochaine sculpture','Aimez vous la sclupture que je fait ?','Faut il faire des améliorations','Choisir une question']
 

  const customTheme = {
    textColor: "black",
    mainColor: "#FF0000",
    backgroundColor: "rgb(255,255,255)",
    alignment: "center",
    width:200,
    
  };

  return (
    <LeafPoll
      type={questionType}
      question={questions[pairRandom]}
      results={resData[pairRandom]}
      theme={customTheme}
      isVoted={false}
    />
  );
};

export default PollCust;
   





