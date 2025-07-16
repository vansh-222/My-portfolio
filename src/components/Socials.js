
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Socials() {
  return (
    <section className="socials">
      <h2>Connect with Me</h2>
      <a href="https://www.linkedin.com/in/vansh-kumar-938752316/" target="_blank" rel="noreferrer">
        <FaLinkedin size={30} />
      </a>
      <a href="https://github.com/vansh-222" target="_blank" rel="noreferrer">
        <FaGithub size={30} />
      </a>
    </section>
  );
}
