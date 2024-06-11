import 
    React, {
        useState 
    } 
from "react";
import { TextField } from "@mui/material";
import TruckStatic from "../../../assets/images/truck.svg";
import "./Contact.css";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    /**
     * Las siguientes funciones {handleName, handleEmail, handleMessage} se encargan de manejar los cambios en los campos de texto.
     * Es decir, verifica o hace los cambios en los campos, pero a la vez permite ver si es correcto
     * la entrada del usuario.
     */
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div>
            <form className="contact-container-section">
                <TextField 
                    id="name"
                    label="Nombre Completo"
                    helperText="Escribe tu nombre completo"
                    variant="outlined"
                    value={name}
                    onChange={(e) => handleName(e)}
                    fullWidth
                />
                <TextField 
                    id="email"
                    label="Correo Electrónico"
                    helperText="Escribe tu correo electrónico"
                    variant="outlined"
                    value={email}
                    onChange={(e) => handleEmail(e)}
                    fullWidth
                />
                <TextField 
                    id="message"
                    label="Mensaje"
                    helperText="Escribe tu mensaje"
                    multiline
                    rows={6}
                    variant="outlined"
                    value={message}
                    onChange={(e) => handleMessage(e)}
                    fullWidth
                />
                <button type="submit">
                    <img src={TruckStatic} alt="Truck" />
                    <h3>Enviar</h3>
                </button>
            </form>
        </div>
    );
};

export default Contact;