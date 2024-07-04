import React from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ItemDrawerOne from "../../common/items-drawer/ItemDrawerOne/ItemDrawerOne.jsx";
import ItemDrawerTwo from "../../common/items-drawer/ItemDrawerTwo/ItemDrawerTwo.jsx";
import ItemDrawerThree from "../../common/items-drawer/ItemDrawerThree/ItemDrawerThree.jsx";
import Induction from "./database/induccion.json";
import SimpleItemsSS from "./database/social-service/simple-items.json";
import ComplexItemSS from "./database/social-service/complex-item.json";
import MarketingAndDesign from "./database/marketing-y-disenno.json"; 
import "./DrawerMuiCore.css";

const DrawerMuiCore = (props) => {
    const {
        isOpen,
        setIsOpen
    } = props;

    const DrawerList = (
        <Box 
            sx={{ width: 275 }} 
            role="presentation"
        >
            <ItemDrawerOne 
                icon="fa-solid fa-sign-hanging"
                title="Avisos"
                link="/avisos"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <ItemDrawerTwo
                icon="fa-solid fa-puzzle-piece"
                title="Inducción"
                items={Induction}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <ItemDrawerThree
                icon="fa-solid fa-hands-holding-child"
                title="Servicio Social"
                simpleItems={SimpleItemsSS}
                complexItems={ComplexItemSS}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isThereSimplexItems={true}
            />
            <ItemDrawerOne 
                icon="fa-solid fa-arrows-to-circle"
                title="Coordinación"
                link="/coordinacion"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            {/**<ItemDrawerThree
                icon="fa-solid fa-users-gear"
                title="Equipo de CIDTES"
                complexItems={ComplexItemSS}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isThereSimplexItems={false}
            />**/}
            <ItemDrawerTwo
                icon="fa-solid fa-lightbulb"
                title="Marketing y Diseño"
                items={MarketingAndDesign}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
            <ItemDrawerOne 
                icon="fa-solid fa-seedling"
                title="Jóvenes Construyendo el Futuro"
                link="/jovenes-construyendo-el-futuro"
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </Box>
    );

    return (
        <div>
            <Drawer 
                open={isOpen} 
            >
                <button
                    className="drawer-close-button-mine"
                    onClick={() => setIsOpen(!setIsOpen)}
                >
                    <FontAwesomeIcon 
                        icon="fa-solid fa-circle-xmark"
                        alt="Cerrar visualizador"
                    />
                    <h2>Cerrar</h2>
                </button>
                {DrawerList}
            </Drawer>
        </div>
    );
};

export default DrawerMuiCore;