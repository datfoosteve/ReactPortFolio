import React from "react";
// import DigitalCard from "../DigitalBusinessCard/DigitalCard";

export default function Projects() {
  return (
    <div className="container">
      <main className="container">
        <section className="card card6">
          <header>
            <a href="https://github.com/datfoosteve" target="about_blank">
              Social-Media-Api
            </a>
          </header>
          <div className="project-text">
            <p>Social-Media-Api description</p>
          </div>
        </section>
        <section className="card card3">
          <header>
            <a
              href="https://github.com/datfoosteve/textEditor"
              target="about_blank"
            >
              Text Editor
            </a>
            <a href="https://text-jeditor.herokuapp.com/" target="about_blank">
              Live Demo
            </a>
          </header>
          <div className="project-text">
            <p>
              A simple text editor that can be used in the browser as well as
              installed and used offline. IndexedDB is used to save the text to
              be retrieved when opening the app at a later date.
            </p>
          </div>
        </section>
        <section className="card card5">
          <header>
            <a
              href="https://github.com/datfoosteve/Social-Media-API"
              target="about_blank"
            >
              Social Network API
            </a>
          </header>
          <div className="project-text">
            <p>
              A skeleton for a social media app. It supplies users with thoughts
              and reactions to those thoughts, as well as the ability to have
              friends. All of these items are stored in MongoDB, a noSQL
              database, and loose relationships are tethered through
              mongoose.js.
            </p>
          </div>
        </section>
        <section className="card card1">
          <header>
            <a
              href="https://datfoosteve.github.io/HW1---Semantic-HTML/"
              target="about_blank"
            >
              Search Engine Optimization
            </a>
          </header>
          <div className="project-text">
            <p>
              Refactored HTML and CSS to achieve accurate and concise search
              engine results. Brought code-base to accessibility standards.
              Eased maintainability of code through semantic elements and
              descriptive comments.
            </p>
          </div>
        </section>
        <section className="card card2">
          <header>
            <a
              href="https://github.com/datfoosteve/EmploymentManagementSystem"
              target="about_blank"
            >
              Employee Tracker
            </a>
          </header>
          <div className="project-text">
            <p>
              A lightweight application for employers to track and edit
              employees and departments within their company. Through the CLI
              the user can follow prompts to edit information.
            </p>
          </div>
        </section>
        <section className="card card4">
          <header>
            <a
              href="https://github.com/datfoosteve/NoteEnscripter"
              target="about_blank"
            >
              Note Taker
            </a>
            <a
              href="https://note-enscripter.herokuapp.com/"
              target="about_blank"
            >
              Live Demo
            </a>
          </header>
          <div className="project-text">
            <p>A simple app to save notes for later use.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
