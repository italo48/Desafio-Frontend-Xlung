import React from "react";
import "./App.css";

import Container from "@material-ui/core/Container";

import DiseaseList from "./components/DiseaseList/index";
import Header from "./components/core/Header/index";
import Footer from "./components/core/Footer/index";

// So por questão de teste
const DATA = require("./bula.json");

function App() {
  return (
    <div className="App">
      <Header />
      <Container fixed>
        <DiseaseList data={DATA} />
      </Container>
      <Footer footerText="Made with &hearts; by Ítalo O Costa" />
    </div>
  );
}

export default App;
