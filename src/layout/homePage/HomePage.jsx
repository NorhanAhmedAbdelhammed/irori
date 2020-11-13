import React from "react";
import NavBar from "./NavBar/NavBar"
import Header from "./Header/Header"
import Reservation from "./Reservation/Reservation"
import Menu from "./Menu/Menu"
// import Header from "./Header_2/Header_2"
import StorySection from "./StorySection/StorySection"

function Homepage() {

  return (
    <div className="Homepage">
      <NavBar />
      <Header />
      <StorySection />
      {/* <Menu/> */}
      <Reservation />
    </div>
  );
}

export default Homepage;