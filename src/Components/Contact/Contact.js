import React, { useState } from 'react';
import emailjs from "emailjs-com";
import './Contact.css';


function Contact() {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
    });
  
    const handleSubmit = (event) => {
      event.preventDefault();
      emailjs
        .sendForm(
          "service_mgafu9c",
          "template_9zea78m",
          event.target,
          "jwli9s537zAMxvA9K"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Your message has been sent successfully!");
            setFormData({
              name: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log(error.text);
            alert("An error occurred, please try again later.");
          }
        );
    };
  
    const handleChange = (event) => {
      setFormData({ ...formData, [event.target.name]: event.target.value });
    };
  
    return (
      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="download">
              Submit
            </button>
          </form>
        </article>
      </section>
    );
  }
  
  export default Contact;