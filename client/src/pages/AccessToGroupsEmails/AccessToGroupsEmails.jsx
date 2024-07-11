import React from "react";
import QR from "../../assets/images/pages/access-to-groups-emails/qr.png";
import Phone from "../../assets/images/pages/access-to-groups-emails/qr-follow.png";
import One from "../../assets/images/pages/access-to-groups-emails/1.png";
import Two from "../../assets/images/pages/access-to-groups-emails/2.png";
import Three from "../../assets/images/pages/access-to-groups-emails/3.png";
import "./AccessToGroupsEmails.css";

const AccessToGroupsEmails = () => {

    const URL_TO_WHATSAPP = "https://www.google.com/url?q=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D%2B5215513541365%26text%3DBuenos%2520d%25C3%25ADas%2520ingeniero%2520Javier%2C%2520mi%2520nombre%2520es%3A-----------%2C%2520soy%2520del%2520%25C3%25A1rea%2520de%3A--------%2C%2520mi%2520horario%2520ser%25C3%25A1%3A-----------%2C%2520soy%2520de%2520la%2520carrera%2520de%3A---------%2520.Me%2520podr%25C3%25ADa%2520agregar%2520a%2520los%2520grupos%2520por%2520favor%3F&sa=D&sntz=1&usg=AOvVaw1mZwGUla67bmtnZ6O80dh6"

    return (
        <section className="access-to-groups-emails-container">
            <div className="access-to-whatsapp-container">
                <h1>Acceso a Grupos de WhatsApp</h1>
                <p>Una vez aceptado en el equipo de CIDTES, redacta un mensaje de WhatsApp dirigido al Ingeniero Javier. Puedes escanear el siguiente código QR o pulsar el botón de abajo para enlazarte a WhatsApp.</p>
                <div className="images-container">
                    <div className="qrs-container">
                        <a
                            href={URL_TO_WHATSAPP}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={QR} alt="QR" />
                        </a>
                        <a
                            href={URL_TO_WHATSAPP}
                            target="_blank"
                            rel="noreferrer"
                            className="button-accec-to-whatsapp"
                        >
                            Enviar mensaje para unirte a los grupos
                        </a>
                    </div>
                    <div className="phone-container">
                        <img src={Phone} alt="Phone" />
                    </div>
                </div>
            </div>
            <div className="access-to-emails-container">
                <h1>Acceso a Correos Electrónicos</h1>
                <div>
                    <p className="patge">En caso de trabajar en la modalidad a distancia o hibrida(online), tendras que acceder a los correos de tu área correspondiente.</p>
                    <ul>
                        <li>
                            <p>1.- Ubica el correo de tu área correspondiente:</p>
                            <img src={One} alt="Ubica el correo de tu área correspondiente" />
                        </li>
                        <li>
                            <p>2.- Para ingresar, coordinate en tu grupo de WhatsApp de tu área correspondiente:</p>
                            <div>
                                <img src={Two} alt="Para ingresar, coordinate en tu grupo de WhatsApp de tu área correspondiente" />
                                <img src={Three} alt="Para ingresar, coordinate en tu grupo de WhatsApp de tu área correspondiente" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AccessToGroupsEmails;