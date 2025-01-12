"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/LOGO.png";
import { useState } from "react";
import "@/styles/Header.css";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      {/* Logo Content */}
      <div className="logo-container">
        <Image src={Logo} alt="Logo" height={50} width={50} />
        <h1 className="logo-title">
          Hamza <span className="highlight">Hassan</span>
        </h1>
      </div>

      {/* Links for larger screens */}
      <nav className="desktop-menu">
        <Link href="/" className="link-hover">
          Home
        </Link>
        <Link href="/about" className="link-hover">
          About
        </Link>
        <Link href="/skills" className="link-hover">
          Skills
        </Link>
        <Link href="/education" className="link-hover">
          Education
        </Link>
        <Link href="/services" className="link-hover">
          Services
        </Link>
        <Link href="/contact" className="link-hover">
          Contact
        </Link>
      </nav>

      {/* Hire Me Button */}
      <div className="hire-button-container">
        <a href="mailto:hk5732065@gmail.com" className="hire-button">
          HIRE ME
        </a>
      </div>

      {/* Mobile Menu Button */}
      <div className="menu-button" onClick={toggleMenu}>
        ☰
      </div>

      {/* Mobile Menu Content */}
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        {/* Close Button */}
        <div className="close-button" onClick={toggleMenu}>
          ×
        </div>
        <div className="mobile-logo">
          <Image src={Logo} alt="Logo" height={40} width={40} />
          <h1 className="logo-title">
            Hamza <span className="highlight">Hassan</span>
          </h1>
        </div>
        <nav className="mobile-links">
          <Link href="/" onClick={toggleMenu} className="link-hover">
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu} className="link-hover">
            About
          </Link>
          <Link href="/skills" onClick={toggleMenu} className="link-hover">
            Skills
          </Link>
          <Link href="/education" onClick={toggleMenu} className="link-hover">
            Education
          </Link>
          <Link href="/services" onClick={toggleMenu} className="link-hover">
            Services
          </Link>
          <Link href="/contact" onClick={toggleMenu} className="link-hover">
            Contact
          </Link>
        </nav>
        <div className="mobile-hire-button">
          <a href="mailto:hk5732065@gmail.com" className="hire-button">
            HIRE ME
          </a>
        </div>
      </div>
    </header>
  );
}
