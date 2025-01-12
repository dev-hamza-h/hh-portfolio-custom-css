import React from "react";
import "@/styles/Education.css";

const Education: React.FC = () => {
  return (
    <div className="education-container">
      <h1 className="education-heading">
        My <span className="highlight-text">Education</span>
      </h1>
      <div className="timeline-wrapper">
        <div className="timeline">
          {/* Education Block - Right */}
          <div className="timeline-block right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-date">2020 - 2021</p>
              <div className="timeline-box">
                <h3 className="timeline-title">
                  Matriculation (Science-Biology)
                </h3>
                <p className="timeline-description">
                  Pursued School studies with Science at Rakhshinda Public
                  School.
                </p>
              </div>
            </div>
          </div>

          {/* Education Block - Left */}
          <div className="timeline-block left">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-date">2022 - 2023</p>
              <div className="timeline-box">
                <h3 className="timeline-title">
                  Intermediate (FSC pre-engineering)
                </h3>
                <p className="timeline-description">
                  Pursued college studies with Science (Engineering) at
                  Government College Forman Nazimabad.
                </p>
              </div>
            </div>
          </div>

          {/* Education Block - Right */}
          <div className="timeline-block right">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <p className="timeline-date">2024 - 2025</p>
              <div className="timeline-box">
                <h3 className="timeline-title">
                  Generative AI Web3 & Metaverse
                </h3>
                <p className="timeline-description">
                  Embarked on my AI journey at GIAIC, acquiring valuable
                  knowledge and insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
