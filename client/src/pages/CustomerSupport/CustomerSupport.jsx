import React from "react";
import CS from "./customer-support.json";
import "./CustomerSupport.css";

const CustomerSupport = () => {
    return (
        <section className="customer-support-container">
            <div className="main-container">
                <h1>Atención a Usuarios</h1>
                <p className="p">Si has encontrado algún obstáculo o tienes alguna consulta de los puntos debajo, no dudes en completar el formulario a continuación. Estamos aquí para ofrecerte una solución rápida y eficiente. </p>
                <div className="cs-items-container">
                    {
                        CS.map((item, index) => {
                            return (
                                <div key={index}>
                                    <h2>{item.title}:</h2>
                                    <ul>
                                        {
                                            item.problems.map((problem, subindex) => {
                                                return (
                                                    <li key={subindex}>
                                                        <p>{subindex + 1}.- {problem}</p>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            );
                        })
                    }
                </div>
                <iframe 
                    title="Encuesta de Atención a Usuarios"
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdc2g6KPfXSntcEt3OQyp94_YOVsEWPhPckTygTkKFLGJXd2w/viewform?embedded=true&quot" 
                >
                </iframe>
            </div>
        </section>
    );
};

export default CustomerSupport;