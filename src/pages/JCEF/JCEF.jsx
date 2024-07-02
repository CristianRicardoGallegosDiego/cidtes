import React from "react";
import Hero from "../../assets/images/pages/jcef/jcef.jpg";
import LogoGob from "../../assets/images/pages/jcef/gobmex.jpg";
import FooterLogo from "../../assets/images/pages/jcef/bannergobmex.png";
import Img1 from "../../assets/images/pages/jcef/1.jpg";
import Img2 from "../../assets/images/pages/jcef/2.png";
import Img3 from "../../assets/images/pages/jcef/3.png";
import Img4 from "../../assets/images/pages/jcef/4.png";
import Img5 from "../../assets/images/pages/jcef/5.png";
import "./JCEF.css";

const FirstPart = () => {
    return (
        <div className="first-part">    
            <div>
                <img src={LogoGob} alt="Gobierno de México" />
                <img src={FooterLogo} alt="Complemento de Logo Gob" />
            </div>
            <a 
                href="https://jovenesconstruyendoelfuturo.stps.gob.mx/login/" 
                target="_blank" 
                rel="noreferrer"
                className="a"
            >
                Iniciar Sesión en Jóvenes Construyendo el Futuro 
            </a>
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
            <a
                href="https://jovenesconstruyendoelfuturo.stps.gob.mx/oficinas/"
                target="_blank"
                rel="noreferrer"
                className="a"
            >
                Consulta tú Oficina Virtual
            </a>
        </section>
    );
};

const InformationOfProgram = () => {
    return (
        <section className="information-of-program-container">
            <div className="first-display">
                <h2>Prerregistro como Aprendíz</h2>
                <a
                    href="https://jovenesconstruyendoelfuturo.stps.gob.mx/registroaprendiz.php"
                    target="_blank"
                    rel="noReferrer"
                >
                    <img src={Img3} alt="JCEF" className="aa" />
                </a>
                <a
                    href="https://jovenesconstruyendoelfuturo.stps.gob.mx/registroaprendiz.php"
                    target="_blank"
                    rel="noReferrer"
                    className="a"
                >
                    Registrate como Aprendíz
                </a>
            </div>
            <div className="jcef-infc-main">
                <div>
                    <h3>Seguro Médico por parte del IMSS</h3>
                    <p>Durante el periodo que te encuentres en capacitación en el Programa JFC, tendrás acceso a una cobertura de atención de la salud otorgada por el IMSS, que entre sus beneficios incluye:</p>
                    <p> 1.- Consulta médica general.</p>
                    <p> 2.- Seguro médico por enfermedades y maternidad: Asistencia médico-quirúrgica, farmacéutica, hospitalaria, así como la asistencia obstétrica.</p>
                    <p> 3.- Seguro médico por riesgos de trabajo: Asistencia médica-quirúrgica, farmacéutica; servicio de hospitalización, aparatos de prótesis y ortopedia y rehabilitación.</p>
                    <iframe
                        src="https://www.youtube.com/embed/H1ELf9L0HV8?si=xXerh7ub-prbEnOf" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    >
                    </iframe>
                </div>
                <div>
                    <h3>Apoyo de $6,310.00</h3>
                    <p>Una vez iniciado el periodo de capacitación, el aprendiz recibirá de manera mensual, un apoyo económico, hasta por 12 meses, otorgado por la Secretaría del Trabajo y Previsión Social y que equivale a $6,310.00 pesos (seis mil trescientos diez M.N.) a través de una tarjeta del Banco del Bienestar. </p>
                    <img src={Img4} alt="JCEF" />
                </div>
                <div>
                    <h3>Experiencia Laboral Adquirida en Capacitación</h3>
                    <p>Una vez finalizados los 12 meses de capacitación, la Secretaría del Trabajo y Previsión Social otorgará al aprendiz egresado una Constancia de Capacitación, misma que podrá contener las competencias técnicas desarrolladas y que fungirá como documento que acredite un año (12 meses) de experiencia laboral adquirida. </p>
                    <img src={Img5} alt="JCEF" />
                </div>
            </div>
        </section>
    );
};

const JCEF = () => {
    return (
        <section className="jcef-page-container">
            <img className="hero" src={Hero} alt="JCEF" />
            <FirstPart />
            <iframe 
                src="https://www.youtube.com/embed/aKpBVnE0M6I?si=qeSHESmFhFBGt763" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin"
                className="main-video"
                allowFullScreen
            >
            </iframe>
            <img src={Img1} alt="JCEF" className="img"/>
            <img src={Img2} alt="JCEF" className="img"/>
            <iframe 
                src="https://drive.google.com/file/d/1j-2AgMHoO7-rW_nhNk1Enq83m6_FSsrw/preview" 
                allow="autoplay"
                title="pdf-jcef"
                className="pdf-jcef"
            >
            </iframe>
            <InformationOfProgram />
            <OperationRules />
        </section>
    );
};

export default JCEF;