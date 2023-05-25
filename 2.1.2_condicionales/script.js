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

// usar && se agrega otra condicion (Y) se tienen que cumplir los dos
if ("123455" === prompt(`pon tu contraseña`) && 18 <= parseInt(prompt("dame tu edad")))  {
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
}





