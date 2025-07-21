
export default function Project() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Latest Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <img src="/photo-2.png" alt="To-Do List App" className="project-img" />
            <h3>To-Do List App</h3>
            <p>A simple React app to manage daily tasks efficiently.</p>
            <a href="https://github.com/vansh-222/React-Project-Assignment" target="_blank" rel="noopener noreferrer">
              View Project Code
            </a>
          </div>

          <div className="project-card">
            <img src="/photo-3.png" alt="Weather Extension" className="project-img" />
            <h3>Weather Extension</h3>
            <p>Browser extension showing real-time data using API.</p>
            <a href="https://github.com/vansh-222/summer-school-online-day-5" target="_blank" rel="noopener noreferrer">
              View Project Code
            </a>
          </div>

          <div className="project-card">
            <img src="/photo-4.png" alt="Portfolio Website" className="project-img" />
            <h3>Portfolio Website</h3>
            <p>Personal portfolio website to showcase my work and skills.</p>
            <a href="https://github.com/vansh-222/My-portfolio" target="_blank" rel="noopener noreferrer">
              View Project Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


