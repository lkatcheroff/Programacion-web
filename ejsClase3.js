/*
1. Ejercicio 1: Función Declarada
https://www.w3schools.com/js/js_functions.asp
Escribe una función que tome tres números como argumentos y retorne el mayor de ellos. Llama a la función con diferentes valores e imprime el resultado.
2. Ejercicio 2: Función Expresada
https://www.w3schools.com/js/js_functions.asp
Crea una función expresada que reciba un array de strings y retorne un string que concatena todos los elementos del array separados por espacios.
3. Ejercicio 3: Función Flecha
https://www.w3schools.com/js/js_arrow_function.asp
Convierte la función del ejercicio anterior a una función de flecha. Además, agrega una validación para que, si el array está vacío, retorna un mensaje de advertencia.
4. Ejercicio 4: Estructura If-Else
https://www.w3schools.com/js/js_if_else.asp
Escribe una función que tome una temperatura en grados Celsius como argumento y devuelva un mensaje que indique si hace frío (menor a 15 grados), templado (entre 15 y 25 grados) o calor (mayor a 25 grados).
5. Ejercicio 5: Operador Ternario
https://www.w3schools.com/js/js_comparisons.asp
Reescribe una función que tome una hora (formato 24 horas) y devuelva "Buenos días" si es antes de las 12, "Buenas tardes" si es entre las 12 y 18, o "Buenas noches" si es después de las 18, utilizando operadores ternarios.
6. Ejercicio 6: Operadores And y Or
https://www.w3schools.com/js/js_comparisons.asp
Escribe una función que reciba cuatro argumentos booleanos y retorne true si al menos uno de los dos primeros es verdadero y al menos uno de los dos últimos es falso.
7. Ejercicio 7: Función que Calcula el Factorial
https://www.w3schools.com/js/js_functions.asp
Escribe una función que tome un número como argumento y retorne su factorial. Utiliza una estructura if para manejar el caso base.
8. Ejercicio 8: Función con Parámetros por Defecto
https://www.w3schools.com/js/js_function_parameters.asp
Crea una función que salude a una persona. Si no se proporciona el nombre, debe saludar con "Hola, invitado".
9. Ejercicio 9: Función que Verifica Números Pares
https://www.w3schools.com/js/js_comparisons.asp
Escribe una función que tome un número y retorne true si es par o false si es impar. Utiliza el operador módulo (%) y un operador ternario.
10. Ejercicio 10: Uso de switch
https://www.w3schools.com/js/js_switch.asp
Escribe una función que reciba un día de la semana (en número) y retorne el nombre del día. Usa una estructura switch.
11. Ejercicio 11: Función Recursiva
https://www.w3schools.com/js/js_functions.asp
Crea una función recursiva que calcule la suma de los números de 1 hasta n.
12. Ejercicio 12: Validación con Operadores Lógicos
https://www.w3schools.com/js/js_comparisons.asp
Escribe una función que verifique si una contraseña cumple con ciertos criterios: al menos 8 caracteres, contiene un número y una letra mayúscula. Utiliza operadores lógicos para combinar las condiciones.



//Ejercicio 1
function mayor(a,b,c){
    if (a > b && a > c){
        return a
    }else if (b > c){
        return b
    }else {return c}
}

console.log(mayor(1,2,3))
console.log(mayor(4,2,3))
console.log(mayor(1,5,3))


//Ejercicio 2
//const concatenar = function(array) {
//    return array.join(" ");
//};
function concatenar(array){
    let cadena = ""
    for (let i = 0; i < array.length ; i++){
        cadena += array[i] + " "
    }
    return cadena
}
console.log(concatenar(['Hola', 'como', 'va']))



//Ejercicio 3
let concatenarFlecha = a => a.length === 0 ? "El largo es 0 del array" : a.join(" ")

console.log(concatenarFlecha(['Hola', 'como', 'va']))
console.log(concatenarFlecha([]))


//Ejercicio 4
let haceCalor = function (temp){
    if (temp < 15){
        return "hace frio"
    }else if (temp < 25){
        return "esta templado"
    }else{
        return "hace calor"
    }
}
console.log(haceCalor(10))
console.log(haceCalor(16))
console.log(haceCalor(35))



//Ejercicio 5
let mensaje = hora => hora < 12 ? "Buenos dias" : hora < 18 ? "Buenas tardes" : "Buenas noches"

console.log(mensaje(11))
console.log(mensaje(15))
console.log(mensaje(20))


//Ejercicio 6
let cumple = a => (a[0] === true || a[1] === true) && (a[2] === false || a[3] === false)

console.log(cumple([true, false, true, false])) //true
console.log(cumple([true, false, false, false])) //true
console.log(cumple([false, false, true, false])) //false
console.log(cumple([true, false, true, true])) //false


//Ejercicio 7
function factorial(x){
    num = 0
    for (let i = 0; i <= x; i++){
        if (i === 0)  {num = 1}  else{num *= i}
    }
    return num
}
console.log(factorial(5))


//Ejercicio 8
let saludar = (a = "invitado") => `Hola, ${a}`
console.log(saludar("Lucas"))
console.log(saludar())


//Ejercicio 9
let par = a => a % 2 === 0 ? true : false
console.log(par(5))
console.log(par(50))


//Ejercicio 10
function diaSemana(dia){
    switch (dia){
        case 1: return "Lunes"
        case 2: return "Martes"
        case 3: return "Miercoles"
        case 4: return "Jueves"
        case 5: return "Viernes"
        case 6: return "Sabado"
        case 7: return "Domingo"
    }
}

console.log(diaSemana(5))


//Ejercicio 11
function recursiva(n) {
    if (n === 1) {
        return 1; // Caso base
    }
    return n + recursiva(n - 1); // Llamada recursiva
}

console.log(recursiva(5)); 

*/

//Ejercicio 12
let cumpleContra = function (contra){
    let tieneMayus = false
    let tieneNum = false
    for (let i = 0; i < contra.length; i++){
        if (contra[i] >= "A" && contra[i] <= "Z"){
            tieneMayus = true
        }
        if (contra[i] >= "0" && contra[i] <= "9"){
            tieneNum = true
        }
    }
    let tieneOcho = contra.length >=8
    return tieneMayus && tieneNum && tieneOcho
}

console.log(cumpleContra("Holaloco123"))
console.log(cumpleContra("jsoideoe23"))