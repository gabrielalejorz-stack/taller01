n = int(input("Ingrese cuántos números va a escribir:"))
positivos = 0
i = 1
while i <= n:
    numero = float(input("Ingrese un número: "))
    
    if numero > 0:
        positivos = positivos + 1
    
    i = i + 1
print(positivos)