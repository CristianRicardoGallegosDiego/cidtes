import 
    React, 
    {
        useState,
        useEffect
    } from "react";
import { TextField } from "@mui/material";
import {
    isWithinLimitMinSpace,
    isValidName,
    isValidEmail,
    isCorrectEmail,
    isValidMessage,
    countWords
} from "../../../utils/validations.js";
import emailSender from "../../../services/emailSender";
import DialogMuiCore from "../../muicore/DialogMuiCore";
import BackdropMuiCore from "../../muicore/BackdropMuiCore";
import SnackbarMuiCore from "../../muicore/SnackbarMuiCore";
import StaticTruck from "../../../assets/images/truck.svg";
import DynamicTruck from "../../../assets/images/truck.gif";
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

    const [errorName, setErrorName] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);
    const [Truck, setTruck] = useState(StaticTruck);
    const [helperTextMessage, setHelperTextMessage] = useState('Enter your message.');

    /**
     * Las siguientes funciones {handleName, handleEmail, handleMessage} se encargan de manejar los cambios en los campos de texto.
     * Es decir, verifica o hace los cambios en los campos, pero a la vez permite ver si es correcto
     * la entrada del usuario.
     */
    const handleName = (e) => {
        if (!isValidName(e.target.value)) { return; }
        if (errorName) { setErrorName(false); }
        setName(e.target.value);
    };
    const handleEmail = (e) => {
        if (!isValidEmail(e.target.value)) { return; }
        if (errorEmail) { setErrorEmail(false); }
        setEmail(e.target.value);
    };
    const handleMessage = (e) => {
        if (!isValidMessage(e.target.value)) { return; }
        if (errorMessage) { setErrorMessage(false); }
        setMessage(e.target.value);

        const words = countWords(e.target.value);
        if (e.target.value === "" || words <= 2) {
            setHelperTextMessage("Ingrese su mensaje.");
        } else {
            setHelperTextMessage(`${words} / 500 palabras.`);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let isThereAnError = false;
        if (name === '' || !isWithinLimitMinSpace(name, 3)) {
            setErrorName(true);
            isThereAnError = true;
        }
        if (email === '' || !isCorrectEmail(email)) {
            setErrorEmail(true);
            isThereAnError = true;
        }
        if (message === '' || (countWords(message) <= 2)){
            setErrorMessage(true);
            isThereAnError = true;
        }

        if (isThereAnError) { return; }
        setOpenMessage(true);
    };

    /* Función que se encarga ahora si del envio del correo. Aqui ya estamos seguros del envio. 
     * NOTA: Si les estan dando mantenimiento al codigo, se ejecuta en el DialogMuiCore
     * , y se ejecuta cuando hay un click en el boton de confirmar.
    */
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
            setHelperTextMessage("Ingrese su mensaje.");
        } catch (error) {
            setSeverity("error");
            setTitle("¡Ups! Algo salió mal :(");
            setMessageAlert(error.message);
            setOpenAlert(true);
        } finally {
            setAmIGoingToSubmit(false);
        }
    };

    useEffect(() => {
        if (name !== '' && email !== '' && message !== '') {
            setTruck(DynamicTruck);
        } else {
            setTruck(StaticTruck);
        }
    }, [name, email, message]);
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
                    error={errorName}
                />
                <TextField 
                    id="email"
                    label="Correo Electrónico"
                    helperText="Escribe tu correo electrónico"
                    variant="outlined"
                    value={email}
                    onChange={(e) => handleEmail(e)}
                    fullWidth
                    error={errorEmail}
                />
                <TextField 
                    id="message"
                    label="Mensaje"
                    helperText={helperTextMessage}
                    multiline
                    rows={6}
                    variant="outlined"
                    value={message}
                    onChange={(e) => handleMessage(e)}
                    fullWidth
                    error={errorMessage}
                />
                <button type="submit">
                    <img src={Truck} alt="Truck" />
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