// src/components/About.js

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-top">
            <div>
              <h2>About Me</h2>
              <p>
                Hi! I’m <strong>Vansh Kumar</strong>, a passionate web developer and designer. I love
                building clean, modern, and functional websites that solve real problems.
                My goal is to become a full-stack developer and help people through technology.
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
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

