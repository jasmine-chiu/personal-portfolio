import { useState, useEffect, useRef } from 'react'
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
import sg_mvmt from "./assets/SPIDER_GWEN.mp4";
import sg_tn from "./assets/sg_tn.png";
import b1 from "./assets/BITSA.png";
import b2 from "./assets/BITSA2.png";
import ys from "./assets/YS.mp4";
import ys2 from "./assets/ys2.mp4";
import ys_tn from "./assets/ys_tn.png";
import lt from "./assets/cse.mp4";
import lt_tn from "./assets/lt_tn.png";
import ban1 from "./assets/ban1.png";
import ban2 from "./assets/ban2.png";
import ban3 from "./assets/ban3.png";
import ban4 from "./assets/ban4.png";
import ban5 from "./assets/ban5.png";
import ban6 from "./assets/ban6.png";
import ban7 from "./assets/ban7.png";
import ban8 from "./assets/ban8.png";
import h1 from "./assets/hoodie.png";
import h2 from "./assets/hoodie.jpg";
import d1 from "./assets/d1.jpg";
import d2 from "./assets/d2.gif";
import d3 from "./assets/d3.jpg";
import v1 from "./assets/v1.jpg";
import v2 from "./assets/v2.jpg";
import v31 from "./assets/v31.jpg";
import v32 from "./assets/v32.jpg";

