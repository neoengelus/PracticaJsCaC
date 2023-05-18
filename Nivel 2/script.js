//ejercicio 1
let variable_a = 33, variable_b = 77, variable_resultado = 0;
variable_resultado = variable_a + variable_b;
console.log(variable_resultado);
//ejercicio 2
let a = 50 ,b = 30 ,c = 100 ,d = 25 ,e = 0;
console.log("El promedio es: " +((a+b+c+d+e)/5));
//ejercicio 3
nota1 = parseFloat(prompt("Ingrese la primer nota"));
nota2 = parseFloat(prompt("Ingrese la segunda nota"));
if (nota1 > nota2) console.log("La primer nota es mayor")
else console.log("La segunda nota es mayor");
//ejercicio 4
const desc = 0.15, max = 100;
let compra = parseFloat(prompt("Ingrese el valor de la compra")), valor = 0;
if (compra > max) {
  valor = compra - (compra * desc);
  console.log("El valor a abonar es: " + valor);
} else {
  console.log("El valor a abonar es: " + compra);
}
//ejercicio 5
let precio_max = 0.5, precio_min = 1.5, precio_total = 0;
const max_personas = 8;
personas = parseInt(prompt("Ingrese la cantidad de expectaodores"));
if (personas > max_personas) precio_total = personas * precio_max
else precio_total = personas * precio_min;
console.log("El precio a pagar es: " + precio_total);
//ejercicio 6
//Igual al 3
//ejercicio 7
let puntuacion = prompt("Ingrese la puntuacón deseada de la película \n0: mala, 1: regular, 2: buena,3: muy buena, 4: excelente");
switch (puntuacion) {
  case "0" :
    alert("Ud elegión Mala");
    break;
  case "1" :
    alert("Ud elegión Regular");
    break;
  case "2" :
    alert("Ud elegión Buena");
    break;
  case "3" :
    alert("Ud elegión Muy Buena");
    break;
  case "4" :
    alert("Ud elegión Excelente");
    break;
  default:
    alert("Ud elegión un valor incorrecto");
    break;
}
//ejercicio 8
for (let i = 59; i >= 0; i--){
  console.log(i);
}
//ejercicio 9
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) console.log(i);
}
//ejercicio 10
for (let i = 100; i >= 0; i--) {
  console.log(i);
}
//ejercicio 11
let numeros = [], numero = 0;
do {
  numero = parseInt(prompt("Ingrese un número\n-1 para finalizar"));
  if (numero != -1) numeros.push(numero);
}while(numero != -1);
for (let i = 0 ; i < numeros.length; i++){
  console.log("Elemento: " +numeros[i] + " Posición: " + i);
}
//ejercicio 12
let suma = 0;
numeros = [];
do {
  numero = parseInt(prompt("Ingrese un número\n-1 para finalizar"));
  if (numero != -1) {
    numeros.push(numero);
    suma += numero;
  }
}while(numero != -1);
console.log("El promedio de los elementos es: " + (suma / numeros.length));
//ejercicio 13
let lista_precios = [];
for (let i = 0; i <= 5; i++){
  lista_precios.push(prompt("Ingrese el nombre y precio del producto"));
}
lista_precios.forEach(function(elemento){console.log(elemento);});
//ejercicio 14
let n = parseInt(prompt("Ingrese la cantidad de alturas")), altura = 0;
suma = 0
for (let i = 0; i <= n; i++) {
  altura = parseFloat(prompt("Ingrese una altura"));
  suma += altura;
}
console.log("El promedio de alturas es: " + (suma / n));