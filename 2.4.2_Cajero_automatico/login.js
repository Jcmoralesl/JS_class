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
const input = document.querySelector(`input`);
const form = document.querySelector(`#login`);


form.addEventListener ('submit', function(e){
    e.preventDefault();
    const data = new FormData(form)
    
    const { email: loginEmail, password: loginPassword } = Object.fromEntries(data)
    console.log ({loginEmail, loginPassword})
    
    clienteBanco.forEach (objeto => {
        if (objeto.email === loginEmail && objeto.password === loginPassword) {
            const { email, password, ...restOfElements } = clienteBanco;
            window.localStorage.setItem('user', JSON.stringify({ ...restOfElements, email }))
            window.location.href = 'http://127.0.0.1:5500/2.4.2_Cajero_automatico/cajero.html'; 
        } else if (objeto.email != loginEmail || objeto.password != loginPassword) {
            alert("¡ERROR, los datos suministrados no son correctos!. Por favor vuelve a intentarlo")
            form.reset ();
        }
    })

})

