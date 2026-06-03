let opcion = prompt(
    "MENÚ\n" +
    "1. Mostrar mensaje\n" +
    "2. Salir\n" +
    "Elija una opción:"
);
if (opcion == 1) {
    alert("Hola, este es un mensaje simple");

} else if (opcion == 2) {
    alert("Programa finalizado");

} else {
    alert("Opción incorrecta");
}