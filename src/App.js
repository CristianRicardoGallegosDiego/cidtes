import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/sections/Header/Header.jsx";
import Footer from "./components/sections/Footer/Footer.jsx";
import Home from "./pages/Home.jsx";
import "./assets/styles/fontawesome.js"
import "./assets/styles/reset.css";
import "./assets/styles/App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;