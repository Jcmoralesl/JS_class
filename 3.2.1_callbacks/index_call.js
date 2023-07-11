const sumar = (a,b) => {
    return a + b;
}

const sumarAs = (a, b, callback) => {
    const  resultado = a+b;
    if (resultado > 0) {
    callback(resultado)
    }
}

console.log ("Antes de la suma")

sumarAs (4,3, function(resultado){
    console.log (resultado);
}) 

console.log ("Despues de la suma")

// EJERCICIO

const funcionMagica = (a, b, callback) => {
    callback (a,b);
};

const suma = (a,b) => console.log (a + b);
const resta = (a,b) => console.log (a - b);
const multiplicar = (a,b) => console.log (a * b);
const dividir = (a,b) => console.log (a / b);


funcionMagica (3,7, multiplicar);

