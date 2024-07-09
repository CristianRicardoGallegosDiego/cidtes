import React, {
    useState,
    useEffect,
} from "react";
import { 
    useParams,
    useNavigate
} from "react-router-dom";
import TestJSON from "./test-information.json";
import "./InitialKnowledgeTest.css";

const InitialKnowledgeTest = () => {
    const { test } = useParams();
    const navigate = useNavigate();
    const [testData, setTestData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const testInfo = TestJSON.find(t => t.id === test);
            if (!testInfo) {
                navigate('/404');
                return;
            }
            setTestData(testInfo);
        };

        fetchData();
    }, [test, navigate]);

    if (!testData) {
        return null; 
    }

        return (
            <section className="initial-knowledge-test-container">
                <div className="card-container">
                    <h1>Test Inicial de Conocimientos.</h1>
                    <div className="iktc-container">
                        <div className="important-info">
                            <h2>{testData.title}</h2>
                            <p>A continuación responde el siguiente Google Forms:</p>
                            <p>Se te recomienda acceder con tu correo con el cual mandaste tu CV a recursos humanos, no lo envies con alguna cuenta de correo de CIDTES.</p>
                        </div>
                        <div className="second-part">
                            <div className="left-part">
                                <div className="qr">
                                    <p>Si te encuentras en un equipo de computo  de CIDTES puedes escanear el siguiente código QR:</p>
                                    <a
                                        href={testData.url_forms}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <img src={`/pages/initial-knowledge-test/${testData.id}.png`} alt={testData.title} />
                                    </a>
                                </div>
                                <div className="btn-container">
                                    <p>Puedes acceder al siguiente enlace para contestar el google Form:</p>
                                    <a 
                                        href={testData.url_forms} 
                                        target="_blank" 
                                        rel="noreferrer"
                                    >
                                        Ir al Google Form
                                    </a>
                                </div>
                            </div>
                            <div className="right-part">
                                <p>Puedes responder el google Form aqui mismo:</p>
                                <iframe
                                    title={testData.title}
                                    src={testData.url_forms}
                                >
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };

export default InitialKnowledgeTest;