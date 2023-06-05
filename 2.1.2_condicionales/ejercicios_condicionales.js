//  EJERCICIOS JS: CONDICIONALES
//  EJERCICIOS JS 
// Primer ejercicio: Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

/* if ("si" === prompt(`¿eres bellisimo/a?`)) {
    console.log ("Ciertamente");
} else {
    console.log ("No te creo");
} */

// Otra forma de hacerlo

/* let respuesta = prompt ("¿Eres bellismo/a?");
if (respuesta === "si") {
    console.log ("Ciertamente.");
} else if (respuesta === "no") {
    console.log ("No te creo.");
} else {
    console.log ("No entiendo lo que me dices.");
} */

// Segundo ejercicio: Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm"

/* let n1 = prompt (`Escribe un numero`);
if (n1 % 2 === 0) {
    console.log (" "+n1+" es divisible entre 2");
} else {
    console.log (""+n1+" no es divisible entre 2");
} */

// Tercer ejercicio: Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert. 

/* let n2 = prompt (`Escribe un numero`);
if (n2%2 === 0) {
    alert ("El numero "+n2+" es par");
} else {
    alert ("El numero "+n2+" es impar");
} */

// Cuarto ejercicio: Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.

/* let n3 = prompt (`Escribe un numero`);
if (n3 == 1000) {
    alert ("Ganaste un premio");
} else {
    alert (" "+n3+" : Lo sentimos, sigue participando ");
}
 */
// Quinto ejercicio: Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.

/* let n4 = prompt (`Escribe un numero`);
let n5 = prompt (`Escribe otro numero`);

if (n4 < n5) {
    document.write ("El numero "+n4+" es el menor");
} if (n5 < n4) {
    document.write ("El numero "+n5+" es el menor");
}
 */
// Sexto ejercicio: Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

/* let n6 = prompt (`Escribe un numero`);
let n7 = prompt (`Escribe otro numero`);
let n8 = prompt (`EScribe un ultimo numero`);
 */
/* if  (n6 > n7 && n6 > n8) {
    document.write ("El numero "+n6+" es el mayor ");
} else if (n7 > n8) {
    document.write ("El numero "+n7+" es el mayor ");
} else if (n6 == n7 && n6 == n8) {
    document.write ("Los numeros son iguales");
} else {
    document.write ("El numero "+n8+" es el mayor ")
} */

// Septimo ejercicio: Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.

/* let dia = prompt ("Ingrese un día de la semana")
if (dia == "lunes") {
    console.log ("OH NO, empezo la semana");
} else if (dia == "viernes") {
    console.log ("¡YA CASI se acaba la semana. día de rumba");
} else if (dia == "sabado" || "domingo") {
    console.log ("A descansar, disfruta tu fin de semana");
} else {
    console.log ("Sigues en la semana, espera el fin de semana");
} */

// Octavo ejercicio: Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, “excelente” si es 10.

/* let nota = prompt ("Ingrese una calificación entre 1 y 10")

if ( nota < 1 || nota > 10) {
    alert ("Error, calificación fuera del rango");
} else if (nota < 6) {
    console.log ("Reprobado");
} else if (nota >= 6 || nota == 8) {
    console.log ("Regular");
} else if (nota == 9) {
    console.log ("Bien");
} else if (nota == 10) {
    console.log ("Excelente");
}  */

// Noveno ejercicio: Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de comida rápida cuánto le costará en función del topping que elija. ● El helado sin topping cuesta 50 MXN. ● El topping de oreo cuesta 10 MXN. ● El topping de KitKat cuesta 15 MXN. ● El topping de brownie cuesta 20 MXN. En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

