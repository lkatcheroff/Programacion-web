//funciones

console.log(sumar(1, 2));

//funcion expresada: se puede llamar antes de declararse, conviene para esta materia usar esta
function sumar(a, b) {
    return a + b;
}

//funcion declarada: no se puede llamar antes de declararse
let restar = function (a, b) {
    return a - b;
}

//funcion flecha
let sumoCien = (a) => a+100


//estructuras condicionales
function dejarPasar(edad, acompaniado){
    if (edad >= 18 || acompaniado ===true){
        return ("Puede pasar");
    } else if (acompaniado === false){
        return ("No puede pasar");
    } else{
        return ("Hay un error")
    }
}

console.log(dejarPasar(17, true));
console.log(dejarPasar(17, false));
console.log(dejarPasar(19, true));
console.log(dejarPasar(19, false));


//operador ternario: "funcion flecha del if", es el signo de pregunta
edad < 18 || acompaniado === true ? "Puede pasar" : "No puede pasar"

/*------------------------------------------------------------------------*/

for (let i = 0 ; i <= 100; i++){
    console.log(i)
}

let x = 0
while (x<0){
    console.log(x)
    x++
}


let NUMEROS = [1,2,3,4,5]
for (let i = 0; i < NUMEROS.length; i++){
    console.log(NUMEROS[i])
}

/*------------------------------------------------------------------------*/
//callback: pasar una funcion como parametro de otra funcion
const prompt = require('prompt-sync')
const name = prompt("Cual es tu nombre?")
console.log(`Hola, ${name}`)