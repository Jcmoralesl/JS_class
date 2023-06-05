// HEAD
// EJERCICIOS: FOR 

/* console.log ("¡Hello guys!") */ //Confirmación script/html

// EJERCIOS FOR 

// EJERCICIO 1: Crea un programa que imprima en consola los números impares del 1 al 50.

/* function numerosImpares () {
    for (let index = 1; index <= 50; index += 2) {
        console.log (index);
    }
}
 */
/* numerosImpares (); */

// EJERCICIO 2: Crea un programa que pregunte al usuario un número. Usando el archivo de arreglo de Pokémons, mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. 

/* let x = prompt ("Escribe un número")
const pokemon = ['bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle','blastoise','caterpie','metapod','butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot','rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash','nidoran-f','nidorina','nidoqueen','nidoran-m','nidorino', 'nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff','wigglytuff','zubat','golbat','oddish',
'gloom','vileplume','paras','parasect','venonat','venomoth','diglett','dugtrio','meowth','persian','psyduck','golduck',
'mankey','primeape','growlithe','arcanine','poliwag','poliwhirl','poliwrath','abra','kadabra','alakazam','machop','machoke',
'machamp','bellsprout','weepinbell','victreebel','tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash',
'slowpoke','slowbro','magnemite','magneton','farfetchd','doduo','dodrio','seel','dewgong','grimer','muk','shellder','cloyster','gastly','haunter','gengar','onix','drowzee','hypno','krabby','kingler','voltorb']

for (let index = 0; index < pokemon.length && index < x; index +=5) {
    console.log (index, pokemon[index])
} */

// EJERCICIO 3: Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] y muestre en consola solo los elementos que son tipo número.

let y = [4 ,'dos', 8, `tres`, 5, 9, 1, `cero`];

function soloNumeros(array) {
    let soloenteros = [];
    for (let i = 0; i < array.length; i++) {
    if (typeof(array[i])=="number") { 
//       soloenteros[i] = array[i];
    soloenteros.push(array[i]);
    }; 
}
return soloenteros;
}  

console.log(soloNumeros(y));

