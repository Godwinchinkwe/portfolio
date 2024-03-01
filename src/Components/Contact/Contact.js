import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Contact = () => {
  

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [ done, setDone] = useState(false)


  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm('service_37vibr2', 'template_9pbffde', form.current, {
        publicKey: 'qAnAsVahlFfnpPoMR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setDone(true);
        },
       
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  

 
  

  return (
    <div className="contact-form" id="Contact">
      <div className="w-left">
        <div className="s-awesome">
          {/* darkMode */}
          <span style={{color: darkMode?'white': ''}}> Get in Touch </span>
          {/* <span>Get in Touch</span> */}
          <span>Contact me</span>
          <span>Lets Make Something Amazing together start by Saying Hello </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user" required placeholder="Name"/>
          <input type="email"  name="user_email" className="user" required placeholder="Email"/>
          <textarea name="message"  className="user" required placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting Us"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;