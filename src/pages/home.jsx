import React, { useState } from 'react';
import "../styles/home.css";
import CursorEffect from '../components/jsCursor.jsx';
import lampImage from "../assets/lamp.png";
import lightImage from "../assets/light.png";
import jsLamp from "../components/jsLamp.jsx";

function Home() {
  return (
    <div className="home">
      <div className="lamp-container">
        <img src={lampImage} alt="" className="lamp" />
        <img src={lightImage} alt="" className="light" id="light" />
        <h1 className='h1div'>Navigate between pages for different types of converters</h1>
      </div>

      <div className="text">
        <div className="title">
          <h1>converThings</h1>
        </div>
        <div className="divButton">
          <h1 className='h1button'>How to use</h1>
          <button type="button" onClick={jsLamp} id="btn"><span></span></button>
        </div>
      </div>

      <CursorEffect />
    </div>
  )
}

export default Home;
