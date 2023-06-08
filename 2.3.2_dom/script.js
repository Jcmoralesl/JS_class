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

