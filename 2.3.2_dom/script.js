const alumnosMali = ["Yinedth", "Steven", "Sharon", "Sebastian", "David"];

const alumnoSpan = document.querySelector(`#alumno`);

let index = 0;

// Recorrido circular de un arreglo
/**
 * index % tamaño del arreglo 
 * 0 % 5 == 0
 * ...
 * ...
 * ...
 * 6 % 5 == 1
 * 6 % 5 == 2
 * 7 % 5 == 3
 */

setInterval(saludar, 1500);

function saludar () {
    alumnoSpan.innerHTML = alumnosMali[index % alumnosMali.length]
    index++
};

function saludar1 () {
    alert ("Hola mundo")
}

// DOM = Document Object Model 


// GET ELEMENT: Obetener elementos 

// Para obtener elementos ID

const parrafo1 = document.getElementById(`parrafo1`)
const parrafo2 = document.getElementById(`parrafo2`)

console.log (parrafo1, parrafo2)

// Para obtener elementos por etiqueta 

const button = document.getElementsByName("button")
console.log (button)

// Para obtener elementos por clase 

const parrafo3 = document.getElementsByClassName("long")
console.log (parrafo3)

// querySelector: Puede funcionar como los 3 anteriores 
// para ID = usamos el # + el nombre del ID 
// para etiquetas = entre " " nombre de la etiqueta. nos devuelve el primero que encuentra 
// para una clase = . + nombre de la clase, devuelve el primero que encuentra con esa clase 

// querySelectorAll: devuelve todos los elementos que concidan con el selector 


// Como podemos convertir un note.list a un array 
