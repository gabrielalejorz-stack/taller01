let opcion = prompt(
    "MENÚ\n" +
    "1. Sumar dos números\n" +
    "2. Restar dos números\n" +
    "3. Salir\n" +
    "Elija una opción:"
);
if (opcion == 1) {
    let num1 = Number(prompt("Ingrese el primer número:"));
    let num2 = Number(prompt("Ingrese el segundo número:"));
    let suma = num1 + num2;
    alert("La suma es: " + suma);
} else if (opcion == 2) {
    let num1 = Number(prompt("Ingrese el primer número:"));
    let num2 = Number(prompt("Ingrese el segundo número:"));
    let resta = num1 - num2;
    alert("La resta es: " + resta);
} else if (opcion == 3) {
    alert("Saliendo del programa...");

} else {
    alert("Opción no válida");
}