import React from 'react';
import "./About.css";
import { MdOutlineSignalCellularAlt } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoSunnySharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="thi-page">
      <div className="thi-container">
        <div className="thi-con">
          <div className="thi-divs">
            <h5>About Us</h5>
            <h1>Engineering Excellence That Stands the Test of Time</h1>
            <p>
              At <strong>Redworks</strong>, we’re redefining land-based construction with a commitment to quality, integrity, and innovation. 
              We serve government, corporate, and private clients, delivering tailored construction solutions that range from infrastructure development 
              to industrial and residential projects. Our work is grounded in trust, driven by experience, and built to last.
            </p>

            <Link to="AboutPage" className="btn">
              Learn More
            </Link>
          </div>
          <div className="first-3">
            <div className="first-3-half1">
              <div className="sec1">
                <div className="iconH">
                  <MdOutlineSignalCellularAlt className="icn" size={30} />
                </div>
                <h2>Mission</h2>
                <p>
                  To construct sustainable, high-quality structures that meet evolving needs and improve communities—one foundation at a time.
                </p>
              </div>
              <div className="sec1">
                <div className="iconH">
                  <IoSunnySharp className="icn" size={30} />
                </div>
                <h2>Vision</h2>
                <p>
                  To become the go-to name in reliable, modern construction solutions across Nigeria and beyond.
                </p>
              </div>
            </div>
            <div className="first-3-half2">
              <div className="sec2">
                <div className="iconH">
                  <IoSunnySharp className="icn" size={30} />
                </div>
                <h2>Plan</h2>
                <p>
                  We plan with purpose—strategically aligning every project with client goals, efficient execution, and long-term impact.
                </p>
              </div>
              <div className="sec2">
                <div className="iconH">
                  <FaCalendarAlt className="icn" size={30} />
                </div>
                <h2>Strength</h2>
                <p>
                  Our strength lies in a diverse team of experts, robust project management systems, and a culture of continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
