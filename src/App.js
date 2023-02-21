import "./App.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import profilePic from './Giorgi-Didberidze.jpg';
// import cvFile from '../public/Resume-Giorgi Didberidze.pdf';
// import Timeline from './Timeline';



function App() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Resume-Giorgi Didberidze.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume-Giorgi Didberidze.pdf';
            alink.click();
        })
    })
}
  return (
    <body>
      <header>
      <nav>
          <ul>
          <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <div id="main">
      <section id="home">
      <div className="App">
        <main>
          <div className="intro">
            <h1>Hi, I'm Giorgi</h1>
            <h2>Software Engineer</h2>
          </div>
        </main>
        <footer>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/giorgi-didberidze/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Gigi-Didberidze"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/gigididberidze/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </footer>
      </div>
      </section>
      <section id="about" className="about">
        <div className="about-content">
          <img src={profilePic} alt="Profile" className="about-img"/>
          <div className="about-text">
            <h2>About Me</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus.</p>
          </div>
        </div>
        <div className="center">
        <div className="personal-info">
    <h3>Personal Information</h3>
    <ul>
      <li><span>Name:</span> John Doe</li>
      <li><span>Email:</span> john.doe@example.com</li>
      <li><span>Phone:</span> 123-456-7890</li>
      <li><span>Location:</span> New York, NY</li>
    </ul>
  </div>
  <div className="skills">
    <h3>Skills</h3>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </div>
  </div>
  <div className="button_download">
  <button class="download" onClick={onButtonClick}>
                    Download CV
  </button>
  </div>
      </section>
      <section id = "resume"></section>
      <section id = "services"></section>
      <section id = "contact"></section>
      </div>
    </body>
  );
}

export default App;
