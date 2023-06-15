// console.log (`hola mundo cruel`) prueba script 

const $lucesDelCirculo = document.querySelectorAll(`.luces_c`);

console.log ($lucesDelCirculo)

let contadorDeLuz = 0;

const mostrarLuz = () => {
    $lucesDelCirculo[contadorDeLuz].className = `luces_c`;
    contadorDeLuz++;

    if (contadorDeLuz > 2) contadorDeLuz = 0;
    
    const luzActual = $lucesDelCirculo [contadorDeLuz];
    luzActual.classList.add(luzActual.getAttribute(`color`))
}

setInterval (mostrarLuz, 2000)
