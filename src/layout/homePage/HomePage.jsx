import React from "react";
import NavBar from "./NavBar/NavBar"
import Header from "./Header/Header"
import Menu from "./Menu/Menu"
// import Header from "./Header_2/Header_2"
import StorySection from "./StorySection/StorySection"

function App() {

  return (
    <div className="App">
      <NavBar />
      <Header />
      <StorySection />
      <Menu/>
    </div>
  );
}

export default App;