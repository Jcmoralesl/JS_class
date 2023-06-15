// console.log (`hola mundo cruel`) prueba script 

const $lucesDelCirculo = document.querySelectorAll(`.luces_c`);

console.log ($lucesDelCirculo)

let contadorDeLuz = 0;

const mostrarLuz = () => {
    $lucesDelCirculo[contadorDeLuz].className = `luces_c`;
}
