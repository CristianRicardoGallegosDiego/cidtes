const emailSender = {
    sendEmail: async (formData) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_EMAIL_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
    
            if (!response.ok) {
                throw new Error('¡Oops! Nuestro correo parece estar de vacaciones. Estamos trabajando para traerlo de vuelta. Por favor, intenta enviar tu mensaje un poco más tarde.');
            }
    
            return '¡Éxito! Tu mensaje ha emprendido su viaje digital hacia su destino. Pronto recibirá una calurosa bienvenida en la bandeja de entrada.';
        } catch (error) {
            throw new Error('¡Uh-oh! Nuestra conexión está jugando al escondite. Toma un respiro y vuelve a intentarlo cuando la señal esté más fuerte. ¡Tu mensaje está casi en su destino!');
        }
    }
};

export default emailSender;