plado=input("digite primer lado")
slado=input("digite segundo lado")
tlado=input("digite tercer lado")
if plado==slado==tlado:
    print ("el triangulo es equilatero")
elif plado==slado or plado==tlado or slado==tlado:
    print ("el triangulo es isoceles")
else:
    print ("el triangulo es escaleno")