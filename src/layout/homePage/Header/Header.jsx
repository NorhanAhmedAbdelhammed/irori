import React, {  useState, useEffect } from "react";
import {bg } from "../../../images/imagesHelper"
import './Header.css';

function Header() {
const [ offesetY, setOffesetY ] = useState(0)
const handlerScroller = ()=>setOffesetY(window.pageYOffset)
useEffect(()=>{
  console.log(offesetY)
  window.addEventListener("scroll",handlerScroller)
  console.log(offesetY-(offesetY*0.999))
  return () => window.removeEventListener("scroll",handlerScroller)
})
   

  return (
    <div className="Header">
      <section>
        <img src={bg.bg_3} style={{opacity: `${offesetY > 200 ? 1 : 0 }`}} />
        <img src={bg.bg_1} style={{opacity: `${(offesetY <= 200 && offesetY > 100)  ? 1 : 0 }`}} />
        <img src={bg.bg_2} style={{opacity: `${(offesetY <= 100 && offesetY >= 0)  ? 1 : 0 }`}} />
      </section>
    </div>
  );
}

export default Header;