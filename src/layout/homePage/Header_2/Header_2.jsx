import React, {  useState, useEffect } from "react";
import Parallax from 'react-rellax'
import { bg } from "../../../images/imagesHelper"
import './Header_2.css';


function Heeader_2() {
const [ offesetY, setOffesetY ] = useState(0)
const handlerScroller = ()=>setOffesetY(window.pageYOffset)
useEffect(()=>{
  console.log(offesetY)
  window.addEventListener("scroll",handlerScroller)
  return () => window.removeEventListener("scroll",handlerScroller)
})
   

  return (
    <div className="Header_2">
      <section>
        <Parallax speed={-1}  >
        <img src={bg.bg_3} style={{opacity: `${offesetY > 350  ? 0 : offesetY > 200 ? 0.2 : 1 }`}} />
        </Parallax>
        <Parallax speed={-1}  >
        <img src={bg.bg_2} style={{opacity: `${offesetY > 800  ? 0 : offesetY > 600 ? 0.2 : 1 }` }} />
        </Parallax>
        <Parallax speed={10}>
        <img src={bg.bg_1} style={{ marginTop:"-15px"}} />
        </Parallax>
      </section>
    </div>
  );
}

export default Heeader_2;