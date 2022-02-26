import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Dashboard from "./components/pages/Dashboard";
import Projects from "./components/pages/Projects";
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/AboutMe">About Me</Link>
          </li>
          <li>
            <Link to="/Contact">Contact Me</Link>
          </li>
          <li>
            <Link to="/Dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
        </ul>

        <hr />

        <Routes>
          <Route path="/">
            <AboutMe />
          </Route>
          <Route path="/AboutMe">
            <AboutMe />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/Dashboard">
            <Dashboard />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
