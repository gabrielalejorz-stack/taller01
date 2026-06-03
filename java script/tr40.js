let numero = Number(prompt("Ingrese un número:"));
let invertido = 0;
while (numero > 0) {
    let digito = numero % 10;      // Último dígito
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
}
alert("Número invertido: " + invertido);