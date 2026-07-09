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
import cat_mvmt from "./assets/CAT.mp4";
import c_tn from "./assets/c_tn.png";
import sg_mvmt from "./assets/SPIDER_GWEN.mov";
import sg_tn from "./assets/sg_tn.png";
import b1 from "./assets/BITSA.png";
import b2 from "./assets/BITSA2.png";
import cse from "./assets/CSE.png";
import ys from "./assets/YS.mp4";
import ys_tn from "./assets/ys_tn.png";

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
        <p className="medium">3D Movement Animation on Autodesk Maya</p>
        <div className="ani-double-container">
            <div className="ani-half">
              <p className="subheading-cont"><i>Spider-Gwen Rig<br/>created by Alex Salmar</i></p>
              <video className="ani-half-vid" width="320" height="180" poster={sg_tn} controls>
                <source src={sg_mvmt} type="video/mov"/>
                Your browser does not support this video tag.
              </video>
            </div>
            <div className="ani-half">
              <p className="subheading-cont"><i>Cat Rig<br/>created by Truong</i></p>
              <video id="small-vid" className="ani-half-vid" width="320" height="180" poster={c_tn} controls>
                <source src={cat_mvmt} type="video/mp4"/>
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
      <div className="render-container">
        <h2><i> VOLUNTEERING MARKETING ASSETS</i></h2>
        <p className="medium">Designed with Adobe Premiere Pro, Adobe Illustrator & Canva</p>
        <div className="col-container">
          <div className="render-col" id="left-col">
            <div className="cse-row">
              <img className="cse-img" src={cse} />
            </div>
            <div className="b-row">
              <img className="b1-img" src={b1} />
              <img className="b2-img" src={b2} />
            </div>
          </div>
          <div className="render-col">
            <video className="ys-vid" width="225" height="400" poster={ys_tn} controls>
              <source src={ys} type="video/mp4"/>
              Your browser does not support this video tag.
            </video>
          </div>
        </div>
        
        
      </div>
      <div className="trad-container">
        
      </div>
    </div>
    </>
  )
}

export default App
