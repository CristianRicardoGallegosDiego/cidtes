import React from "react";
import "./GeneralInduction.css";

const GeneralInduction = () => {
    return (
        <section className="induction-container">
            <div className="general-induction-container">
                <div className="title-container">
                    <h1>Inducción General</h1>
                </div>
                <div className="notice-general-induction-container">
                    <h2>Hola, bienvenida y bienvenido a CIDTES.</h2>
                    <div>
                        <p className="title">Te preguntarás <strong>¿Qué es CIDTES?</strong></p>
                        <p>En este momento se encuentra alguien de Recursos Humanos contigo para pode realizar tu inducción, a continuación observa el siguiente video:</p>
                    </div>
                </div>
                <div>
                    <iframe 
                        title="Inducción General"
                        src="https://drive.google.com/file/d/1qPdCFHnWLHO7Ih28C52DU30cNQUcRYR4/preview" 
                        allow="autoplay"
                        width="100%"
                        height="100%"
                        className="general-induction-drive video-drive-gi"
                    >
                    </iframe>
                </div>
            </div>
            <div className="induction-syst-container">
                <div className="title-container">
                    <h1>Inducción SYST</h1>
                </div>
                <div>
                    <iframe
                        title="Inducción SYST"
                        src="https://drive.google.com/file/d/19oIFGCXvXfpb1T8PPnp5IFWkdTgLqWde/preview" 
                        allow="autoplay"
                        width="100%"
                        height="100%"
                        className="general-induction-drive"
                    >
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default GeneralInduction;