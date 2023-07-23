// Base de datos de los perfumes 
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

// Arrays de los empleados 
let carritoJuana = [];
let carritoPedro = [];

const DOMañadir = document.querySelector(`#añadirPerfume`);
const DOMresultado = document.querySelector(`#resultadoVendedores`);

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

// Funcion para añadir toda la información cuando le damos click en añadir

DOMañadir.addEventListener(`click`, function(){ 
    //para ver los valores seleccionados en la consola
    console.log(DOMvendedor.value)
    console.log(DOMperfume.value)
    console.log(DOMcantidad.value) 
    //Para obtener el valor del perfume seleccionado
    const domPer = document.getElementById("nombreProducto").value;
    
    //Variable precioP para poder sacar el valor que necesitamos del precio por perfume
    let precioP = "";
    //Buscar el nombre y precio del producto dentro de nuestros datos guardados
    precioProducto = baseDeDatos.forEach (objeto => {
        if (objeto.nombre == domPer) {
        const perfumePrecio = objeto.precio
        precioP = perfumePrecio;
        } else {
            return 0;
            
        }
    })
    console.log (precioP + " Precio del perfume seleccionado")

    //para realizar el push en el array de cada vendedor
    const venta = {perfume: DOMperfume.value, cantidad: DOMcantidad.value, total: DOMcantidad.value * precioP}
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

// Funcion para sacar el resultado de los vendedores 

DOMresultado.addEventListener(`click`, function() {
    //Suma todos los total del carrito de Juana
    const sumall = carritoJuana.map(item => item.total).reduce((prev, curr) => prev + curr, 0);
    console.log(sumall);
    //Suma todos los total del carrito de Pedro
    const sumall2 = carritoPedro.map(item => item.total).reduce((prev, curr) => prev + curr, 0);
    console.log(sumall2);
    // Comparación entre los dos vendedores
    if (sumall > sumall2) {
        console.log (`El vendedor del mes es Juana con una venta: $ ${sumall} comparado con Pedro que vendio: $ ${sumall2}.`)
    } else if (sumall < sumall2) {
        console.log (`El vendedor del mes es Pedro con una venta: $ ${sumall2} comparado con Juana que vendio: $ ${sumall}.`)
    } else if (sumall == sumall2) {
        console.log (`Este mes no hubo un mejor vendedor debido a que nuestros dos vendedores estrella quedaron empatados, Juana con: $ ${sumall} y Pedro $ ${sumall2}.`)
    }
})




