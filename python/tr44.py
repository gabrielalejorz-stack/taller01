numeros = [8, 3, 12, 5, 2]

menor = numeros[0]

for numero in numeros:
    if numero < menor:
        menor = numero

print(menor)