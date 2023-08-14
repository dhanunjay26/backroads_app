import React from "react";
import SocialLink from "./SocialLink";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks class1="footer-links" class2="footer-link" id="" />

      <SocialLink class1="footer-icons" class2="footer-icon" />

      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
