import React from 'react';
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import profilePic from './gigi1.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { FaArrowDown } from 'react-icons/fa';
import ScrollButton from './Components/ScrollToTop/ScrollButton';


function Footer() {
  return (
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
  );
}

function App() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('Resume - Giorgi Didberidze.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'Resume - Giorgi Didberidze.pdf';
            alink.click();
        })
    })
}

  return (
    <body>
      <header>
        <ScrollButton />
      <Navbar />
      
      </header>
      <div id="main">
      <section id="home">
      <div className="App">
        <main>
          <div className="intro">
            <h1>Hi, I'm <span>Giorgi</span></h1>
            <h2>Data Scientist</h2>
            <a href="#about" class="button">About Me <FaArrowDown /></a>
          </div>
        </main>
        <Footer />
      </div>
      </section>
      <section id="about" className="about">
        <div className="about-content">
          <img src={profilePic} alt="Profile" className="about-img"/>
          <div className="about-text">
            <h2>About Me</h2>
            <p>Hello, my name is Giorgi, but most people call me Gigi. I hold a Computer Science MSc degree with the specialization in data science at Eötvös Loránd University, Hungary and a BSc degree in Computer Science from the University of Debrecen, Hungary. Currently, I work as a data analyst at TBC and data analytics mentor at TalentLabs. In my free time, I enjoy playing snooker and practicing my guitar skills.</p>
          </div>
        </div>
        <div className="center">
        <div className="personal-info">
    <h3>Personal Information</h3>
    <ul>
      <li><span>Name:</span> Giorgi Didberidze</li>
      <li><span>Email:</span> gigididberidze01@gmail.com</li>
      <li><span>Phone:</span> +36-70-319-3039</li>
      <li><span>Location:</span> Tbilisi, Georgia</li>
    </ul>
  </div>
  <div className="skills">
    <h3>Skills</h3>
    <ul>
      <li>Data Science and Machine Learning</li>
      <li>Database Systems</li>
      <li>Data Analytics</li>
      <li>Automation Engineering</li>
      <li>Natural Language Processing</li>
      <li>Web Development</li>
    </ul>
  </div>
  </div>
  
  <div className="button_download">
  <p>For more information, please refer to my resume.</p>
  <button class="download" onClick={onButtonClick}>
                    Download CV
  </button>
  </div>
      </section>
      <section id = "experience" className="experience">
        <h2>Experience</h2>
        
        <VerticalTimeline lineColor="#333">
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="08/2025 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBriefcase />}
        >
        <h3 className="vertical-timeline-element-title">Founder</h3>
        <h4 className="vertical-timeline-element-subtitle">Tbilisi Data Science</h4>

        <p>
        Organizing Meetup Events. Networking with like-minded individuals.
        </p>
        </VerticalTimelineElement>
        
        
        
        {/* <VerticalTimeline lineColor="#333"> */}
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="10/2024 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBriefcase />}
        >
        <h3 className="vertical-timeline-element-title">Data Analyst</h3>
        <h4 className="vertical-timeline-element-subtitle">TBC</h4>
        <p>
          Working on data analytics pipelines using SQL, PowerBI, Python and more.
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="09/2022 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBriefcase />}
        >
        <h3 className="vertical-timeline-element-title">Mentor in Machine Learning and Data Analytics in Python</h3>
        <h4 className="vertical-timeline-element-subtitle">TalentLabs</h4>

        <p>
        Modules I am currently guiding: <br></br>
        Machine Learning:<br></br>
        Python, Statistics, Supervised and Unsupervised Learning, Recommender Systems, FPM, Deep Learning, RAG<br></br>
        Data Analytics:<br></br>
        Introduction to Data Analytics, Statistics for Data Analysts, Data Analytics with Python, Hands-on Data Analytics Project, Predictive Analytics Essentials, ETL and Data Warehouse
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="01/2024 - 10/2024"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBriefcase />}
        >
        <h3 className="vertical-timeline-element-title">Software Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">KX</h4>

        <p>
        Worked with KDB+ databases using the q/kdb+ programming language, and also added/modified features in HTML5 dashboards.  
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="01/2024 - 10/2024"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBriefcase />}
        >
        <h3 className="vertical-timeline-element-title">Research Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">ELTE RiskLab</h4>

        <p>
        Worked on crypto market volatility analysis, creating websocket connections, reconstructing the order book, and saving the data to KDB+ and PostgreSQL databases. Using different metrics for analysis, such as Hayashi-Yoshida cross-correlation estimation, mid-price estimation, cointegration, leadlag and so on.  
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="06/2022 - 09/22"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBriefcase />}
        >
        <h3 className="vertical-timeline-element-title">NLP Researcher</h3>
        <h4 className="vertical-timeline-element-subtitle">WBS</h4>
        <p>
        Conducted AI research in Natural Language Processing about open text generation and Q&A models.
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="07/2021 - 11/2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBriefcase />}
        >
        <h3 className="vertical-timeline-element-title">Software Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Ericsson</h4>
        <p>
        Name of department: BDGS RDPS AT Technology & Innovation Tasks: 5G UPF, Compilation of PCG/PCC, Data Analytics (UT/FT), Application performance analysis/improvement,Testing Automation, RISC-V ISA inspection, Working with time-series databases (InfluxDB). Languages used: Python, C, C++
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="06/2021 - 03/2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBriefcase />}
        >
        <h3 className="vertical-timeline-element-title">Python Coding Instructor</h3>
        <h4 className="vertical-timeline-element-subtitle">TalentLabs</h4>

        <p>
        Taught Introduction to Python course (Theoretical and Practical parts)
        </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
      <section id = "education" className="education">
        <h2>Education</h2>
        <VerticalTimeline lineColor='#333'>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="09/2022 - 07/2024"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaGraduationCap />}
        >
        <h3 className="vertical-timeline-element-title">Computer Science MSc</h3>
        <h4 className="vertical-timeline-element-subtitle">Eötvös Loránd University</h4>

        <p>
        Data Science Specialization<br></br>
        Thesis: The effect of volatility on the dynamic dependency structure of crypto assets<br></br>
        Full Scholarship Holder – Stipendium Hungaricum 2022/2023
        </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="09/2019 - 06/2022"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaGraduationCap />}
        >
        <h3 className="vertical-timeline-element-title">Computer Science BSc</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Debrecen</h4>

        <p>
        Final grade: 4.23/5<br></br>
        Thesis: Discovering technical properties and software-economy readiness of RISC-V architecture<br></br>
        Full Scholarship Holder – Stipendium Hungaricum 2019/2020
        </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
      <section id = "services">
        <Services />
      </section>
      <section id = "contact">
      <div>
      <Contact />
      <Footer />
      </div>
      </section>
      </div>
    </body>
  );
}

export default App;
