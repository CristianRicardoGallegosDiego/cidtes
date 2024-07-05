import React from "react";
import CronosImg from "../../assets/images/pages/cronos/cronos.png";
import "./Cronos.css";

const AnnouncementOne = () => {
    return (
        <section className="announcement-one-cronos-container">
            <h1>Revisión de Horas y Conservación de Contraseñas</h1>
            <div>
                <p>
                    Hola, compañeras y compañeros. Espero se encuentren lo mejor posible.
                </p>
                <p>
                    Es importante que cada integrante que se encuentre liberando su Servicio Social o Prácticas Profesionales revise su conteo de horas en plataforma CRONOS. Requerimos de su apoyo para confirmar que su conteo se subió correctamente, con motivo de evitar cualquier complicación en su proceso de Servicio Social. 
                </p>
                <p>
                    También recordarles la importancia de guardar su contraseña para evitar retrasos en su cumplimiento de horas. 
                </p>
            </div>
        </section>
    );
};

const AnnouncementTwo = () => {
    return (
        <section className="announcement-two-cronos-container">
            <h1>Recordatorio sobre el Inicio y Cierre de Sesión en CRONOS</h1>
            <div>
                <p>Esperamos que se encuentren muy bien. Queremos recordarles la importancia de iniciar y cerrar sesión correctamente en CRONOS, nuestro sistema de gestión de horarios. Hemos observado que algunos/as prestadores/as no están cumpliendo adecuadamente con este procedimiento, lo que puede ocasionar inconvenientes en el registro de asistencia y el cálculo de las horas laborales.</p>
                <p>Es crucial que al iniciar su jornada laboral, ingresen correctamente a CRONOS y registren su entrada. De igual manera, al finalizar su día de trabajo, es imprescindible cerrar sesión en el sistema para registrar su salida. Esto garantiza un registro preciso de las horas trabajadas y facilita la gestión de nóminas y horarios.</p>
                <p>Queremos informarles que cada empleado/a tiene dos oportunidades al mes para corregir posibles errores en el registro de asistencia en CRONOS. Sin embargo, si se excede este límite, no podrán iniciar sesión en el sistema hasta el próximo mes. Por lo tanto, es fundamental que presten atención a este procedimiento y lo lleven a cabo de manera adecuada.</p>
                <p>Les instamos a seguir las siguientes indicaciones:</p>
                <p>1.- Inicien sesión en CRONOS al comienzo de su jornada laboral.</p>
                <p>2.- Cierren sesión en CRONOS al finalizar su jornada laboral.</p>
                <p>3.- Verifiquen que los registros de entrada y salida sean correctos.</p>
                <p>4.- Corrijan cualquier error dentro del límite de dos oportunidades al mes.</p>
                <p>El cumplimiento de este procedimiento es responsabilidad de cada uno/a de ustedes y contribuye al buen funcionamiento de nuestra empresa. Les agradecemos de antemano su colaboración y compromiso en este aspecto.</p>
                <p>Si tienen alguna pregunta o requieren asistencia adicional para utilizar CRONOS, no duden en comunicarse con el departamento de Sistemas, para corrección de horas o fallas de nuestra parte de CRONOS.</p>
            </div>
        </section>
    );
};

const AttentionToFailure = () => {
    return (
        <section className="attention-to-failure">
            <h1>Atención a Fallas en CRONOS</h1>
            <div>
                <p>Si no se te registraron tus horas correctamente o tienes alguna situación, por favor, registre la incidencia en el siguiente Google Excel. Su colaboración nos ayudará a solucionar los problemas de manera más eficiente.</p>
                <iframe
                    src="https://docs.google.com/spreadsheets/d/1uo54sRdbzMaLo9EqeQPx7X8bvOYXhtSuLIUkubEfj8M/edit?usp=sharing"
                    title="Manual de Uso de CRONOS"
                    allow="autoplay"
                >
                </iframe>
                <a
                    href="https://docs.google.com/spreadsheets/d/1uo54sRdbzMaLo9EqeQPx7X8bvOYXhtSuLIUkubEfj8M/edit?gid=0#gid=0"
                    target="_blank"
                    rel="noreferrer"
                >
                    Ir a Google-Sheets
                </a>
            </div>

        </section>
    );
};

const Cronos = () => {
    return (
        <section className="cronos-main-container">
            <div className="cronos-sign-up-in-container">
                <h1>Plataforma de Registro de Horas de Servicio Social "CRONOS"</h1>
                <div>
                    <a href="http://cronoscidtes.ddns.net/TCronos/" target="_blank" rel="noreferrer">
                        <img src={CronosImg} alt="Cronos" />
                    </a>
                    <a 
                        href="http://cronoscidtes.ddns.net/TCronos/" 
                        target="_blank" 
                        rel="noreferrer"
                        className="cronos-redirection-link"
                    >
                        Ir a Cronos
                    </a>
                </div>
            </div>
            <AttentionToFailure />
            <div className="manual-container-cronos">
                <h1>Manual de Uso para la Plataforma "CRONOS"</h1>
                <iframe 
                    src="https://drive.google.com/file/d/1f409cgF1HsjYwlfVlU0b3S4N7FVl-a3G/preview" 
                    title="Manual de Uso de CRONOS"
                    allow="autoplay">
                </iframe>
                <div>
                    <p>Les hago reenvío del manual de uso, para que puedan revisarlo en caso de no recordar los pasos para su registro. </p>
                    <p>Cualquier duda o aclaración, pueden escribir a nuestro equipo de sistemas en <a href="mailto:sistemascidtes@gmail.com" target="_blank" rel="noreferrer" >sistemascidtes@gmail.com</a>, con su nombre y la duda a resolver como _asunto, por favor. </p>
                    <p>¡Que tengan una excelente semana!</p>
                </div>
            </div>
            <AnnouncementOne />
            <AnnouncementTwo />
        </section>
    );
};

export default Cronos;