import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/AboutMe";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Typewriter from "./Typewriter";
import ParticlesComponent from "../components/Particles";
import "../assets/styles/index.css";

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="MainContaining">
      <ParticlesComponent />
      {/* Pass current page from state, use function to update the page */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <h1>
        <Typewriter />
      </h1>
      {/* Render the current page */}
      {renderPage()}
      {/* Render footer */}
      <Footer />
    </div>
  );
}
