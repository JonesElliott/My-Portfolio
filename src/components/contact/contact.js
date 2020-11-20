import React from "react";
// import { Container, Row, Col } from "../Grid";
import './contact.css';

// export function Work({ children }) {
//   return (
//     <div className="work-container" id="work">
//       <h2 className="work-title">Work</h2>
//       <ul className="list-group">{children}</ul>
//     </div>
//   );
// }

export default function Contact() { 

  return (
    <form id="contact" className="gform" method="POST" action="https://script.google.com/macros/s/AKfycbylkzdJb5mfdItVQo07J8X42dHMNCeydpJWGTE2/exec" method="post" enctype="text/plain">      
        <input name="name" type="text" className="feedback-input" placeholder="Name" />
        <input name="email" type="text" className="feedback-input" placeholder="Email" />
        <textarea name="message" className="feedback-input" placeholder="Comment"></textarea>
        <input type="submit" /* value="SUBMIT" */ />
        <div style={{display: "none"}} class="thankyou_message">
            <h2><em>Thank you</em> for contacting me! I will get back to you soon!</h2>
        </div>
    </form>
  );

}
