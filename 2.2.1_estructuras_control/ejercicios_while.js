//HEAD
// EJERCICIOS: WHILE

/* console.log ("Eyy mundo") */ //Prueba de script 

// EJERCICIOS WHILE 

// EJERCICIO 1: Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

/* let p1 = prompt ("Escribe un número")
let n = 0

while (n < p1) {
    n +=5;
    console.log(n)
} */

// EJERCICIO 2: Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.

/* let x = prompt ("Escribe un número entre 1 y 50")
let y = prompt ("Escribe otro número entre 1 y 50")
let n1 = 0

while (n1 < 50) {
    n1 ++;
    console.log(n1)
    if (n1 == x) {
        console.log (`¡LOTERÍA!`)
    }
    if (n1 == y) {
        console.log (`¡LOTERÍA!`)
    }
}
 */

//EJERCICIO 3: Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola. 

/* let numero = [];

while (true) {
    let caracter = parseInt(prompt("Digite un caracter"));
    if (caracter === 0) {
        break;
    } else if (!isNaN(caracter)) {
        numero.push(caracter);
    } else {
        console.log("error");
    }
    console.log(numero);
} */


// EJERCICIO 4: Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.

const y = []
let x = parseInt(prompt ("Escriba una letra o palabra"))

while (x !== "") {
    if (isNaN(parseInt(x))) {
        y.push (x);
    } else {
        alert ("Debe ingresar solo palabras o letras")
    }
    x=prompt("Escriba una letra o palabra, si no quieres ingresar mas numeros deja vacio")
}

console.log (y);