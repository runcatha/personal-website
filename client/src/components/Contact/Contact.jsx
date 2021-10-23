import emailjs from "emailjs-com";
import { init } from 'emailjs-com';
import "./Contact.css";
import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";


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
      
      <h2 className='some-text' id='contact'>Send me an email!</h2>

      <div className='form-div'>
      <div className='form-input'>
    <form className='form' ref={form} onSubmit={sendEmail}>
      <input type="text" name="from_name" placeholder='Name:' className='input' id='input-name' />
     <br />
      <input type="email" name="from_email" placeholder='Email:' className='input' id='input-email' />
     <br />
          <textarea name="message" placeholder='Message:' className='input'/>
          <br />
      <input type="submit" value="Send" className='sendbtn' id='submit-btn' />
      </form>
        </div>
        </div>

      {/* <hr /> */}
      </div>
  );
};

export default Contact;