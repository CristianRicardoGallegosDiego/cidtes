import React from "react";
import CronosImg from "../../assets/images/pages/attendance-record/cronos.png";
import Commit from "../../assets/images/pages/attendance-record/bitacora.gif";
import Email from "../../assets/images/pages/attendance-record/mail.gif";
import WhatsApp from "../../assets/images/pages/attendance-record/whatsapp.png";
import "./AttendanceRecord.css";

const AttendanceRecord = () => {
    return (
        <section className="attendance-record-container">
            <div className="card-a-r-container">
                <h1>Registro de Asistencia</h1>
                <p>Todo el equipo de CIDTES está obligado a registrar su asistencia. Por favor, sigue estos pasos:</p>
                <div className="cards-attendance-container">
                    <div className="card-a-t-c">
                        <h2>Bitácora (Presencial/Híbrido)</h2>
                        <p>Regístrate en la bitácora de asistencia.</p>
                        <img src={Commit} alt="Bitácora" />
                    </div>
                    <div className="card-a-t-c">
                        <h2>CRONOS</h2>
                        <p>Inicia sesión en la plataforma de CRONOS.</p>
                        <div className="cr-ar-c">
                            <a href="http://cronoscidtes.ddns.net/TCronos/" target="_blank" rel="noreferrer" className="img-atr">
                                <img src={CronosImg} alt="Cronos" />
                            </a>
                            <a 
                                href="http://cronoscidtes.ddns.net/TCronos/" 
                                target="_blank" 
                                rel="noreferrer"
                                className="btn-atr"
                            >
                                Ir a Cronos
                            </a>
                        </div>
                    </div>
                    <div className="card-a-t-c">
                        <h2>Correo Electrónico</h2>
                        <p>Envía tus evidencias a <a href="mailto:evidencias.cidtes@gmail.com" target="_blank" rel="noreferrer">evidencias.cidtes@gmail.com</a> Debes mostrar tus avances con un mensaje detallado de lo que realizaste. Anexa capturas de pantalla si es necesario.</p>
                        <img src={Email} alt="Correo Electrónico" />
                    </div>
                    <div className="card-a-t-c">
                        <h2>WhatsApp (Línea/Híbrido)</h2>
                        <p>Informa en tu grupo de WhatsApp del área la hora de inicio y la hora de término. Al finalizar, no olvides avisar que has terminado por ese día.</p>
                        <img src={WhatsApp} alt="WhatsApp" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AttendanceRecord;