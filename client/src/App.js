import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/sections/Header/Header.jsx";
import Footer from "./components/sections/Footer/Footer.jsx";
import ScrollToTop from "./hooks/ScrollToTop.jsx";
import Home from "./pages/Home/Home.jsx";
import Notices from "./pages/Notices/Notices.jsx";
import GeneralInduction from "./pages/GeneralInduction/GeneralInduction.jsx";
import PECCLEC from "./pages/PECCLEC/PECCLEC.jsx";
import Cronos from "./pages/Cronos/Cronos.jsx";
import AccessToGroupsEmails from "./pages/AccessToGroupsEmails/AccessToGroupsEmails.jsx";
import MeetLink from "./pages/MeetLink/MeetLink.jsx";
import InitialKnowledgeTest from "./pages/InitialKnowledgeTest/InitialKnowledgeTest.jsx";
import JCEF from "./pages/JCEF/JCEF.jsx";
import DigitalMailbox from "./pages/DigitalMailbox/DigitalMailbox.jsx";
import CustomerSupport from "./pages/CustomerSupport/CustomerSupport.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import "./assets/fontawesome.js";
import "./assets/styles/reset.css";
import "./assets/styles/App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/"                                                                                         element={<Home />} />
        <Route path="/avisos"                                                                                   element={<Notices />} />
        <Route path="/induccion-general"                                                                        element={<GeneralInduction />} />
        <Route path="/proceso-de-evaluacion-y-certificacion-de-competencia-laboral-y-evaluaciones-cruzadas"     element={<PECCLEC />} />
        <Route path="/cronos"                                                                                   element={<Cronos />} />
        <Route path="/acceso-a-grupos-y-correos"                                                                element={<AccessToGroupsEmails />} />
        <Route path="/reuniones-meet/:view"                                                                     element={<MeetLink />} />
        <Route path="/test-conocimientos/:test"                                                                 element={<InitialKnowledgeTest />} />
        <Route path="/jovenes-construyendo-el-futuro"                                                           element={<JCEF />} />
        <Route path="/buzon-online"                                                                             element={<DigitalMailbox />} />
        <Route path="/atencion-a-usuarios"                                                                      element={<CustomerSupport />} />
        <Route path="*"                                                                                         element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;