import React from "react";

import "./Footer.css";

import moment from "moment";

function Footer(props) {
  const { footerText } = props;

  return (
    <footer className="Footer">
      &#x2117; Copyright {moment().year()} <span>{footerText}</span>
    </footer>
  );
}

export default Footer;
