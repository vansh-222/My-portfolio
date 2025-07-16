// src/components/About.js
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-top">
            <div>
              <h2>About Me</h2>
              <p>
                Hi! I’m <strong>Vansh Kumar</strong> — a passionate and detail-oriented web developer and UI/UX designer focused on building modern, responsive, and user-first digital experiences.
                I specialize in crafting clean, scalable code using technologies like JavaScript, React.js, Node.js, and MongoDB. I don’t just build websites — I create digital solutions that solve real-world problems and deliver seamless user experiences across devices.

                My goal is to grow into a skilled full-stack developer, continuously learning new tools and trends, and using technology as a medium to innovate, connect, and empower. Whether it’s front-end design or back-end logic, I thrive on turning ideas into elegant, functional, and impactful web applications.
              </p>

              <div className="highlight-boxes">
                <div className="highlight">
                  <h4>💡 Creative Thinker</h4>
                  <p>Designing with purpose and user in mind.</p>
                </div>
                <div className="highlight">
                  <h4>💻 Web Developer</h4>
                  <p>Building full-stack applications with modern tools.</p>
                </div>
              </div>
            </div>
          </div>

          <h3>My Skills</h3>
          <ul className="skills-list">
            <li>
              <SiJavascript size={20} color="#f0db4f" style={{ marginRight: "8px" }} />
              JavaScript
            </li>
            <li>
              <SiReact size={20} color="#61DBFB" style={{ marginRight: "8px" }} />
              React.js
            </li>
            <li>
              <SiNodedotjs size={20} color="#3C873A" style={{ marginRight: "8px" }} />
              Node.js
            </li>
            <li>
              <SiMongodb size={20} color="#4DB33D" style={{ marginRight: "8px" }} />
              MongoDB
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}


