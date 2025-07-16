// src/components/Hero.js

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Vansh Kumar</h1>
            <p>Expert Visual Designer & Web Developer</p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Know More</a>
              <a href="#projects" className="btn btn-secondary">See My Projects</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="photo-6.png" alt="Vansh Kumar" />
          </div>
        </div>
      </div>
    </section>
  );
}

