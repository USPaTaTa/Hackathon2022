import React, { useState, useRef } from 'react';
import Popup from './popup';
import './artistes.css'

function App() {

  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  const inputRef = useRef();
  const don = useRef();
  const video = useRef();

  function handleClick() {
    // 👇️ access input value
    console.log(don.current.value);
    console.log(video.current.value);
    console.log(inputRef.current.value);
    
    document.getElementById('desc').innerHTML =" Description :"+ inputRef;

  }
 
  return <div>
{/* 
    < ReactPlayer

            //   url ="https://www.youtube.com/watch?v=HRaoYuRKBaA"
              className = "player"

    ></ReactPlayer> */}

<p className='description' id='desc'></p>

{/* <input type="image" id="page1" className="Boutton"></input> */}
    
    <input
      type="button"
      value="+"
      className='plus'
      onClick={togglePopup}
    /> 
    
    {isOpen && <Popup

      content={<>
        <h1>Créer un poste</h1>
        <p>video</p>
        
        <input
        className='video'
        type="file"
        id="video"
        name="video"
        autoComplete="off">

        </input>
        <p>description</p>

        <input 
            ref={inputRef}
            type="text"
            id="message"
            name="message"
            autoComplete="off"/> 

        <button onClick={handleClick} className='ajouter' >Ajouter</button>

      </>}
      handleClose={togglePopup}
    />}

  </div>
}
 
export default App;