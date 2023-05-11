//Ejercicio 2
console.log(prompt("Ingrese una frase"));
//Ejercicio 3
let nombre = prompt("Ingrese su nombre");
console.log("Hola " + nombre +"!");
//Ejercicio 5
let nacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
const actual = 2023;
console.log("Su edad es " + (actual - nacimiento) + " años");
//Ejercicio 6
let peso = parseFloat(prompt("Ingrese su peso en kg"));
let altura = parseFloat(prompt("Ingrese su altura en m"));
console.log("Su Índice de masa muscular (IMC) es: " + ((peso) / altura ** 2));
//Ejercicio 7
let cantidadDeVentanas = 6;
console.log("En casa tengo " + cantidadDeVentanas + " ventanas");
//Ejercicio 8
let soyHumano = true;
console.log(soyHumano);
//Ejercicio 9
let miGustoDePizza = "4 Quesos";
console.log(miGustoDePizza);
//Ejercicio 10
let variable = false;
console.log(variable);
variable = 'Hola';
console.log(variable);
variable = "Minions";
console.log(variable);
//Ejercicio 11
let base = parseFloat(prompt("Ingrese la base del triángulo"));
altura = parseFloat(prompt("Ingrese la altura del triángulo"));
let lado = Math.sqrt((base ** 2) + (altura ** 2));
alert("El perímetro del triángulo es: " + (base + altura + lado));
alert("La superficie del tríangulo es: " + ((base * altura) / 2));
//Ejercicio 12
peso = parseFloat(prompt("Ingrese el peso en libras (lb)"));
const libras = 0.45;
alert("El peso en kg es : " + (peso / libras));
//Ejercicio 13
let sueldo = parseFloat(prompt("Ingrese el monto de sueldo a calcular"));
const descuento = 0.15;
console.log("El sueldo a cobrar es de : " + (sueldo - (sueldo * descuento)));
//Ejercicio 14
let nota = parseInt(prompt("Ingrese la nota del alumno"));
const aprobado = 7;
if (nota > aprobado) {
    alert("Alumno aprobado");
} else {
    alert("Alumno Desaprobado");
}
//Ejercicio 16
let matricula = prompt("Ingrese la mátricula del alumno"), suma = 0;
const cantMaterias = 5;
for (let i = 0; i < cantMaterias; i++){
    nota = parseInt(prompt("Ingrese la nota del alumno"));
    suma += nota;
}
let promedio = suma / cantMaterias;
console.log(promedio);
if (promedio > aprobado) {
    console.log("Alumno: " + matricula + "\nPromedio: " + promedio + " \nAprobado");
} else {
    console.log("Alumno: " + matricula + "\nPromedio: " + promedio + " \nDesaprobado");
}
//Ejercicio 17
let num1 = 0, num2 = 0, num3 = 0, numMayor = 0;
num1 = parseInt(prompt("Ingrese un número"));
num2 = parseInt(prompt("Ingrese un número"));
num3 = parseInt(prompt("Ingrese un número"));
if (num1 >= num2 && num1 >= num3) {
    numMayor = num1;
  } else if (num2 >= num1 && num2 >= num3) {
    numMayor = num2;
  } else {
    numMayor = num3;
  }
console.log("El mayor de los 3 números es: " + numMayor); 

