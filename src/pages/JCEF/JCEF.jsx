import React from "react";
import Hero from "../../assets/images/pages/jcef/jcef.jpg";
import LogoGob from "../../assets/images/pages/jcef/gobmex.jpg";
import FooterLogo from "../../assets/images/pages/jcef/bannergobmex.png";
import "./JCEF.css";

const FirstPart = () => {
    return (
        <div className="first-part">
            <div>
                <img src={LogoGob} alt="Gobierno de México" />
                <img src={FooterLogo} alt="Complemento de Logo Gob" />
            </div>
            <button>
                <a href="https://jovenesconstruyendoelfuturo.stps.gob.mx/login/" target="_blank" rel="noreferrer">
                    Iniciar Sesión en Jóvenes Construyendo el Futuro 
                </a>
            </button>
        </div>
    );
};

const OperationRules = () => {
    return (
        <section className="operation-rules-container">
            <h2>Reglas de Operación</h2>
            <iframe
                src="https://dof.gob.mx/nota_detalle_popup.php?codigo=5676030"
                title="Reglas de Operación"
            >
            </iframe>
            <button>
                <a
                    href="https://jovenesconstruyendoelfuturo.stps.gob.mx/oficinas/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Consulta tú Oficina Virtual
                </a>
            </button>
        </section>
    );
};

const JCEF = () => {
    return (
        <section className="jcef-page-container">
            <img className="hero" src={Hero} alt="JCEF" />
            <FirstPart />
            <h1>Jóvenes Construyendo el Futuro</h1>
            <iframe 
                src="https://www.youtube.com/embed/aKpBVnE0M6I?si=qeSHESmFhFBGt763" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
            <OperationRules />
        </section>
    );
};

export default JCEF;