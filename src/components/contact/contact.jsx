import React from 'react'
import "./contact.css"
import {useRef, useState } from 'react';
import emailjs from "emailjs-com"

const Contact = () => {

  const form = useRef();

  const [sent, setsent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h8qt39c', 'template_7wkj45c', form.current, 'ma6XvIdm8P5jP8Z8P')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
      setsent(true);

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        
        
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          <div class="confirmation">{sent && <p>Sent!</p>}</div>
            
        </form>

      </div>

    </section>
  )
}

export default Contact