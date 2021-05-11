const renderExito = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Form Contact</title>
        <link rel="stylesheet" href="/static/style.css" />
      </head>
      <body>
          <div class="body-container">
              <h1>Información de contacto</h1>
              <h4>Sus datos fueron enviados con éxito</h4>
              <div class="container">
                  <div class="info-row"><p class="info-row_data">Nombre y Apellido: ${data.name} ${data.lastname}</p></div>
                  <div class="info-row"><p class="info-row_data">Edad: ${data.age}</p></div>
                  <div class="info-row"><p class="info-row_data">Email: ${data.email}</p></div>
                  <div class="info-row"><p class="info-row_data">País de Nacimiento: ${data.country}</p></div>
                  <div class="return">
                    <a class="submit-btn return-link" href="/">Volver</a>
                  </div>
              </div>
          </div>
      </body>
    </html>
    `;
};

const validarInfo = (data) => {
    const nombreError = validarSoloLetras(data.name);
    const apellidoError = validarSoloLetras(data.lastname);
    const edadError = validarSoloNumero(data.age);

    if (!nombreError || !apellidoError || !edadError) {
        return {
            msg: 'error en los datos volver a intentar',
            nombre: nombreError,
            apellido: apellidoError,
            edad: edadError,
        };
    }
};

const validarSoloLetras = (nombre) => {
    if (!/^[a-z ]+$/i.test(nombre)) {
        return 'debe contener solo letras';
    }
    return true;
};

const validarSoloNumero = (numero) => {
    if (!/^[0-9]+$/.test(numero)) {
        return 'debe contener solo numeros sin espacios';
    }
    return true;
};

module.exports = { success: renderExito, validate: validarInfo };