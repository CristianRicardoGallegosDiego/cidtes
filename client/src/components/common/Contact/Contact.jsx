import 
    React, 
    {
        useState
    } from "react";
import { TextField } from "@mui/material";
import emailSender from "../../../services/emailSender";
import DialogMuiCore from "../../muicore/DialogMuiCore";
import BackdropMuiCore from "../../muicore/BackdropMuiCore";
import SnackbarMuiCore from "../../muicore/SnackbarMuiCore";
import TruckStatic from "../../../assets/images/truck.svg";
import "./Contact.css";


const Contact = () => {


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [openMessage, setOpenMessage] = useState(false);
    const [amIGoingToSubmit, setAmIGoingToSubmit] = useState(false);

    const [openAlert, setOpenAlert] = useState(false);
    const [severity, setSeverity] = useState("");
    const [title, setTitle] = useState("");
    const [messageAlert, setMessageAlert] = useState("");

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

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenMessage(true);
    };



    /* Función que se encarga ahora si del envio del correo. Aqui ya estamos seguros del envio. */
    const submitMessage = async () => {
        const formData = {
            name: name,
            email: email,
            message: message
        };
        try {
            const response = await emailSender.sendEmail(formData);
            setSeverity("success");
            setTitle("Envío Exitoso");
            setMessageAlert(response);

            setName("");
            setEmail("");
            setMessage("");

            setOpenAlert(true);
        } catch (error) {
            setSeverity("error");
            setTitle("¡Ups! Algo salió mal :(");
            setMessageAlert(error.message);
            setOpenAlert(true);
        } finally {
            setAmIGoingToSubmit(false);
        }
    };

    return (
        <div>
            <form className="contact-container-section" onSubmit={handleSubmit}>
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
            <DialogMuiCore
                id="dialog-contact-footer"
                title="¿Está seguro que desea enviar el mensaje?"
                description="Una vez enviado el mensaje, no podrá ser modificado. Nos pondremos en contacto con usted lo más pronto posible."
                textCancelButton="Cancelar"
                textConfirmButton="Enviar"
                openDialog={openMessage}
                setOpenDialog={setOpenMessage}
                setIsSubmitClicked={setAmIGoingToSubmit}
                submitFunction={submitMessage}
            />
            <BackdropMuiCore 
                isOpen={amIGoingToSubmit}
            />
            <SnackbarMuiCore 
                open={openAlert}
                setOpen={setOpenAlert}
                severity={severity}
                title={title}
                message={messageAlert}
            />
        </div>
    );
};

export default Contact;