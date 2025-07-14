// src/components/Hero.js
import React from "react";

export default function Hero() {
  return (
    <section className="hero">
      <img
        src="/Photo.jpeg"
        alt="Vansh Kumar"
        className="Photo-img"
      />
      <h1>Hi, I'm Vansh Kumar</h1>
      <p>Web Developer | Designer | Student</p>
      <a href="#projects">View My Work</a>
    </section>
  );
}

