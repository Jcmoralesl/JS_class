const express = require('express');
const app = express();
const port = 3000;


// app.get para obtener la informacion
app.get('/', (req, res) => {
    res.send('Hola hermoso mundo!')
});

//crea un puerto en mi computadora 
app.listen(port, () => {
    console.log(`Aplicacion de ejemplo en el puerto: ${port}`)
});
