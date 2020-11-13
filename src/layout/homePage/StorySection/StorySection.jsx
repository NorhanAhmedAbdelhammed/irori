import React ,{useRef , useEffect} from "react";
import Parallax from 'react-rellax'
import chef from "../../../images/chef.jpg"
import "./StorySection.css"

function StroySection() {
const menuRef = useRef();
useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll",handleScroll)
})
function handleScroll() {
    console.log( menuRef.current.getBoundingClientRect())
    console.log("top StroySection")
}
   
  return (
    <div className="StroySection" 
    ref={menuRef}>
        <div className="video">
            <video playsInline autoPlay loop muted>
                <source src="http://irori.sa/upload/vedio/finalirorivideo2.mp4" type="video/mp4"/>
            </video>
        </div>
        <div className="story">
            {/* <Parallax speed={4}> */}
                <h1>Our Story</h1>
                <p>Here the Robata rules. Experience the wonders of contemporary Japanese cuisine infused by unique flavours of the world.
                Embrace the lifestyle, and let us feed your spirit.</p>
                <p>Here the Robata rules. Experience the wonders of contemporary Japanese cuisine infused by unique flavours of the world.
                Embrace the lifestyle, and let us feed your spirit.</p>
            {/* </Parallax> */}
        </div>
    </div>
  );
}

export default StroySection;