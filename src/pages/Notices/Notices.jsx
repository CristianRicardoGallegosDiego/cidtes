import React from "react";
import { Link } from "react-router-dom";
import { ParallaxScroll } from "../../components/ui/ParallaxScroll";
import Notice1 from "../../assets/images/pages/notices/noticeone.png";
import JCEFImg from "../../assets/images/pages/notices/jcef.jpg";
import "./Notices.css";

const NoticeOne = () => {
    return (
        <div>
            
        </div>
    );
};

const JCEF = () => {
    return (
        <div className="jcef-container">
            <Link to="/jovenes-construyendo-el-futuro" >
                <h1>Inicio de programa de "Jóvenes Construyendo el Futuro" en CIDTES</h1>
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
                <h1>Cuponera CANACO</h1>
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