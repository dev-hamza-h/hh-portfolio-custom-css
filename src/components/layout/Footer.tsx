import "@/styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Hamza Hassan. All Rights Reserved.
        </p>
        <div className="links">
          <a
            href="https://github.com/dev-hamza-h"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/hamzahassan-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LinkedIn
          </a>
          <a href="mailto:hk5732065@gmail.com" className="link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
