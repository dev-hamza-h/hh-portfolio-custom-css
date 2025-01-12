import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import "@/styles/Skills.css";

const skillsData = [
  {
    name: "HTML",
    icon: <FaHtml5 className="icon" style={{ color: "#f16529" }} />,
    level: 92,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="icon" style={{ color: "#333333" }} />,
    level: 88,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="icon" style={{ color: "#2965f1" }} />,
    level: 85,
  },
  {
    name: "React",
    icon: <FaReact className="icon" style={{ color: "#61dafb" }} />,
    level: 78,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="icon" style={{ color: "#007acc" }} />,
    level: 80,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="icon" style={{ color: "#06b6d4" }} />,
    level: 75,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare className="icon" style={{ color: "#f7df1e" }} />,
    level: 76,
  },
  {
    name: "Python",
    icon: <FaPython className="icon" style={{ color: "#3776ab" }} />,
    level: 75,
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-wrapper">
        <h1 className="skills-title">
          Technical <span className="highlight">Skills</span>
        </h1>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-info">
                {skill.icon}
                <span className="skill-name">{skill.name}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
