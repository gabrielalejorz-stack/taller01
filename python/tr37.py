n = int(input("Ingrese cuántos términos de Fibonacci desea mostrar: "))
a = 0
b = 1 
contador = 0
while contador < n:
    print(a)
    siguiente = a + b
    a = b
    b = siguiente
    contador = contador + 1