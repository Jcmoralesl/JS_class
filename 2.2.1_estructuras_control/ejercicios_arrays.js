/* console.log (`Hola mundo`) */ // Confirmación del script

//EJERCICIOS ARRAYS (ARREGLOS)

// EJERCICIO 1:  Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el resultado del array.

const numeros1 = [] 

let a = Math.random()*10
console.log (a)

let b = Math.random()*9
console.log (b)

let c = Math.random()*8
console.log (c)

let d = Math.random()*7
console.log (d)

let e = Math.random()*6
console.log (e)

let f = Math.random()*5
console.log (f)

let g = Math.random()*4
console.log (g)

let h = Math.random()*3
console.log (h)

let i = Math.random()*2
console.log (i)

let j = Math.random()*2
console.log (j)

numeros1.push (a, b, c, d, e, f, g, h, i, j)
console.log (numeros1)

// EJERCICIO 2: El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.

let v1 = prompt ("Escribe varias palabras separadas por comas")
let palabras = v1.split (',')
console.log (palabras)

// EJERCICIO 3: De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor, muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor y menor elemento de un arreglo.

const n1 = [10,40,30,20,15,5]

n1.sort(function(a,b){return a-b})
console.log (n1)

const min= Math.min.apply(null, n1)
const max= Math.max.apply(null, n1)

console.log (min)
console.log (max)
