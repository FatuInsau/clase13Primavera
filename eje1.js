// Área de un triangulo

// Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

// pedir datos
var base,altura;

altura = prompt("Ingrese un valor para la altura");
base = prompt("Ingrese un valor para la base");

// calculo del area
var area = (base*altura)/2;

// mostrar msj

alert("El area del triangulo es "+ area);