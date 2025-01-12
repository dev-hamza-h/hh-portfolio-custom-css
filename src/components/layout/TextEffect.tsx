import React from "react";
import { TypeAnimation } from "react-type-animation";
import "@/styles/TextEffect.css";

const TextEffect = () => {
  return (
    <div className="text-effect-container">
      <span className="text-white">And I&apos;m </span>
      <TypeAnimation
        sequence={[
          "Web Developer",
          1500,
          "UX/UI Designer",
          1500,
          "Frontend Developer",
          1500,
          "Programmer",
          1500,
          "Coder",
          1500,
        ]}
        speed={50}
        className="text-highlight"
        repeat={Infinity}
      />
    </div>
  );
};

export default TextEffect;
