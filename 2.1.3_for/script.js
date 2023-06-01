//Un bucle es una estructura de control que repite instrucciones. Un bucle entonces nos permite repetir un bloque de instrucciones determinado hasta que se cumpla cierta condición. Cada repetición se suele llamar iteración.

//CICLO WHILE

/* let contador = 0

while (contador <= 5) {
    console.log ("El contador es: " + contador)
    //contador = contador + 1
    contador++
}

console.log("Fin del bucle") */

// CICLO DO WHILE

/* let contador = 0
do {
    console.log ("Hola soy un do while")
} while (contador) 

console.log("Fin del bucle")
 */

// CICLO FOR

/* for (let contador = 0; contador <= 5; contador++) {
    //codigo a ejercutar en cada iteracion
    console.log ("El contador es " + contador)
}
 */
/* console.log ("Fin del bucle") */

// tipos de datos: primitivos: strings, null, undefined, numbers, symbol
// complejos: objetos y arreglos

// complejos: objeto

/* const casa = {
    puertas: 5,
    habitaciones: 4,
    apagadores: 16,
    infocasa: function() {
        console.log("la casa tiene: " + this.puertas + " puertas")
    }
}

console.log (casa.infocasa ())

const casa0 = {
    puertas: 10,
    propietario: "Carlos",
    habitaciones: 6,
    apagadores: 32,
}

const casa1 = {
    puertas: 7,
    propietario: "Maria",
    habitaciones: 5,
    apagadores: 23,
}

const casa2 = {
    puertas: 5,
    propietario: "Julieta",
    habitaciones: 4,
    apagadores: 16,
}


// complejos: arreglos = tipo de dato que nos permite guardar cosas 
const frutas = ["uva", "platano", "manzana"]
const loteria = [100, 200, 300, 400]
const colonia = [casa0, casa1, casa2] //objetos
// como puedo acceder al contenido de un arreglo se hace mediante el indice
console.log(colonia [2]. propietario)

for (let i = 0; i <= 2; i++) {
    console.log("tienes que comprar " + frutas [i])
}

console.log ("Fin del bucle") */