function App() {
  const [med, setMed] = useState('ALL');
  const [loading, setLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);


  const containerRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      const timeout = setTimeout(() => setShowLoader(false), 400);
      return () => clearTimeout(timeout);
    } else {
      setShowLoader(true);
    }
  }, [loading]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    setLoading(true);

    const images = Array.from(container.querySelectorAll('img'));
    const videos = Array.from(container.querySelectorAll('video'));
    const total = images.length + videos.length;

    if (total === 0) {
      setLoading(false);
      return;
    }

    let remaining = total;
    let cancelled = false;

    function checkDone() {
      remaining -= 1;
      if (!cancelled && remaining <= 0) {
        setLoading(false);
      }
    }

    images.forEach((img) => {
      if (img.complete) {
        checkDone();
      } else {
        img.addEventListener('load', checkDone, { once: true });
        img.addEventListener('error', checkDone, { once: true });
      }
    });

    videos.forEach((video) => {
      if (video.readyState >= 1) {
        checkDone();
      } else {
        video.addEventListener('loadedmetadata', checkDone, { once: true });
        video.addEventListener('error', checkDone, { once: true });
      }
    });

    const fallback = setTimeout(() => {
      if (!cancelled) setLoading(false);
    }, 12000);

    return () => {
      cancelled = true;
      clearTimeout(fallback);
      images.forEach((img) => {
        img.removeEventListener('load', checkDone);
        img.removeEventListener('error', checkDone);
      });
      videos.forEach((video) => {
        video.removeEventListener('loadedmetadata', checkDone);
        video.removeEventListener('error', checkDone);
      });
    };
  }, [med]);

  function handleMed(category) {
    setMed(category);
  }

  return (
    <>
      {showLoader && (
        <div className={`loading-screen ${loading ? 'fade-in' : 'fade-out'}`}>
          <div className="spinner"></div>
          <p>loading media...</p>
        </div>
      )}
      <div className="page" ref={containerRef} style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <div>
          <h1>JASMINE'S PERSONAL</h1>
          <h1>ANIMATION & 3D VISUALISATION PORTFOLIO</h1>
        </div>
        <div className="filter">
          <button className={`filter-btn ${med === 'ALL' ? 'active' : ''}`} onClick={() => handleMed('ALL')}><b>ALL</b></button>
          <button className={`filter-btn ${med === 'ANIMATION' ? 'active' : ''}`} onClick={() => handleMed('ANIMATION')}><b>ANIMATION</b></button>
          <button className={`filter-btn ${med === '3D VIS.' ? 'active' : ''}`} onClick={() => handleMed('3D VIS.')}><b>3D VIS.</b></button>
          <button className={`filter-btn ${med === 'MARKETING' ? 'active' : ''}`} onClick={() => handleMed('MARKETING')}><b>MARKETING</b></button>
          <button className={`filter-btn ${med === 'MISC. ART' ? 'active' : ''}`} onClick={() => handleMed('MISC. ART')}><b>MISC. ART</b></button>
        </div>
      {(med === 'ALL' || med === '3D VIS.') &&
      <div className="ani-container">
        <div className="ani">
          <h2><i>BRUTALIST TEMPLE (2025)</i></h2>
          <p className="medium">3D Modelled Enviornment Animation</p>
          <p className="subheading-cont"><i></i></p>
          <p className="statement"><i></i></p>
          <video className="ani-vid" width="640" height="360" poster={bt_tn} controls>
            <source src={brutalist_temple} type="video/mp4"/>
            Your browser does not support this video tag.
          </video>
        </div>
      </div>
      }
      {(med === 'ALL' || med === 'ANIMATION') &&
      <div className="ani-container">
        <div className="ani">
          <h2><i>MEMENTO MORI (2020)</i></h2>
          <p className="medium">2D Digital Animation</p>
          <p className="subheading-cont"><i>featuring Claude Bolling's "Irlandaise" (1973), and a quote from "It's Such A Beautiful Day" (2012).</i></p>
          <video className="ani-vid" width="640" height="360" poster={mm_tn} controls>
            <source src={major_work} type="video/mp4"/>
            Your browser does not support this video tag.
          </video>
        </div>
      </div>
      }
      {(med === 'ALL' || med === 'ANIMATION') &&
      <div className="ani-container">
        <div className="ani">
          <h2><i>GRAFFITI CAT (2025)</i></h2>
          <p className="medium">2D Digital Animation</p>
          <p className="subheading-cont"><i></i></p>
          <p className="statement"><i></i></p>
          <video className="ani-vid" width="640" height="360" poster={gc_tn} controls>
            <source src={graffiti_cat} type="video/mp4"/>
            Your browser does not support this video tag.
          </video>
        </div>
      </div>
      }
      {(med === 'ALL' || med === '3D VIS.') &&
      <div className="ani-container">
        <h2><i>MOVEMENT PRACTICE (2024)</i></h2>
        <p className="medium">3D Movement Animation on Autodesk Maya</p>
        <div className="ani-double-container">
            <div className="ani-half">
              <p className="subheading-cont"><i>Spider-Gwen Rig<br/>created by Alex Salmar</i></p>
              <video className="ani-half-vid" width="320" height="180" poster={sg_tn} controls>
                <source src={sg_mvmt} type="video/mp4"/>
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
      }
      {(med === 'ALL' || med === 'ANIMATION') &&
      <div className="ani-container">
        <div className="ani">
          <h2><i>l a c u n a (2024)</i></h2>
          <p className="medium">2D Digital Animation</p>
          <video className="ani-vid" width="640" height="360" poster={l_tn} controls>
            <source src={lacuna} type="video/mp4"/>
            Your browser does not support this video tag.
          </video>
        </div>
      </div>
      }
      {(med === 'ALL' || med === '3D VIS.') &&
      <div className="render-container">
        <h2><i> BRUTALIST HEADPHONES (2024)</i></h2>
        <p className="medium">3D Modelling in Autodesk Maya</p>
        <div className="render-row">
          <img className="bh-img" src={headphone01} />
          <img className="bh-img" src={headphone03} />
        </div>
        <div className="render-row">
          <img className="bh-img" src={headphone04} />
          <img className="bh-img" src={headphone02} />
        </div>
      </div>
      }
      {(med === 'ALL' || med === 'MARKETING') &&
      <div className="render-container">
        <h2><i> VOLUNTEERING MARKETING SHORT FORM VIDEOS</i></h2>
        <p className="medium">Designed with Adobe Premiere Pro</p>
        <div className="col-container">
          {/* <div className="render-col" id="left-col">
            <div className="cse-row">
              <img className="cse-img" src={cse} />
            </div>
            <div className="b-row">
              <img className="b1-img" src={b1} />
              <img className="b2-img" src={b2} />
            </div>
          </div> */}
          <div className="render-col">
            <video className="ys-vid" width="225" height="400" poster={ys_tn} controls>
              <source src={ys} type="video/mp4"/>
              Your browser does not support this video tag.
            </video>
          </div>
          <div className="render-col">
            <video className="cse-vid" width="225" height="400"  controls>
              <source src={lt} type="video/mp4"/>
              Your browser does not support this video tag.
            </video>
          </div>
           <div className="render-col">
            <video className="ys-vid" width="225" height="400" controls>
              <source src={ys2} type="video/mp4"/>
              Your browser does not support this video tag.
            </video>
          </div>
        </div>
      </div>
      }
      {(med === 'ALL' || med === 'MARKETING') &&
      <div className="render-container">
        <h2><i> STUDENT SOCIETY FACEBOOK ASSETS</i></h2>
        <p className="medium">Designed with Adobe Illustrator & Canva</p>
          <div className="banner-row">
            <img className="ban-img" src={ban1} />
            <img className="ban-img" src={ban2} />
          </div>
          <div className="banner-row">
            <img className="ban-img" src={ban3} />
            <img className="ban-img" src={ban4} />
          </div>
          <div className="banner-row">
            <img className="ban-img" src={ban5} />
            <img className="ban-img" src={ban6} />
          </div>
          <div className="banner-row">
            <img className="ban-img" src={ban7} />
            <img className="ban-img" src={ban8} />
          </div>
      </div>
      }
      {(med === 'ALL' || med === 'MARKETING') &&
      <div className="render-container">
        <h2><i> VOLUNTEERING MAGAZINE ASSETS</i></h2>
        <p className="medium">Designed with Adobe Illustrator</p>
          <div className="b-row">
            <img className="b1-img" src={b1} />
            <img className="b2-img" src={b2} />
          </div>
      </div>
      }
      {(med === 'ALL' || med === 'MISC. ART') &&
      <div className="render-container">
        <h2><i>CSESOC HOODIE DESIGN COMPETITION (2024)</i></h2>
        <p className="medium">Drawn with Procreate</p>
        <p className="subheading-cont"><i>Selected via popular vote of the CSESoc community</i></p>
        <div className="b-row">
          <img className="h-img" src={h1} />
          <img className="h-img" src={h2} />
        </div>
      </div>
      }
      {(med === 'ALL' || med === 'MISC. ART') &&
      <div className="render-container">
        <h2><i>PERSONAL DIGITAL ART</i></h2>
        <p className="medium">Drawn with Procreate</p>
        <div className="b-row">
          <img className="d-img" src={d1} />
          <img className="d-img" src={d2} />
          <img className="d-img" src={d3} />
        </div>
      </div>
      }
       {(med === 'ALL' || med === 'MISC. ART') &&
      <div className="render-container">
        <h2><i>PERSONAL TRADITIONAL ART</i></h2>
        <p className="medium">Drawn/Painted with a mix of Pen, Pencil, Acrylic Paint, and Chalk Pastel </p>
         <div className="b-row">
          <img className="d-img" src={v2} />
          <img className="d-img" src={v1} />
         </div> 
        <div className="bb-row">
          <img className="d-img" src={v31} />
          <img className="d-img" src={v32} />
        </div>
      </div>
      }


    </div>
    </>
  )
}

export default App