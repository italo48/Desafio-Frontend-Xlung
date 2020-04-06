import React from "react";

import logo from "../../../assets/bio-h.png";

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Lista de doenças</h2>
    </header>
  );
}

export default Header;
