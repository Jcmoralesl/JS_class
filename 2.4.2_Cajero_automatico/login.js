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

//Llamamos las variables de los input y el boton 
const error = document.querySelector(`error-login`);
const input = document.querySelector(`input`);
const login = document.querySelector(`#login`);

console.log (input)
