/* 
1. Ejercicio 1: Declaración de Variables
https://www.w3schools.com/js/js_variables.asp
Declara tres variables: una para almacenar tu ciudad, otra para almacenar tu país, y otra para almacenar tu edad de nacimiento. Imprime los valores en la consola y después intenta cambiar los valores y observa los resultados con let y const.
2. Ejercicio 2: Operaciones Matemáticas
https://www.w3schools.com/js/js_arithmetic.asp
Declara tres variables numéricas. Calcula el promedio de las tres y encuentra el residuo de la división de la suma total entre 2. Imprime los resultados.
3. Ejercicio 3: Tipos de Datos
https://www.w3schools.com/js/js_datatypes.asp
Declara una variable para almacenar un objeto que represente un coche con propiedades como marca, modelo y año. Imprime el tipo de cada propiedad con typeof.
4. Ejercicio 4: Arrays Básicos
https://www.w3schools.com/js/js_arrays.asp
Crea un array con los nombres de 5 ciudades que te gustaría visitar. Reemplaza el tercer elemento por otra ciudad y luego imprime el array actualizado.
5. Ejercicio 5: Array de Objetos
https://www.w3schools.com/js/js_objects.asp
Crea un array de 3 objetos que representen películas, cada una con título, director y año de lanzamiento. Imprime el director de la última película.
6. Ejercicio 6: Operadores Lógicos
https://www.w3schools.com/js/js_comparisons.asp
Declara tres variables booleanas y usa operadores lógicos para verificar si al menos dos son verdaderas. Imprime true o false en la consola dependiendo del resultado.
7. Ejercicio 7: Comparaciones
https://www.w3schools.com/js/js_comparisons.asp
Declara tres variables numéricas. Compara si el primer número es mayor que el segundo y menor que el tercero. Luego, verifica si el segundo número es distinto al tercero. Imprime los resultados de las comparaciones.
8. Ejercicio 8: Concatenación de Strings
https://www.w3schools.com/js/js_string_methods.asp
Declara dos variables que almacenen strings (por ejemplo, tu nombre y tu apellido). Luego, crea una tercera variable que concatene las dos primeras y muestra el resultado en la consola.
9. Ejercicio 9: Incremento y Decremento
https://www.w3schools.com/js/js_operators.asp
Declara una variable numérica y utiliza los operadores de incremento (++) y decremento (--) para modificar su valor. Imprime el valor de la variable después de cada operación.
10. Ejercicio 10: Propiedades de Objetos
https://www.w3schools.com/js/js_objects.asp
Crea un objeto que represente un estudiante con propiedades como nombre, edad y carrera. Accede e imprime cada propiedad del objeto.
11. Ejercicio 11: Arrays Multidimensionales
https://www.w3schools.com/js/js_arrays.asp
Crea un array que contenga dos arrays internos, cada uno con 3 números. Accede al segundo elemento del primer array interno.
12. Ejercicio 12: Operadores Relacionales
https://www.w3schools.com/js/js_comparisons.asp
Declara dos variables numéricas y utiliza los operadores >, <, >=, <=, ===, !== para comparar sus valores. Imprime el resultado de cada comparación.
13. Ejercicio 13: Uso de typeof con Variables No Definidas
https://www.w3schools.com/js/js_typeof.asp
Declara una variable sin asignarle un valor y otra variable con valor null. Utiliza typeof para imprimir el tipo de cada variable.
14. Ejercicio 14: Conversión de Tipos
https://www.w3schools.com/js/js_type_conversion.asp
Declara una variable que almacene un número como string (por ejemplo, "123"). Convierte este string a un número usando parseInt o Number y demuestra que ahora puedes realizar operaciones matemáticas con él.
*/

/*

// Ejercicio 1
let ciudad = "Buenos Aires"
const PAIS = "Argentina"
let edadNacimiento = 21
console.log(ciudad, PAIS, edadNacimiento)

//PAIS = "Brasil" //errror
edadNacimiento++
console.log(edadNacimiento)


// Ejercicio 2
let num1 = 10
let num2 = 20
let num3 = 35
let promedio = (num1 + num2 + num3) / 3
let residuo = (num1 + num2) % num3
console.log("el promedio es:", promedio, ", y el residuo es:", residuo)


// Ejercicio 3
const coche = {
    marca: "Ford",
    modelo: "Fiesta",
    anio: 2018,
    km: 15000.6
}
console.log(typeof(coche.marca))
console.log(typeof(coche.modelo))
console.log(typeof(coche.anio))
console.log(typeof(coche.km))


//Ejercicio 4
let ciudades = ["Londres", "Tokio", "Sidney", "Nueva York", "Roma"]
ciudades[2] = "Paris"
console.log(ciudades)


//Ejercicio 5
const peli1 = {
    titulo: "Cars",
    anio: 2006,
    director: "John Lasseter"
}
const peli2 = {
    titulo: "Cars 2",
    anio: 2012,
    director: "John Lasseter"
}
const peli3 = {
    titulo: "Cars 3",
    anio: 2017,
    director: "John Lasseter"
}

const pelis = [peli1, peli2, peli3]
console.log(pelis[2].director)


//Ejercicio 6
const bool1= true
const bool2 = true
const bool3 = false

console.log(bool1 && bool2)
console.log(bool1 && bool3)
console.log(bool2 && bool3)

console.log("Hay 2 trues?", (bool1 && bool2) || (bool1 && bool3) || (bool2 && bool3))


//Ejercicio 7
let num1 = 10
let num2 = 20
let num3 = 30
console.log(num1 > num2 && num1 < num3)
console.log(num2!=num3)


//Ejercicio 8
const nombre = "Lucas"
const apellido = "Katcheroff"
const full = nombre + " " + apellido 
console.log(full)


//Ejercicio 9
let num = 10
console.log(num++)
console.log(num--)
num ++
console.log(num)
num --
console.log(num)

//Ejericio 10
const estudiante = {
    nombre: "Lucas",
    edad: 21,
    carrera: "Analitica"
}
console.log(estudiante.nombre, estudiante.edad, estudiante.carrera)


//Ejercicio 11
const array = [[1,2,3], [4,5,6]]
console.log(array[0][1])


//Ejercicio 12
let num1 = 10
let num2 = 20
console.log(num1 > num2)
console.log(num1 < num2)
console.log(num1 >= num2)
console.log(num1 <= num2)
console.log(num1 === num2)
console.log(num1 !== num2)


//Ejercicio 13
let sinValor
let nulo = null
console.log(typeof(sinValor))
console.log(typeof(nulo))
*/


//Ejercicio 14
let numeroString = "123"
let numero = Number(numeroString)
console.log(numero + 321)
console.log(numero%2)
console.log(numero**2)