/* let n1 = prompt (`Escribe un numero`);
if (n1 % 2 === 0) {
    console.log (" "+n1+" es divisible entre 2");
} else {
    console.log (""+n1+" no es divisible entre 2");
} */

console.log("Escribe tu nombre:");
const stdin = process.openStdin();

stdin.addListener("data", (data) => {
    console.log("Tu nombre es: " + data.toString());
    //process.exit();
})