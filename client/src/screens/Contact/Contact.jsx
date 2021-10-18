import emailjs from "emailjs-com";
import { init } from 'emailjs-com';
import "./Contact.css";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


const Contact = () => {
  init("user_WAu4mjIWjptAnoSayM47p");
  const form = useRef();
  let history = useHistory();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4n2kftz",
        "template_vvfi6jq",
        form.current,
        "user_WAu4mjIWjptAnoSayM47p"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    history.push("/");
  };

  return (
    <div className="contact-color">
      
      <div className='some-text'>Send me an email!</div>

      <div className='form-div'>
      <div className='form-input'>
    <form className='form' ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder='Name:' className='input'/>
     <br />
      <input type="email" name="from_email" placeholder='Email:' className='input'/>
     <br />
          <textarea name="message" placeholder='Message:' className='input'/>
          <br />
      <input type="submit" value="Send" className='sendbtn'  />
      </form>
        </div>
        </div>

      {/* <hr /> */}
      </div>
  );
};

export default Contact;