import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaPenNib,
  FaCloud,
  FaShoppingCart,
} from "react-icons/fa";
import "@/styles/Services.css";

const services = [
  {
    icon: <FaCode size={30} />,
    title: "Web Development",
    description:
      "Crafting responsive websites optimized for performance and engagement.",
  },
  {
    icon: <FaMobileAlt size={30} />,
    title: "Frontend Development",
    description:
      "Developing user-friendly interfaces that adapt to any device.",
  },
  {
    icon: <FaServer size={30} />,
    title: "Backend Development",
    description:
      "Building reliable server-side solutions to support your applications.",
  },
  {
    icon: <FaShoppingCart size={30} />,
    title: "E-commerce Development",
    description:
      "Creating scalable solutions tailored for online shopping platforms.",
  },
  {
    icon: <FaCloud size={30} />,
    title: "Cloud Solutions",
    description: "Deploying and managing apps with cloud computing expertise.",
  },
  {
    icon: <FaPenNib size={30} />,
    title: "UI/UX Design",
    description: "Designing visually appealing and intuitive user interfaces.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-heading">
        My <span className="highlight-text">Services</span>
      </h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
