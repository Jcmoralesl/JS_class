const saludar = nombre => {
    console.log ("Hola" +  nombre);
}

const elAdministrador = (callback, numero) => {
    console.log(callback, numero);
    callback(" un nombre" + numero);
}

elAdministrador(saludar, 5)

//otra aplicación

const saludar1 = nombre => {
    console.log("Hola "+ nombre);
};
const despedirse = nombre => {
    console.log("Adiós "+ nombre);
};
function nombreFunction(){
    console.log("Soy una función");
}

const elAdministrador1 =  (callback, numero, nombre) => {
    console.log(callback, numero);
    callback(`${nombre} - ${numero}`);
};

elAdministrador1(despedirse, 5, "Helado");

saludar("mali");