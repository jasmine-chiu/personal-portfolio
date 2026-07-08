import { useState } from 'react'
import './App.css'

import major_work from "./assets/MEMENTO_MORI_2D_ANIMATION.mp4";
import mm_tn from "./assets/mm_tn.png";
import lacuna from "./assets/LACUNA_2D_ANIMATION.mp4";
import l_tn from "./assets/l_tn.png";
import graffiti_cat from "./assets/GRAFFITI_CAT_2D_ANIMATION.mp4";
import gc_tn from "./assets/gc_tn.png";
import headphone01 from "./assets/BRUTALIST_HEADPHONE_RENDER01.jpg";
import headphone02 from "./assets/BRUTALIST_HEADPHONE_RENDER02.jpeg";
import headphone03 from "./assets/BRUTALIST_HEADPHONE_RENDER03.jpeg";
import headphone04 from "./assets/BRUTALIST_HEADPHONE_RENDER04.jpeg";
import brutalist_temple from "./assets/BRUTALIST_TEMPLE_3D_FLYOVER.mp4";
import bt_tn from "./assets/bt_tn.png";



function App() {
  const [med, setMed] = [];

  function handleMed() {

  }

  return (
    <>
    <div className="page">
      <div>
        <h1>JASMINE'S PERSONAL</h1>
        <h1>ANIMATION & 3D VISUALISATION PORTFOLIO</h1>
        {/* need to add: DART2210 ANIMATION, MISC. DIGITAL ART.*/}
      </div>
      <div className="filter">
        <button className="filter-btn"><b>ALL</b></button>
        <button className="filter-btn"><b>ANIMATION</b></button>
        <button className="filter-btn"><b>3D VIS.</b></button>
        <button className="filter-btn"><b>MISC. ART</b></button>
        <button className="filter-btn"><b>MARKETING</b></button>
      </div>
      <div className="ani-container">
        <div className="ani">
          <h2><i>Graffiti Cat (2025)</i></h2>
          <p className="medium">2D Digital Animation</p>
          <p className="subheading-cont"><i></i></p>
          <p className="statement"><i></i></p>
          <video className="ani-vid" width="640" height="360" poster={gc_tn} controls>
            <source src={graffiti_cat} type="video/mp4"/>
            Your browser does not support this video tag.
          </video>
        </div>
      </div>
      <div className="ani-container">
        <div className="ani">
          <h2><i>Memento Mori (2020)</i></h2>
          <p className="medium">2D Digital Animation</p>
          <p className="subheading-cont"><i>featuring Claude Bolling's "Irlandaise" (1973), and a quote from "It's Such A Beautiful Day" (2012).</i></p>
          <p className="statement"><i>a short & fragmented animation about the passing of time, and the symbols that both permeate and connect peoples' lives.</i></p>
          <video className="ani-vid" width="640" height="360" poster={mm_tn} controls>
            <source src={major_work} type="video/mp4"/>
            Your browser does not support this video tag.
          </video>
        </div>
      </div>
       <div className="ani-container">
        <div className="ani">
          <h2><i>Brutalist Temple (2025)</i></h2>
          <p className="medium">3D Modelled Enviornment Animation</p>
          <p className="subheading-cont"><i></i></p>
          <p className="statement"><i></i></p>
          <video className="ani-vid" width="640" height="360" poster={bt_tn} controls>
            <source src={brutalist_temple} type="video/mp4"/>
            Your browser does not support this video tag.
          </video>
        </div>
      </div>
      <div className="ani-container">
        <h2><i>Movement Practice (2024)</i></h2>
        <p className="medium">3D Rig Manipulation on Autodesk Maya</p>
        <div className="ani-double-container">
            <div className="ani-half">
              <p className="subheading-cont"><i>Spider-Gwen Rig<br/>created by INSERT NAME</i></p>
              <video className="ani-half-vid" width="320" height="180" poster={l_tn} controls>
                <source src={lacuna} type="video/mp4"/>
                Your browser does not support this video tag.
              </video>
            </div>
            <div className="ani-half">
              <p className="subheading-cont"><i>Cat Rig<br/>created by INSERT NAME</i></p>
              <video className="ani-half-vid" width="320" height="180" poster={l_tn} controls>
                <source src={lacuna} type="video/mp4"/>
                Your browser does not support this video tag.
              </video>
            </div>
        </div>
      </div>
      <div className="ani-container">
        <div className="ani">
          <h2><i>l a c u n a (2024)</i></h2>
          <p className="medium">2D Digital Animation</p>
          <p className="statement"><i>dealing with the emptiness of a loading screen</i></p>
          <video className="ani-vid" width="640" height="360" poster={l_tn} controls>
            <source src={lacuna} type="video/mp4"/>
            Your browser does not support this video tag.
          </video>
        </div>
      </div>
      <div className="digi-container">
        
      </div>
      <div className="render-container">
        <h2><i> BRUTALIST HEADPHONES (2024)</i></h2>
        <p className="medium">3D Modelling in Autodesk Maya</p>
        <div className="render-row">
          <img className="render-img" src={headphone01} />
          <img className="render-img" src={headphone03} />
        </div>
        <div className="render-row">
          <img className="render-img" src={headphone04} />
          <img className="render-img" src={headphone02} />
        </div>
        
      </div>
      <div className="trad-container">
        
      </div>
    </div>
    </>
  )
}

export default App
