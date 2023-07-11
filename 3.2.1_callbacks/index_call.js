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