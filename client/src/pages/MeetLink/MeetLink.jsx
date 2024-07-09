import React, {
    useState,
    useEffect
} from "react";
import { 
    useParams,
    useNavigate
} from "react-router-dom";
import Views from "./views.json";
import Meet from "../../assets/images/meet.gif";
import "./MeetLink.css";

const MeetLink = () => {
    const { view } = useParams();
    const navigate = useNavigate();
    const [viewData, setViewData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const foundView = Views.find(v => v.id === view);
            if (!foundView) {
                navigate('/404');
                return;
            }
            setViewData(foundView);
        };

        fetchData();
    }, [view, navigate]);

    if (!viewData) {
        return null; 
    }

    return (    
        <section className="meet-link-container">
            <div className="card-link-container">
                <h1>Enlace a Reunión Google Meet</h1>
                <div className="meet-link-info-container">
                    <img src={Meet} alt="Google Meet" />
                    <div className="info">
                        <h2>{viewData.title}</h2>
                        <div className="meet-info"> 
                            <p>Para unirte a la videollamada, haz clic en este enlace:</p>
                            <a
                                href={`https://meet.google.com/${viewData.meet_link}`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                {`https://meet.google.com/${viewData.meet_link}`}
                            </a>
                        </div>
                        <div className="more-meet-info">
                            <p>Si quieres unirte por teléfono, llama al siguiente número y escribe el PIN:</p>
                            <ul>
                                <li>Número Telefónico: <span>{viewData.phone}</span></li>
                                <li>PIN: <span>{viewData.pin}</span></li>
                            </ul>
                        </div>
                        <div className="extra-meet-info">
                            <p>Para ver más números de teléfono, haz clic en este enlace:</p>
                            <a
                                href={`https://tel.meet/${viewData.phone_link}`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                {`https://tel.meet/${viewData.phone_link}`}
                            </a>
                        </div>
                        <div className="btn-google-meet">
                            <a
                                href={`https://meet.google.com/${viewData.meet_link}`}
                                rel="noreferrer"
                                target="_blank"
                            >
                                Ir a la reunión
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MeetLink;