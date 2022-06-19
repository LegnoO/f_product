import React from "react";
// import "../Contact/contact.css";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiTwotonePhone } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";
const Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-text row">
            <div className="contact-location">
              <AiOutlineEnvironment className="contact-icon" /> 319 - C16 Lý
              Thường Kiệt, P.15, Q.11, Tp.HCM
            </div>
            <div className="contact-phone">
              {" "}
              <AiTwotonePhone /> 0937525530
            </div>
          </div>
          <div className="contact-media">
            <div className="facebook media">
              {" "}
              <AiFillFacebook />
            </div>
            <div className="instagram media">
              <AiFillInstagram />
            </div>
            <div className="twitter media">
              {" "}
              <AiOutlineTwitter />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
