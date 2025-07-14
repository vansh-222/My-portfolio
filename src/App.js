import React from "react";
import "./App.css";

// Import your components
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Project />
      <Socials />
      <Contact />
    </div>
  );
}

export default App;
