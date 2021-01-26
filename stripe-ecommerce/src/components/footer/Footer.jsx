import React from "react";
import "./footer.styles.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer-container">
      <div className="footer">{year} &copy; sog</div>
    </div>
  );
};

export default Footer;
