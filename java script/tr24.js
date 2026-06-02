let año = prompt("Escribe un año:");
año = Number(año);

// Verificar si es divisible entre 4
if (año % 4 == 0) {
    alert("El año es bisiesto");
} else {
    alert("El año no es bisiesto");
}