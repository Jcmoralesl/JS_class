function getRandomInt (max) {
    return Math.floor(Math.random () * max);
}



const miPromesa = new Promise ((resolve, reject) => {
    const numeroAleatorio = getRandomInt(10)
    if (numeroAleatorio>5) {
        resolve([true, numeroAleatorio]);    
    }
    reject ([false, numeroAleatorio, new Error ("Numero no mayor a 5")]);
});

miPromesa.then((resultadoPromesaFunciona) => {
    console.log (resultadoPromesaFunciona);
})

.catch((resultadoPromesaFalla) => {
    console.log (resultadoPromesaFalla);
})