import React, {
    useState
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { Link } from "react-router-dom";
import DrawerMuiCore from "../../muicore/DrawerMuiCore/DrawerMuiCore";
//import NavigationRoutes from "./navigation.json";
import Logo from "../../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    return (
        <section className="header-main-c">
            <section className="header-container">
                <button
                    className="button-header"
                    onClick={() => setIsOpenDrawer(!isOpenDrawer)}
                >
                    <FontAwesomeIcon 
                        icon="fa-solid fa-bars" 
                        alt="Cerrar visualizador"
                    />
                </button>
                <div className="info-header-company-container">
                    <img src={Logo} alt="logo" />
                    <h1>Centro de Capacitación, Investigación y Desarrollo Tecnológico en Energía y Sustentabilidad CIDTES A. C.</h1>
                </div>
                <DrawerMuiCore
                    isOpen={isOpenDrawer}
                    setIsOpen={setIsOpenDrawer}
                />
            </section>
            {/**<nav className="routes-nav-container">
                <ul>
                    {
                        NavigationRoutes.map((route, index) => {
                            return (
                                <li key={index}>
                                    <Link 
                                        to={route.url}
                                    >   
                                        {route.title}
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </nav>**/}
        </section>
    );
};

export default Header;