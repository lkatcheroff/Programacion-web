/*
javascript es de tipado debil, es decir que no es necesario declarar el tipo de dato de una variable
*/
let nombre = "Juan";
let edad = 30;
let casado = false;

/* let habita solo en el entorno local, var habita en todos lados: deprecado */
/* vamos a usar let */

/*undefined: no esta definido, null: esta definido y vacio*/

const nombre2 = "Lucas" //constante, no cambia su valor, y no se puede editar

//arrays
let frutas = ["manzana", "pera", "banana"];
const FRUTAS = ["manzana", "pera", "banana"];
const VARIADO = ["hola", 4, true];
const ARRAYMULTIPLE = [[1,2,3], [4,5,6], [7,8,9]];

VARIADO.push("chau"); //agrega un elemento al final del array, no importa que sea en constante
/*es constante porque hace referencia a la posicion en memoria de un array,
y lo que esta por dentro se puede modificar*/

console.log(VARIADO[0]);
console.log(nombre2[0]); //devuelve toda la constante

let profesor = {
    nombre: "Esteban",
    edad: 32,
    profesor: true,
    cumplirAnios: function(){
        this.edad = this.edad + 1;
    }
}

console.log(profesor.nombre);

/*array de objetos literales: igual que en python*/
const alumnos = [
    {
        nombre: "Juan",
        edad: 20,
        profesor: false
    },
    {
        nombre: "Lucas",
        edad: 21,
        profesor: false
    }
]

console.log(alumnos[0].nombre);
console.table(alumnos);


//operadores logicos
console.log(1 && 2)//devuelve 2, necesito que los 2 sean verdaderos
console.log(1 || 2)//devuelve 1, necesito que uno sea verdadero, entonces lo devuelve

//truthy y falsy: hay objetos que se asumen falsos, y otros que verdaderos

//operadores matematicos
//+, -, *, /, %, **
//sale mucho NaN (not a number))

//operadores de comparacion
// ==, ===, !=, !==, >, <, >=, <=
// == compara valor (igualdad debil), === compara valor y tipo de dato (igualdad estricta)


//parseo de datos
console.log(Number("2")); //parsea a numero
console.log(parseInt("2")); //parsea a entero, si fuese 3.14 devolveria 3
console.log(parseFloat("2.5")); //parsea a float

//typeof(): devuelve el tipo de dato de una variable
//toFixed(num): corta los valores, como si fuera slicing, a num decimales