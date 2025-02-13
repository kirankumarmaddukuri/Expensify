import React from "react";
import { footerIcons } from "../utils/constants";

const Footer = () => {
  return (
    <footer>
      <div className="section-center">
        <ul className="footer-icons">
          {footerIcons.map((link) => (
            <li key={link.id}>
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="footer-icon"
                title="social media icon"
              >
                {link.icon}
              </a>
            </li>
          ))}
        </ul>
        <p className="copyright">
          copyright &copy; expense tracker
          <span> {new Date().getFullYear()}</span>. all rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
