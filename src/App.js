import React from 'react';
// import {useState} from 'react';
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import profilePic from './Giorgi-Didberidze.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { FaArrowDown } from 'react-icons/fa';
// import {FaArrowCircleUp} from 'react-icons/fa';
// import { Button } from './Styles';



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


// const [visible, setVisible] = useState(false)
  
  // const toggleVisible = () => {
  //   const scrolled = document.documentElement.scrollTop;
  //   if (scrolled > 300){
  //     setVisible(true)
  //   } 
  //   else if (scrolled <= 300){
  //     setVisible(false)
  //   }
  // };
  
  // const scrollToTop = () =>{
  //   window.scrollTo({
  //     top: 0, 
  //     behavior: 'smooth'
  //   });
  // };
  
  // window.addEventListener('scroll', toggleVisible);
  return (
    <body>
      {/* <Button>
     <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
      </Button> */}
      <header>
      <Navbar />
      
      </header>
      <div id="main">
      <section id="home">
      <div className="App">
        <main>
          <div className="intro">
            <h1>Hi, I'm <span>Giorgi</span></h1>
            <h2>Software Engineer</h2>
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
            <p>Hello, my name is Giorgi, but most people call me Gigi. I am a Computer Science MSc student at Eötvös Loránd University, Hungary and hold a BSc degree in Computer Science from the University of Debrecen, Hungary. Alongside my studies, I work as a data analytics mentor. In my free time, I enjoy playing snooker and practicing my guitar skills.</p>
          </div>
        </div>
        <div className="center">
        <div className="personal-info">
    <h3>Personal Information</h3>
    <ul>
      <li><span>Name:</span> Giorgi Didberidze</li>
      <li><span>Email:</span> gigididberidze01@gmail.com</li>
      <li><span>Phone:</span> +36-70-319-3039</li>
      <li><span>Location:</span> Budapest, Hungary</li>
    </ul>
  </div>
  <div className="skills">
    <h3>Skills</h3>
    <ul>
      <li>Web Development</li>
      <li>Data Analytics</li>
      <li>Database Systems (SQL/NoSQL)</li>
      <li>Automation Engineering</li>
      <li>Data Science and Machine Learning</li>
      <li>Natural Language Processing</li>
      <li>Networking (CCNA)</li>
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
        date="10/2022 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaBriefcase />}
        >
        <h3 className="vertical-timeline-element-title">Co-Founder and Website Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Bliss Travel Georgia</h4>
        <p>
          Created <a id="bliss" href="https://blisstravelgeorgia.com/" target="_blank" rel="noreferrer">www.blisstravelgeorgia.com</a> website. Currently, I am working on SEO improvement and business communications.
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
        <h3 className="vertical-timeline-element-title">Data Analytics Mentor</h3>
        <h4 className="vertical-timeline-element-subtitle">TalentLabs</h4>

        <p>
        Modules I am currently guiding: Introduction to Data Analytics, Statistics for Data Analysts, Data Analytics with Python, Hands-on Data Analytics Project, Predictive Analytics Essentials, ETL and Data Warehouse
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
        <h3 className="vertical-timeline-element-title">Student Software Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">Ericsson</h4>
        <p>
        Name of department: BDGS RDPS AT Technology & Innovation Tasks: 5G UPF, Compilation of PCG/PCC, Data Analytics (UT/FT), Application performance analysis/improvement,Testing Automation, RISC-V ISA inspection, Working with time-series databases (InfluxDB). Languages used: Python, C, C++
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
        <h3 className="vertical-timeline-element-title">WBS</h3>
        <h4 className="vertical-timeline-element-subtitle">NLP Researcher</h4>
        <p>
        Conducting AI research in Natural Language Processing about open text generation and Q&A models.
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
        Teaching Introduction to Python course (Theoretical and Practical parts)
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
        date="09/2022 - Present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<FaGraduationCap />}
        >
        <h3 className="vertical-timeline-element-title">Computer Science MSc</h3>
        <h4 className="vertical-timeline-element-subtitle">Eötvös Loránd University</h4>

        <p>
        Data Science Specialization<br></br>
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
