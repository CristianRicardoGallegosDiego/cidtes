import React from "react";
import { Link } from "react-router-dom";
import { ParallaxScroll } from "../../components/ui/ParallaxScroll";
import Notice1 from "../../assets/images/pages/notices/noticeone.png";
import JCEFImg from "../../assets/images/pages/notices/jcef.jpg";
import "./Notices.css";

const NoticeOne = () => {
    return (
        <div className="notices-notice-one-container">
            <img 
                src={Notice1}
                alt="Aviso CIDTES"
            />
            <div>
                <h2>Trámites de Inicio de Servicio Social</h2>
                <p>Recuerda contactar a las compañeras de RH para que te asesoren en tus trámites de registro al servicio social (carta de presentación y carta de aceptación), el trámite en cada facultad es diferente.</p>
            </div>
        </div>
    );
};

const JCEF = () => {
    return (
        <div className="jcef-container">
            <Link to="/jovenes-construyendo-el-futuro" >
                <h2>Inicio de programa de "Jóvenes Construyendo el Futuro" en CIDTES</h2>
            </Link>
            <Link to="/jovenes-construyendo-el-futuro" >
                <img src={JCEFImg} alt="Jóvenes Construyendo el Futuro" />
            </Link>
        </div>
    );
};

const CANACO = () => {
    return (
        <div className="canaco-container">
            <div className="coupon-container">
                <h2>Cuponera CANACO</h2>
                <iframe 
                    title="Cuponera CANACO"
                    src="https://drive.google.com/file/d/1b8veA729CQ3B3hhlcWLwHSvPeuY1MtNO/preview"  
                    allow="autoplay"
                >
                </iframe>
            </div>
            <div>
                <ParallaxScroll />
            </div>
        </div>
    );
};

const Notices = () => {
    return (
        <section className="notices-main-container">
            <h1>Avisos CIDTES</h1>
            <NoticeOne />
            <JCEF />
            <CANACO />
        </section>
    );
};

export default Notices;