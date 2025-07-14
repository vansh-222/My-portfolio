// src/components/Projects.js
import React from "react";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="project-list">
        <div className="project">
          <h3>To-Do List App</h3>
          <p>A simple React app to manage tasks.</p>
          <a href="https://github.com/vansh-222/React-Project-Assignment" target="_blank" rel="noreferrer">
            View Code
          </a>
        </div>

        <div className="project">
          <h3>Weather Extension</h3>
          <p>A modern redesign concept for UPSC site.</p>
          <a href="https://github.com/vansh-222/summer-school-online-day-5" target="_blank" rel="noreferrer">
            View Code
          </a>
        </div>

      </div>
    </section>
  );
}
