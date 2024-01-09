import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contactUsStyles.css"

export const ContactUs = () => {
  const form = useRef();
  const [sendMessage, setSendMessage] = useState(false)
  const [value, setValue] = useState("")
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jt3kvdl', 'template_gk23u02', form.current, 'Yt5RnQ1Rk43oiwXtw')
      .then((result) => {
        form.current.reset()
        setSendMessage(true)
      }, (error) => {
        setSendMessage(false)
      });
  };

  return (
    <section className='section-contact' id='contact'>
      <div className='contact-us-title-container'>
        <h3 >Contáctame</h3>
      </div>
      <div className='form-container'>
        <form ref={form} onSubmit={sendEmail} className='form'>
          <label>Nombre</label>
          <input type="text" name="user_name" placeholder='Jhon Doe' required/>
          <label>Email</label>
          <input type="email" name="user_email" placeholder='jhondoe@example.com' required/>
          <label>Mensaje</label>
          <textarea name="message" placeholder='Hi, Jhon Doe here...' required/>
          <button type="submit" value="Enviar" className='send-btn'>Enviar</button>
        </form>

        <div className='icon-container'>
          <img src="../../../images/emailicons/chat.png" alt="" className={sendMessage ? "hide" : "show"}/>
          <img src="../../../images/emailicons/like.png" alt="" className={sendMessage ? "show" : "hide"}/>
        </div>
      </div>

    </section>

  );
};