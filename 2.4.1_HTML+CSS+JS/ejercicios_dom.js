const baseDeDatos = [
    {
        id: 1,
        nombre: 'Aqua',
        precio: 200,
    },
    {
        id: 2,
        nombre: 'Emocion',
        precio: 180,
    },
    {
        id: 3,
        nombre: 'Alegria',
        precio: 160,
    },
    {
        id: 4,
        nombre: 'Frescura',
        precio: 150,
    }

];


let carritoJuana = [];
let carritoPedro = [];

const DOMañadir = document.querySelector(`#añadirPerfume`);
const DOMresultado = document.querySelector(`#resultadoVendedores`);
// const DOMvendedor = document.getElementById(`nombreVendedor`).value;
// const DOMperfume = document.getElementById(`nombreProducto`).value;
// const DOMcantidad = document.getElementById(`numero`).value; 

// function ShowSelected() {
/* Para obtener el valor */

// const DOMvendedor = document.getElementById(`nombreVendedor`).value;
// console.log (DOMvendedor)
// const DOMperfume = document.getElementById(`nombreProducto`).value;
// console.log (DOMperfume)
// const DOMcantidad = document.getElementById(`numero`).value;
// console.log (DOMcantidad)

/* Para obtener el texto */

//     const DOMvendedor = document.getElementById(`nombreVendedor`);
//     const ven = DOMvendedor.options [DOMvendedor.selectedIndex].text;

//     const DOMperfume = document.getElementById(`nombreProducto`);
//     const perf = DOMperfume.options [DOMperfume.selectedIndex].text;

//     const DOMcantidad = document.getElementById(`numero`);
//     const cant = DOMcantidad.options [DOMcantidad.selectedIndex].text;

//     DOMañadir.addEventListener(`click`, function(){ 
//         console.log(ven)
//         console.log(perf)
//         console.log(cant)
//     });

// }

const DOMvendedor = document.getElementById(`nombreVendedor`)
DOMvendedor.addEventListener(`change` , function () {
    var selectedOption = this.options [DOMvendedor.selectedIndex];
})

const DOMperfume = document.getElementById(`nombreProducto`);
DOMperfume.addEventListener (`change`,function (){
    var selectedOption = this.options [DOMperfume.selectedIndex];
})

const DOMcantidad = document.getElementById(`numero`);
DOMcantidad.addEventListener (`change`,function (){
    var selectedOption = this.options [DOMcantidad.selectedIndex];
})

DOMañadir.addEventListener(`click`, function(){ 
    console.log(DOMvendedor.value)
    console.log(DOMperfume.value)
    console.log(DOMcantidad.value) 
    
    if (DOMvendedor.value == `Juana`) {
        console.log("El vendedor es Juana");
        carritoJuana.push (DOMperfume.value)
        console.log(carritoJuana)
    } else if (DOMvendedor.value == `Pedro`) {
        console.log("El vendedor es Pedro");
        carritoPedro.push (DOMperfume.value)
        console.log(carritoPedro)
    }

});


