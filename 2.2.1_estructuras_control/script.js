// Estructuras de control o repetición (bucle)

// Debemos ver primero los arreglos (arrays): Manera ordenada de almacenar una lista de elementos. 

//Arreglos
const alumno1 = `Anderson`
const alumno2 = `Juan`
const alumno3 = `Camilo`

const alumnosMaliVacio = []; // crear un arreglo vacio

const alumnosMali = [ `Anderson`, `Juan`, `Camilo`]

console.log(alumnosMali)

// El arreglo va a ser una estructura que permite trabajar con ella por medio de acciones ya pre-hechas para poder cambiarlo. A estas acciones pertenecientes al arreglo les llamaremos métodos.

alumnosMali.push (`Steven`) // método para agregar cosas al objeto 

console.log(alumnosMali)

//alumnosMali.pop () //método para quitar el ultimo que se agrego

console.log(alumnosMali [2]) //Acceder a los valores de un arreglo

console.log (alumnosMali.length) //Conocer la cantidad de elementos del array

// Métodos de Arrays: Nos permiten interactuar con el arreglo

// push and pop lo hicimos anteriormente 
// unshift agrega al inicio
// shift elimina al principio de la lista

// slice: devuelve una copia de una parte del array dentro de un nuevo array. El original no lo toca. 

alumnosSeb = alumnosMali.slice(0,2)

console.log(alumnosSeb)

// splice: agregar o borrar elementos de un arreglo. (3,0) el es la posición en donde quieres agregar, y el 0 es la cantidad que quieres eliminar 

alumnosMali.splice (3,0, "Andres", "Ricardo","Susana")
console.log(alumnosMali)

// sort: Ordena la lista de forma ascendente (A-Z) por defecto

alumnosMali.sort ()
console.log(alumnosMali)

// concat: Une dos arreglos

var alumnosTotal = alumnosMali.concat(alumnosSeb)
console.log(alumnosTotal)