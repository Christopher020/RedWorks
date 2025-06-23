import React from "react";
import "./AboutP.css";
import AboutW from "../../assets/aboutPage.jpg";
import Last from "../../assets/drilling.jpg";
import One from "../../assets/icon-concept.png";
import Two from "../../assets/icon-process.png";
import Three from "../../assets/icon-engineer.png";
import Four from "../../assets/icon-artist.png";
import { FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";

export const AboutP = () => {
  return (
    <div className="abouW">
      <div className="background">
        <div className="text">
          {" "}
          <h1>About</h1>
          <p>
            <Link to="/" className="goHome">
              Go Back
            </Link>{" "}
            <FaGreaterThan className="iconStyle" /> About
          </p>
        </div>
      </div>

      <div className="con">
        <div className="our">
          <div className="ah">
            <h3 className="red">About Our Company </h3>
            <hr className="hr" />
          </div>

          <h2 className="secA">Our business is built for everyone.</h2>
          <p className="danT">
            Our business is built for everyone. Redworks is a forward-thinking
            construction and infrastructure company serving public and private
            clients across Nigeria. Since our inception, we’ve proudly delivered
            projects that shape skylines, support industries, and improve
            communities. Headquartered in Lagos, we specialize in general
            construction, civil engineering, and real estate
            development—combining precision with innovation to bring ideas to
            life. Whether for government contracts, private developments, or
            turnkey projects, Redworks stands as a trusted name in modern
            construction.
          </p>
          <h3>Our Vision and Mission</h3>
          <p>
            Vision: To be the most trusted provider of sustainable, modern, and innovative construction solutions—transforming Nigeria’s landscape and setting new industry standards.
          </p>

          <p>
            Mission: Our mission is to deliver quality-driven construction services through expertise, transparency, and excellence. We are committed to building strong, lasting structures—and stronger relationships—by leveraging cutting-edge technology, top-tier talent, and a deep understanding of our clients' goals. At Redworks, every project is a promise to deliver with integrity, safety, and precision.
          </p>
          <h3 className="lsa">One Team, Many Talents</h3>
        </div>
        <div className="imgTag">
          <img src={AboutW} alt="" />
        </div>
      </div>

      <div className="blackBg">
        <div className="width">
          <div>
            {" "}
            <img src={One} alt="" />
          </div>
          <div className="first">
            <h1>6149</h1>
            <p>Contacts</p>
          </div>

          <div>
            <img src={Two} alt="" />
          </div>
          <div className="second">
            <h1>560+</h1>
            <p>Winning awards</p>
          </div>

          <div>
            {" "}
            <img src={Three} alt="" />
          </div>
          <div className="third">
            <h1>3507</h1>
            <p>Industries Served</p>
          </div>

          <div>
            {" "}
            <img src={Four} alt="" />
          </div>
          <div className="fourth">
            <h1>3507</h1>
            <p>Completed Projects</p>
          </div>
        </div>
      </div>

      <div className="absolute">
        <div className="lastDivii">
          <img src={Last} alt="" />

          <div className="progressP">
            <h1>Our Broad Range of Services</h1>
            <p>
              At <strong>Redworks</strong>, we deliver innovative, end-to-end
              construction solutions built on quality craftsmanship and
              structural integrity. Our team is equipped to handle complex
              projects across residential, commercial, and civil sectors with
              precision and professionalism.
            </p>

            <div className="progressCon">
              <div className="info">
                <p>General Building Construction</p>
                <p>100%</p>
              </div>
              <progress max="100" value="100"></progress>

              <div className="info">
                <p>Road & Infrastructure Works</p>
                <p>100%</p>
              </div>
              <progress max="100" value="100"></progress>

              <div className="info">
                <p>Civil Engineering Projects</p>
                <p>100%</p>
              </div>
              <progress max="100" value="100"></progress>

              <div className="info">
                <p>Structural Design & Planning</p>
                <p>100%</p>
              </div>
              <progress max="100" value="100"></progress>

              <div className="info">
                <p>Renovation & Remodeling</p>
                <p>100%</p>
              </div>
              <progress max="100" value="100"></progress>

              <div className="info">
                <p>Real Estate Development</p>
                <p>100%</p>
              </div>
              <progress max="100" value="100"></progress>

              <div className="info">
                <p>Project Management</p>
                <p>100%</p>
              </div>
              <progress max="100" value="100"></progress>

              <div className="info">
                <p>Land Surveying & Site Prep</p>
                <p>100%</p>
              </div>
              <progress max="100" value="100"></progress>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
