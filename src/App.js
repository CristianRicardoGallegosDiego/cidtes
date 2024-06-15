import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";

import Header from "./components/sections/Header/Header.jsx";
import Footer from "./components/sections/Footer/Footer.jsx";

import Home from "./pages/Home/Home.jsx";
import DigitalMailbox from "./pages/DigitalMailbox/DigitalMailbox.jsx";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;