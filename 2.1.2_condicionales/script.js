//let nombre; -> undefined un valor no controlado que no existe
//let nombre = null; porque estoy dejando sin saber de que tipo seria la variable
/* let nombre = "";
console.log(`El valor de nombre antes del prompt: ${nombre}.`);
nombre = prompt("Ingresa tu nombre");
console.log(`El nombre ingresado es: ${nombre}.`); */

// Operadores logicos

/* 1 === 1.0
"1" == 1.0
"123455" = prom
"123455" === prompt('pon tu contraseña')
if ("123455" === prompt('pon tu contraseña')) {
    alert("Bienvenido, ya estamos adentro.")
}
if ("123455" === prompt('pon tu contraseña')) {
    alert("Bienvenido, ya estamos adentro.")
}
if ("123455" === prompt('pon tu contraseña')) {
    alert("Bienvenido, ya estamos adentro.");
} else {
    console.error("ALARMA: MENOR DE EDAD quiere robar mi cuenta");
} */

// EJERCICIOS CONDICIONALES

// usar && se agrega otra condicion (Y) se tienen que cumplir los dos
/* if ("123455" === prompt(`pon tu contraseña`) && 18 <= parseInt(prompt("dame tu edad")))  {
    alert ("Bienvenido, pudiste ingresar.")
} else {
    console.error ("ALARMA: MENOR DE EDAD quiere robar mi cuenta")
}

//  usar || se agrega otra condicion (O) debes cumplir con alguna de las condiciones

if (20 <= prompt(`cuanto traes`) || 18 <= parseInt(prompt(`dame tu edad`))) {
    alert("Bienvenido, ya estamos adentro");
} else {
    console.error("ALARMA: ERROR ALGUIEN QUIERE ENTRAR")
    document.write(`<h1>ALARMA: MENOR DE EDAD QUIERE COLARSE</h1>`)
} */

//  EJERCICIOS JS 

// Primer ejercicio: Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

if ("si" === prompt(`¿eres bellisimo/a?`)) {
    console.log ("Ciertamente");
} else {
    console.log ("No te creo");
}

// Otra forma de hacerlo

let respuesta = prompt ("¿Eres bellismo/a?");
if (respuesta === "si") {
    console.log ("Ciertamente.");
} else if (respuesta === "no") {
    console.log ("No te creo.");
} else {
    console.log ("No entiendo lo que me dices.");
}

// Segundo ejercicio: Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm"

let n1 = prompt (`Escribe un numero`);
if (n1 % 2 === 0) {
    console.log (" "+n1+" es divisible entre 2");
} else {
    console.log (""+n1+" no es divisible entre 2");
}

// Tercer ejercicio: Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert. 

let n2 = prompt (`Escribe un numero`);
if (n2%2 === 0) {
    alert ("El numero "+n2+" es par");
} else {
    alert ("El numero "+n2+" es impar");
}

// Cuarto ejercicio: Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

let n3 = prompt (`Escribe un numero`);
if (n3 == 1000) {
    alert ("Ganaste un premio");
} else {
    alert (" "+n3+" : Lo sentimos, sigue participando ");
}

// Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

let n4 = prompt (`Escribe un numero`);
let n5 = prompt (`Escribe otro numero`);

if (n4 < n5) {
    document.write ("El numero "+n4+" es el menor");
} if (n5 < n4) {
    document.write ("El numero "+n5+" es el menor");
}

// Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let n6 = prompt (`Escribe un numero`);
let n7 = prompt (`Escribe otro numero`);
let n8 = prompt (`EScribe un ultimo numero`);

if  (n6 > n7 && n6 > n8) {
    document.write ("El numero "+n6+" es el mayor ");
} else if (n7 > n8) {
    document.write ("El numero "+n7+" es el mayor ");
} else if (n6 == n7 && n6 == n8) {
    document.write ("Los numeros son iguales");
} else {
    document.write ("El numero "+n8+" es el mayor ")
}

// Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

