import React, {
    useState
} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DrawerMuiCore from "../../muicore/DrawerMuiCore/DrawerMuiCore";
import Logo from "../../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    return (
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
                <h1>Centro de Investigación Desarrollo Tecnológico en Energía y Sustentabilidad CIDTES A. C.</h1>
            </div>
            <DrawerMuiCore
                isOpen={isOpenDrawer}
                setIsOpen={setIsOpenDrawer}
            />
        </section>
    );
};

export default Header;