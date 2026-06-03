let n = Number(prompt("¿Cuántos términos de Fibonacci desea?"));
let a = 0;
let b = 1;
let i = 1;
while (i <= n) {
    alert(a);

    let siguiente = a + b;
    a = b;
    b = siguiente;

    i = i + 1;
}