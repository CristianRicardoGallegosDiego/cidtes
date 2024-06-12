import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Contact from "../../common/Contact/Contact";
import RedesSociales from "./redes-sociales.json";
import InformacionGeneral from "./informacion-general.json";
import CorreosElectronicos from "./correos-electronicos.json";
import Telefonos from "./telefonos.json";
import Logo from "../../../assets/images/footer.png";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="first-footer-container">
                <div className="info-cidtes-container">
                    <img src={Logo} alt="Logo" />
                    <div>
                        <h2>Siguenos en:</h2>
                        <ul>
                            {
                                RedesSociales.map((red) => {
                                    return (
                                        <li key={red.id}>
                                            <a 
                                                href={red.link}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FontAwesomeIcon icon={red.icon} alt={red.alt}/>
                                            </a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
                <div className="footer-cidtes-container">
                    <div className="general-info-container">
                        <h2>Información General</h2>
                        <ul>
                            {
                                InformacionGeneral.map((info) => {
                                    return (
                                        <li key={info.id}>
                                            <Link
                                                to={info.link}
                                            >
                                                {info.title}
                                            </Link>
                                        </li>
                                    );
                                })
                            }
                            <li>
                                <a
                                    href="https://drive.google.com/file/d/14rsFcueGRvFUV4EPr34FFg3YBSB29GC8/view"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Aviso de Privacidad
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="contact-info-container">
                        <div className="information-cidtes">
                            <div className="emails">
                                <h2>Correos</h2>
                                <ul>
                                    {
                                        CorreosElectronicos.map((correo) => {
                                            return (
                                                <li key={correo.id}>
                                                    <a 
                                                        href={`mailto:${correo.correo}`}
                                                    >
                                                        <FontAwesomeIcon icon="fa-solid fa-envelope" alt="envelope"/>
                                                        <p>{correo.correo}</p>
                                                    </a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="phone-numbers">
                                <h2>Teléfonos</h2>
                                <ul>
                                    {
                                        Telefonos.map((telefono) => {
                                            return (
                                                <li key={telefono.id}>
                                                    <a 
                                                        href={`tel:${telefono.numero}`}
                                                    >
                                                        <FontAwesomeIcon icon={telefono.icon} alt={telefono.alt}/>
                                                        <p>{telefono.numero}</p>
                                                    </a>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="location-container">
                            <h2>Ubicación</h2>
                            <div>
                                <FontAwesomeIcon icon="fa-solid fa-location-dot" alt="location"/>
                                <p>Real de Los Reyes #303, Los Reyes, Alc. Coyoacán, Ciudad de México, C.P. 040330, México.</p>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3764.727999171979!2d-99.1502399!3d19.3376058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce0029f9da7505%3A0x23b2d1cdacd123b8!2sReal%20de%20Los%20Reyes%20303%2C%20Los%20Reyes%2C%20Coyoac%C3%A1n%2C%2004330%20Ciudad%20de%20M%C3%A9xico%2C%20CDMX!5e0!3m2!1ses!2smx!4v1718144001766!5m2!1ses!2smx"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa de ubicación de CIDTES A.C."
                            >
                            </iframe>
                        </div>
                    </div>
                    <div className="contact-container">
                        <h2>Contacto</h2>
                        <Contact />
                    </div>
                </div>
            </div>
            <div className="last-footer-info">
                <p>Copyright © 2024 CIDTES A. C.</p>
            </div>
        </footer>
    );
};

export default Footer;