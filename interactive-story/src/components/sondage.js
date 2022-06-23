import React, { useState } from "react";
import ReactDOM from "react-dom";
import './sondage.css';




import { LeafPoll, Result } from "react-leaf-polls"
import "react-leaf-polls/dist/index.css";

const PollCust = () => {

  const resData = [[
    { id: 0, text: "Un chat", votes: 7 },
    { id: 1, text: "Un Oeuf", votes: 11 },
    { id: 2, text: "Un oiseau", votes: 3 },
  ],[
    { id: 0, text: "Oui", votes: 10 },
    { id: 1, text: "Non", votes: 55 },

  ],[
    { id: 0, text: "Oui", votes: 33 },
    { id: 1, text: "Non", votes: 3 },
  ],[
    { id: 0, text: "Oui", votes: 3 },
    { id: 1, text: "Non", votes: 17 },
  ],[
    { id: 0, text: "Oui", votes: 44 },
    { id: 1, text: "Non", votes: 17 },
  ]
];
  const pairRandom = Math.floor(Math.random()*5);
  let questionType = 'multiple'
  const questions = ['Choisissez la prochaine sculpture',"Aimez vous la sculpture que j'ai fait ?",'Faut il faire des améliorations ?',"Voulez-vous que je continue les sculpture ?","Est-ce que je me reconvertie ?"]
 

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
   





