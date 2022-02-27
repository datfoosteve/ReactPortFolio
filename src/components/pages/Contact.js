import React from "react";

import email from "../../assets/images/email.png";

export default function Contact() {
  return (
    <div className="container">
      <div className="contact__card">
        <h3>Reach out to me on LinkedIn (below), or send me an email at:</h3>
        <img src={email} alt="gmail"></img>
      </div>
    </div>
  );
}
