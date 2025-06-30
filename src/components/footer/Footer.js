import React from "react";
import "./Footer.css";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="containerF">
        <hr className="mainHr" />
        <div className="contentF">
          <div className="div0">
            <div className="iconC">
              <FaEnvelope className="iconF" />
            </div>
            <div className="divA">
              <h2>info@redworksltd.com</h2>
              <p>Drop Us a Line</p>
            </div>
          </div>
          <div className="div1">
            <div className="iconC">
              {" "}
              <FaPhone className="iconF" />
            </div>
            <div className="divB">
              <h2>+234 806 732 8572</h2>
              <p>Call Us Now</p>
            </div>
          </div>
          <div className="div2">
            <div className="icon">
              <a
                href="https://maps.app.goo.gl/kR529dAxG9XmyqUJ8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt className="iconF" />
              </a>
            </div>
            <div className="divC">
              <h2>10 Anuoluwapo Close off Opebi Road Ikeja Lagos.</h2>
              {/* <h2>Broad Street Lagos - Nigeria.</h2> */}
            </div>
          </div>
        </div>
        <div className="lastF">
          Copyright 2025 Redworks, All rights reserved.
        </div>
      </div>
    </footer>
  );
};
export default Footer;
