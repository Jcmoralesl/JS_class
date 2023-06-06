//alert("Hola mundo cruel");

// FUNCIONES

/* const alumnosMali = [`Andreson`, `Jeffry`,`Andres`,`Steven`,`William`, `Jose Fernando`];

/* for (let index = 0; index < alumnosMali.length; index++) {
    console.log (index, alumnosMali[index]);
    console.log (`Enviado correo a, ${alumnosMali[index]}`);
    console.log (`Mensaje enviado: Hola ${alumnosMali[index]}, espero qué todo vaya bien y recibiras noticias pronto.`);
}

const senseiDevF = [`Seb`, `Omar`,`Joel`,`Francisco`,`Alfredo`, `Yaxk`]; 

//Como arreglar esto

function enviarCorreos (destinatarios, message) {
    for (let index = 0; index < destinatarios.length; index++) {
        console.log (index, destinatarios[index]);
        console.log (`Enviado correo a, ${destinatarios[index]}`);
        if (message) {
            console.log (message);
        } else {
            console.log (`Mensaje enviado: Hola ${destinatarios[index]}, espero qué todo vaya bien y recibiras noticias pronto.`);
        }
        }
        return "_____________CORREOS_ENVIADOS_____________"
    }

console.log(enviarCorreos (senseiDevF));
console.log (enviarCorreos (alumnosMali, "Espero que acaben sus tareas, si tienen dudas comuniquensen con David o conmigo")); */


// EJERCICIO PRENDER LUZ


//compara la hora actual con la esperada

function prenderLuz (hora, horaActual) {
    // conectarme a la luz
    if (hora === horaActual) {
        alert ("Prendimos lámpara")
        document.write (`<img src="encendido.jpg" alt="lampara_prendida">`)
        return true;
    }
    return false;
}

function revisarTiempos () {
    const fechaActual = new Date ();
    const horaActual = fechaActual.getMinutes();
    console.log (horaActual);
    const tiempoEncendidoLampara = 30;
    prenderLuz (tiempoEncendidoLampara, horaActual);
}


setInterval(() => {
    revisar = revisarTiempos();
}, 1000);

