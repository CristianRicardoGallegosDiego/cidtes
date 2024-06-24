import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/sections/Header/Header.jsx";
import Footer from "./components/sections/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import DigitalMailbox from "./pages/DigitalMailbox/DigitalMailbox.jsx";
import GeneralInduction from "./pages/GeneralInduction/GeneralInduction.jsx";
import PECCLEC from "./pages/PECCLEC/PECCLEC.jsx";
import CustomerSupport from "./pages/CustomerSupport/CustomerSupport.jsx";

import "./assets/fontawesome.js"

import "./assets/styles/reset.css";
import "./assets/styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/"                               element={<Home />} />
        <Route path="/buzon-online"                   element={<DigitalMailbox />} />
        <Route path="/atencion-a-usuarios"            element={<CustomerSupport />} />
        <Route path="/induccion-general"              element={<GeneralInduction />} />
        <Route path="/proceso-de-evaluacion-y-certificacion-de-competencia-laboral-y-evaluaciones-cruzadas"                         element={<PECCLEC />} />
        <Route path="*"                              element={<h1>ERROR 404</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;