import React from "react";
import Anuncio from "../../assets/images/pages/digital-mailbox/anuncio.jpeg";
import "./DigitalMailbox.css";

const DigitalMailbox = () => {
    return (
        <section className="digital-mailbox-section">
            <div className="announcement-image">
                <img src={Anuncio} alt="Anuncio" />
            </div>
            <div className="announcement-section">
                <h1>Buzón Digital</h1>
                <div className="announcement">
                    <h2>Buenos días, compañeros y compañeras.</h2>
                    <div>
                        <p>Si te encuentras liberando tu Servicio Social o Prácticas Profesionales en modalidad a distancia se les comparte el siguiente buzón de sugerencias. El objetivo es obtener áreas de oportunidad en las que podemos mejorar y atender los comentarios, quejas o sugerencias que vayan surgiendo durante su proceso de liberación. El buzón no tiene caducidad y se estará revisando periódicamente durante las juntas del Departamento de Recursos Humanos, por lo que es un recurso que pueden utilizar semanalmente. </p>
                        <p>Sus observaciones pueden ser anónimas o pueden anotar su nombre, si así lo desean. </p>
                        <p>De igual forma, si quieren tratar temas más urgentes o personales pueden escribir al correo 
                            <a 
                                href="mailto:rhcidtes@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                rhcidtes@gmail.com
                            </a> 
                            o  en este mismo grupo de Whatsapp. </p>
                        <p>El link estará en la descripción del grupo. </p>
                        <p>Y también, aprovechar en recordarle a los compañeros y compañeras que se encuentran liberando su Servicio en modalidad a presencial, el buzón de sugerencias se encuentra en el piso de arriba, en el área de Sistemas.</p>
                        <p>Que tengan un excelente día!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DigitalMailbox;