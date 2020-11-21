import React from "react";
import './contact.css';

export default function Contact() { 

  return (
    <div className="contact-container">
      <h1 className="work-title">Contact</h1>
      <form id="contact" className="gform" method="POST" action="https://script.google.com/macros/s/AKfycbylkzdJb5mfdItVQo07J8X42dHMNCeydpJWGTE2/exec" method="post" enctype="text/plain">      
          <input name="name" type="text" className="feedback-input" placeholder="Name" />
          <input name="email" type="text" className="feedback-input" placeholder="Email" />
          <textarea name="message" className="feedback-input" placeholder="Comment"></textarea>
          <input type="submit" /* value="SUBMIT" */ />
          <div style={{display: "none"}} class="thankyou_message">
              <h2><em>Thank you</em> for contacting me! I will get back to you soon!</h2>
          </div>
      </form>
    </div>
  );

}
