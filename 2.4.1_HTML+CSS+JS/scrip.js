console.log(document); //referencia al DOM

// DOM: Modelo de Objetos de documento
// Modelo --> Contener la estructura estandar de nuestros documentos.
// Objeto --> Elemento de JS al cual podemos modificar e iterar por propiedades y metodos (funciones que pertenecen a una entidad) del objeto.
// Documento --> Documento de HTML

// Es una entidad que nos permite organizar en forma de codigo de JS el documento de HTML. 


//Puedo empezar a trabajar con los elementos del HTML

// CREAR
// LEER
// ACTUALIZAR
// BORRAR

document.getElementById("header");

const parrafo = document.createElement("p");

parrafo.innerText = "This is a paragraph";
console.log (parrafo);

//innerHTML --> hace referencia al html en el elemento(etiqueta)


//Actualizar lo que hay en el boddy, agregando un nuevo elemento
//document.body.appendChild (parrafo)

for (let index = 0; index <2; index++) {
    const parrafoDelFOR = document.createElement("p");
    parrafoDelFOR.innerText ="Este es un nuevo texto" + index;
    if(index === 0) {
        header.appendChild(parrafoDelFOR);
    } else {
        document.body.appendChild(parrafoDelFOR);
    }
}

//Borrar 

/* header.removeChild(parrafo);

header.style.backgroundColor = "green"; */


