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

// Para cambiar los selectores por los valores dentro de ellos
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
    //para ver los valores seleccionados en la consola
    console.log(DOMvendedor.value)
    console.log(DOMperfume.value)
    console.log(DOMcantidad.value) 
    //Para obtener el valor del perfume seleccionado
    const domPer = document.getElementById("nombreProducto").value;
    
    precioProducto = baseDeDatos.forEach (objeto => {
        if (objeto.nombre == domPer) {
        console.log (objeto.precio)
        let precioProducto2 = objeto.precio
        } else {
            return 0;
        } 
    })
    
    //para realizar el push en el array de cada vendedor
    const venta = {perfume: DOMperfume.value, cantidad: DOMcantidad.value, total: DOMcantidad.value }
    if (DOMvendedor.value == `Juana`) {
        console.log("El vendedor es Juana");
        carritoJuana.push (venta)
        console.log(carritoJuana)
    } else if (DOMvendedor.value == `Pedro`) {
        console.log("El vendedor es Pedro");
        carritoPedro.push (venta)
        console.log(carritoPedro)
    }
});




