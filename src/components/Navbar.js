export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">Vansh Kumar</div>

        <div className="navbar-right">
          <ul className="navbar-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#Projects">Projects</a></li>
          </ul>
          <a className="navbar-cta" href="#contact">Contact Me</a>
        </div>
      </div>
    </nav>
  );
}
