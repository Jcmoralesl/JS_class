/* const PI = 3.1416;
const r = 2;

let areaCirculo = PI * (r**2);

console.log (areaCirculo); */

//Programa para ver promedio de calificaciones (1)

const stdin = process.openStdin();

let acumulador = 0;
const calificaciones = []
let totalCalificaciones

console.log (`Ingresa el numero de calificaciones totales: `)
stdin.addListener("data", (data) => {
    totalCalificaciones = parseInt(data.toString())
});

for (let contador = 0; contador < totalCalificaciones; contador++) {
    let calificacion

    stdin.addListener("data", (data) => {
        calificacion = parseInt(data.toString())
    });

    calificaciones.push(calificacion)
}

const promedio = acumulador / totalCalificaciones
console.log  (`Tus calificaciones son: `, calificaciones)
console.log (`tu promedio es: `, promedio)

process.exit ()

