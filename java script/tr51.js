// Registrar las 5 notas
let nota1 = Number(prompt("Ingrese la nota 1:"));
let nota2 = Number(prompt("Ingrese la nota 2:"));
let nota3 = Number(prompt("Ingrese la nota 3:"));
let nota4 = Number(prompt("Ingrese la nota 4:"));
let nota5 = Number(prompt("Ingrese la nota 5:"));
let promedio = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
alert("El promedio es: " + promedio);
if (promedio >= 3.5) {
    alert("Estado: APRUEBA");
} else {
    alert("Estado: REPRUEBA");
    }