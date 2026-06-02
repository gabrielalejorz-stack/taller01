let usuarioGuardado = "admin";
let claveGuardada = "1234";
let usuario = prompt("Ingrese el usuario");
let clave = prompt("Ingrese la contraseña");
if (usuario == usuarioGuardado && clave == claveGuardada) {
    alert("Acceso permitido");
} else {
    alert("Usuario o contraseña incorrectos");
}