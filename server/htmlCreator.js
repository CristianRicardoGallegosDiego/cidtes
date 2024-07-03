function htmlEmail (name, email, message) {
    return `
        <div>
            <p>El mensaje de a continuación fue obtenido de la sección de contacto de la página oficial de CIDTES A. C. con lo cuál alguien esta tratando de comunicarse con el equipo de CIDTES. Resta decir, que respondan y se pongan en contacto con la prioridad necesaria. </p>
            <p>Como recomendación de sistemas, ¡NUNCA ABRAN LOS LINKS DESDE LA PC!. De ser necesario, eviten abrir links si es que en el cuerpo de este correo hay links. </p> 
        </div>
        <div>
            <p><strong>NOMBRE: </strong> ${name}</p>
            <p><strong>CORREO ELECTRÓNICO: </strong> ${email}</p>
            <p><strong>MENSAJE: </strong> ${message}</p>
        </div>
    `;
}

module.exports = { htmlEmail };