/* let topping = prompt ("Escoge tu topping para tu helado");

if (topping === "helado")  {
    console.log ("Helado sin topping: 50 MXN");
} else if (topping === "oreo") {
    console.log ("El topping de Oreo cuesta 10 MXN");
    console.log ("Valor helado: 60 MXN")
} else if (topping === "kitkat") {
    console.log ("El topping de KitKat cuesta 15 MXN");
    console.log ("Valor helado: 65 MXN")
} else if (topping === "brownie") {
    console.log ("El topping de Brownie cuesta 20 MXN");
    console.log ("Valor helado: 70 MXN")
} else {
    console.log ("No tenemos este topping, lo sentimos")
    console.log ("Helado sin topping: 50 MXN");
}
 */

// Decimo ejercicio: Un conocido portal de educación en tecnología está ofreciendo programas para aprender a desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar mensualmente de acuerdo a la opción elegida.

/* let pro = prompt ("Bienvenido a nuestro portal, escribe el programa que presentas interes (Course, Carrera, Master)");

if (pro === "course") {
    console.log ("Valor mensual: 4999 MXN");
} else if (pro === "carrera") {
    console.log ("Valor mensual: 3999");
} else if (pro === "master") {
    console.log ("Valor mensual: 2999");
} else {
    console.log ("No contamos con ese programa")
}

let beca = prompt ("Cuentas con alguna beca (facebook, google, Jesua)")

if (beca === "facebook") {
    console.log ("20% de descuento: Course: 4000 MXN, Carrera: 3200 MXN, Master: 2400 MXN")
} else if (beca === "google") {
    console.log ("15% de descuento: Course: 4250 MXN, Carrera: 3400 MXN, Master: 2550 MXN")
} else if (beca === "Jesua") {
    console.log ("50% de descuento: Course: 2499 MXN, Carrera: 1999 MXN, Master: 1499 MXN")
} else {
    console.log ("No es valido ese descuento")
}

let pro1 = prompt ("Conoce el precio final de tu programa escogido");

if (pro1 === "course") {
    console.log (`4999 * 20% (facebook) * 2 meses = 8000 MXN.
    4999 * 15% (google) * 2 meses = 8500 MXN 
    4999 * 50% (Jesua) * 2 meses = 4998 MXN`);
} else if (pro1 === "carrera") {
    console.log (`3999 * 20% (facebook) * 6 meses = 19200 MXN.
    3999 * 15% (google) * 6 meses = 20400 MXN 
    3999 * 50% (Jesua) * 6 meses =  11994`);
} else if (pro1 === "master") {
    console.log (`2999 * 20% (facebook) * 12 meses = 28800 MXN.
    2999 * 15% (google) * 12 meses = 30600 MXN 
    2999 * 50% (Jesua) * 12 meses =  17988`);
} */

// Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:

/* Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total, si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. Considere qué:
total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos. */

let distancia = prompt ("Ingresa la distancia recorrida en kilometros")

let tipo = prompt ("Ingresa el tipo de vehiculo utilizado: coche, moto o autobus")

let coche = 0.20
let moto = 0.10
let autobus = 0.5

let valorCoche = ((distancia * coche) + 5)
let valorCoche1 = ((distancia * coche) + 10)

let valorMoto = ((distancia * moto) + 5)
let valorMoto1 = ((distancia * moto) + 10)

let valorAuto = ((distancia * autobus) + 5)
let valorAuto1 = ((distancia * autobus) + 10)

if (distancia <= 100 && tipo == "coche") {
    console.log (`Debes pagar ${valorCoche} dolares`)
} else if (distancia > 100 && tipo == "coche") {
    console.log (`Debes pagar ${valorCoche1} dolares`)
} else if (distancia <= 100 && tipo == "moto") {
    console.log (`Debes pagar ${valorMoto} dolares`)
} else if (distancia > 100 && tipo == "moto") {
    console.log (`Debes pagar ${valorMoto1} dolares`)
} else if (distancia <= 100 && tipo == "autobus") {
    console.log (`Debes pagar ${valorAuto} dolares`)
} else if (distancia > 100 && tipo == "autobus") {
    console.log (`Debes pagar ${valorAuto1} dolares`)
}

