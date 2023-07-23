//Base de datos de los clientes del banco
const clienteBanco = [
    {
        nombre: "Mali",
        email: "mali@gmail.com",
        cuenta: 1,
        password: "1234",
        saldo: 200,
        log: []    
    },
    {
        nombre: "Gera",
        email: "gera@gmail.com",
        cuenta: 2,
        password: "1234",
        saldo: 290,
        log: []
    },
    {
        nombre: "Maui",
        email: "maui@gmail.com",
        cuenta: 2,
        password: "1234",
        saldo: 67,
        log: []
    }    
];

//Llamamos las variables de los botones 

const retiro = document.getElementById(`retiros`)
const depositos = document.getElementById(`deposito`)
const saldo = document.getElementById(`saldo`)
const salida = document.getElementById(`salir`)

// Para cambiar los selectores por los valores dentro de ellos
const nombreCliente = document.getElementById(`nombreCliente`)
nombreCliente.addEventListener(`change` , function () {
    var selectedOption = this.options [nombreCliente.selectedIndex];
})

// Funcion para retirar dinero 

retiro.addEventListener(`click`, function () {
    console.log(nombreCliente.value)
    //Aqui va la funcion para realizar un retiro en base al valor seleccionado
    const montoRetiro= prompt("Ingrese el monto a retirar")
    console.log(montoRetiro)

    for (let i in clienteBanco){
        if(nombreCliente.value == clienteBanco[i].nombre){
            let saldoTotal = clienteBanco[i].saldo - montoRetiro
            clienteBanco[i].saldo = saldoTotal
            console.log(clienteBanco)
            alert (`Se ha realizado exitosamente su solicitud, se retiro $ ${montoRetiro} dollares. Su cuenta presenta un saldo total de $${saldoTotal} dolares`)
        }
    }
})

//Funcion para consultar el saldo de la cuenta

saldo.addEventListener (`click`, function(){
    console.log(nombreCliente.value)
    //Aqui va la funcion para consultar el saldo de la cuenta 
    for (let i in clienteBanco) {
        if(nombreCliente.value === clienteBanco[i].nombre){
            alert (`Hola ${clienteBanco[i].nombre}, tu saldo en tu cuenta de ahorros es $${clienteBanco[i].saldo} dolares`)
        }
    }
})

//Funcion para depositar dinero en tu cuenta 

depositos.addEventListener(`click`, function(){
    console.log(nombreCliente.value)
    // Aqui va la funcion para hacer depósitos en nuestra cuenta
    //Usamos el parseInt para que el valor ingresado se transforme a numero
    const montoDeposito = parseInt(prompt(`Ingrese el valor del monto que desea ingresar`))
    console.log(montoDeposito)
    for (let i in clienteBanco){
        if(nombreCliente.value==clienteBanco[i].nombre){
            let nuevoSaldo = clienteBanco[i].saldo + montoDeposito
            clienteBanco[i].saldo = nuevoSaldo
            console.log(clienteBanco)
            alert(`Se ha realizado exitosamente su solicitud, a ingresado a su cuenta un monto de $${nuevoSaldo} dolares. Su cuenta presenta un saldo total de $${nuevoSaldo} dolares`)
        }
    }
})

//Funcion para salir de la plataforma de usuario y volver al login 

salida.addEventListener(`click`, function(){
    //puede usar el confirm para preguntar si quire realizar una acción
    if (confirm("Quieres abandonar tu plataforma virtual ahora")) {
        window.location="login.html"
    } else {
        window.location="http://127.0.0.1:5500/2.4.2_Cajero_automatico/cajero.html"
    }
})