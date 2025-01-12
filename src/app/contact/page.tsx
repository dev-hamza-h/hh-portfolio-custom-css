"use client";

import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "@/styles/Contact.css";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_66flsoq",
          "template_7rh8ylm",
          form.current,
          "MoYQr81-KqPrSOm1a"
        )
        .then(
          (result) => {
            console.log(result.text);
            setIsSubmitted(true);
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send message. Please try again.");
          }
        );
    }
  };

  return (
    <div className="contact-container">
      {isSubmitted ? (
        <div className="form-submitted">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="check-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h11" />
            </svg>
            <h2 className="success-message">Form submitted successfully!</h2>
            <p className="success-submessage">
              Thank you! We will reply to you soon.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="go-back-btn"
            >
              Go back
            </button>
          </div>
        </div>
      ) : (
        <div className="contact-form-container">
          {/* Let’s Connect Section */}
          <div className="connect-section">
            <h2 className="section-title">Let’s Connect</h2>
            <p className="connect-description">
              I&apos;m currently looking for new opportunities, my inbox is
              always open. Whether you have a question or just want to say hi,
              I&apos;ll try my best to get back to you!
            </p>
            <div className="social-icons">
              <a
                href="https://github.com/dev-hamza-h"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="icon github-icon" />
              </a>
              <a
                href="https://linkedin.com/in/hamzahassan-webdev"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="icon linkedin-icon" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <h2 className="contact-form-title">
              <span className="text-white">Contact </span>
              <span className="text-cyan">Me</span>
            </h2>

            <div className="input-grid">
              <div>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Full Name"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="reply_to"
                  placeholder="Email Address"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  required
                  className="input-field"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Email Subject"
                  required
                  className="input-field"
                />
              </div>
            </div>

            <div className="textarea-container">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                required
                className="textarea-field"
              ></textarea>
            </div>
            <div className="submit-btn-container">
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Contact;
