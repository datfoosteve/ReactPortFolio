import React from "react";
import AboutMe from "./src/components/pages/AboutMe";
import Contact from "./src/components/pages/Contact";
import Dashboard from "./src/components/pages/Dashboard";
import Projects from "./src/components/pages/Projects";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/AboutMe">About-Me</Link>
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

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/AboutMe">
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
        </Switch>
      </div>
    </Router>
  );
}
