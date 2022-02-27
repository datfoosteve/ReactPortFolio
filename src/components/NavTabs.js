import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <>
      <div className="navcontainer">
        <nav className="flex-nav">
          <ul>
            <li>
              {/* Name in the navbar */}
              <a href="#home" onClick={() => handlePageChange("Home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => handlePageChange("About")}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" onClick={() => handlePageChange("Projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => handlePageChange("Contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavTabs;
