import React from 'react'
import "./Service.css"
import { MdOutlineSignalCellularAlt } from 'react-icons/md';
import { FaCalendarAlt } from 'react-icons/fa';
import { IoSunnySharp } from 'react-icons/io5';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Service = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      triggerOnce: true,
    });

    const variants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    };

    React.useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  return (
    <motion.div
      className="about"
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
      transition={{ duration: 5 }} // Adjust the duration as needed
    >
      <div className="aboutContainer">
        <h1>What We Do Best</h1>
        <hr />
        <p>
        At Redworks, we offer a comprehensive suite of construction and infrastructure services tailored to meet diverse project needs. From ground-up builds to structural renovations, we deliver precision, durability, and performance at every phase.
        </p>
        <div className="aboutChildHolder">
            <div className="aboutChild">
                <div className="childTop"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <MdOutlineSignalCellularAlt size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Building Construction</h4>
                    <p>
                    We design and construct residential, commercial, and institutional buildings with attention to strength, style, and sustainability.
                    </p>
                </div>
            </div>
            <div className="aboutChild">
                <div className="childTop1"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <IoSunnySharp size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Road & Highway Construction</h4>
                    <p>
                    From local roads to major highways, we build durable, well-engineered surfaces optimized for long-term use and safety.
                    </p>
                </div>
          </div>
          
          <div className="aboutChild">
                <div className="childTop2"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <FaCalendarAlt size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Civil Engineering Works</h4>
                    <p>
                    We handle drainage systems, culverts, embankments, and all civil infrastructure with technical excellence and compliance.
                    </p>
                </div>
            </div>
        </div>
        <div className="aboutChildHolder">
            <div className="aboutChild">
                <div className="childTop3"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <MdOutlineSignalCellularAlt size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Project Management</h4>
                    <p>
                    End-to-end project oversight, ensuring your timelines, budgets, and quality expectations are met without compromise.
                    </p>
                </div>
            </div>
            <div className="aboutChild">
                <div className="childTop4"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <IoSunnySharp size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Renovation & Remodeling</h4>
                    <p>
                    We modernize and enhance existing structures, restoring functionality and improving aesthetics without disrupting core integrity.
                    </p>
                </div>
          </div>
          
          <div className="aboutChild">
                <div className="childTop5"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <FaCalendarAlt size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Structural Design & Engineering</h4>
                    <p>
                    Our in-house engineers provide safe, code-compliant designs for new builds and complex structural systems.
                    </p>
                </div>
            </div>
        </div>
        <div className="aboutChildHolder">
            <div className="aboutChild">
                <div className="childTop6"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <MdOutlineSignalCellularAlt size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Land Surveying & Site Analysis</h4>
                    <p>
                    We conduct detailed site assessments and mapping to inform smart, data-driven project decisions.
                    </p>
                </div>
            </div>
            <div className="aboutChild">
                <div className="childTop7"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <IoSunnySharp size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Real Estate Development</h4>
                    <p>
                    We develop residential and commercial properties from planning to execution, ensuring value and livability.
                    </p>
                </div>
          </div>
          
          <div className="aboutChild">
                <div className="childTop8"></div>
                <div className="childBottom">
                    <div className="iconHold">
                        <FaCalendarAlt size={30} style={{ color: 'red' }} />
                    </div>
                    <h4>Pre-Construction Consulting</h4>
                    <p>
                    We help clients plan smarter with feasibility studies, budgeting, and technical guidance before ground is broken.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </motion.div>
  )
}

export default Service