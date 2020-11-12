import React , {useState , useEffect} from "react";
import {  Navbar , Nav , NavDropdown ,  Dropdown}  from 'react-bootstrap';
import open from "../../../images/icons/open.png"
import { logo , icons } from "../../../images/imagesHelper"
import "./NavBar.css"

function NavBar() {
  const [ offesetY, setOffesetY ] = useState(0)
  const [ show , setShow ] =useState(false)
  const handlerScroller = ()=>setOffesetY(window.pageYOffset)
  const handlerShow = ()=>setShow(prev => !prev)
  useEffect(()=>{
    console.log(offesetY)
    window.addEventListener("scroll",handlerScroller)
    return () => window.removeEventListener("scroll",handlerScroller)
  })
   
  return (
    <div className="Nav" style={{background:`${offesetY >= 100 ? "rgb(74,165,156,0.7)" : "transparent" }`}}>
        <Navbar bg="light" expand="lg" fixed="top" >
            <Navbar.Brand>
              <img src={logo.logoIcon} style={{width:"130px",height:"60px"}} />
            </Navbar.Brand>
           
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Menu</Nav.Link>
                    <Nav.Link href="#link">Our Story</Nav.Link>
                    <Nav.Link href="#link">Location</Nav.Link>
                    <Nav.Link href="#link">Events</Nav.Link>
                    <Nav.Link href="#link">Make a Reservation</Nav.Link>
                </Nav>
                <NavDropdown 
                 title={<img src={open} style={{width:"50px" , height:"50px"}} />} 
                 id="nav-dropdown"
                 onClick={()=>handlerShow()}>
                  <NavDropdown.Item eventKey="4.1"
                  style={{color:`${show?"#ffffff":"transparent"}`,background:`${show?"rgb(74,165,156,0.7)":"transparent"}`}}
                  >
                    <p>From Sun to Sat</p>
                    <p>From 12:30pm to 12:00am</p>
                  </NavDropdown.Item>
                </NavDropdown>
            </Navbar.Collapse>

      
        </Navbar>
    </div>
  );
}

export default NavBar;