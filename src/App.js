import React from "react";
import MainContainer from "./components/MainContainer";
import ParticlesComponent from "./components/Particles";
// import Particles from "react-tsparticles";
import "./App.css";
//import { useState, useEffect } from "react";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

const App = () => {
  return (
    <>
      <ParticlesComponent />
      <MainContainer />
    </>
  );
};

export default App;
