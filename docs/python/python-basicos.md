# Python básico

Una guía personal para aprender y consultar los fundamentos de Python mediante explicaciónes breves, ejemplos ordenados y salidas esperadas.

!!! tip "Cómo usar esta guía"
    Lee cada explicación, copia el ejemplo en un archivo `.py` y modifica sus valores. La navegación lateral y el índice de esta página te permiten volver rápidamente a cualquier tema.

!!! note
    En los ejemplos de *comprehensions* se incluyen valores para `claves`, `valores` y `números`, de modo que el código se pueda ejecutar directamente.

## 1. `print()`

`print()` sirve para mostrar información en consola.

```python
print("Hola Mundo")
# Entrega Hola Mundo
```

## 2. Variables

Una variable guarda un valor para usarlo después.

```python
nombre = "Sebastian"
edad = 30
altura = 1.76
es_programador = False

print(nombre)
print(edad)
print(altura)
print(es_programador)
```

**Salida esperada:**

```text
Sebastian
30
1.76
False
```

## 3. Tipos de datos

`type()` muestra el tipo de dato de una variable.

```python
print(type(nombre))
print(type(edad))
print(type(altura))
print(type(es_programador))
```

**Salida esperada:**

```text
<class 'str'>
<class 'int'>
<class 'float'>
<class 'bool'>
```

## 4. Operaciones matemáticas

Python permite hacer operaciones matemáticas directamente.

```python
import math

a = 10
b = 3

print("Suma:", a + b)
print("Resta:", a - b)
print("Multiplicación:", a * b)
print("División:", a / b)
print("Potencia:", a ** b)
print("Raíz cuadrada:", math.sqrt(a))
print("División entera:", a // b)
print("Módulo:", a % b)
print("Redóndeo:", round(3.14159, 2))
print("Redóndeo hacia arriba:", math.ceil(3.14159))
print("Redóndeo hacia abajo:", math.floor(3.14159))
```

**Salida esperada:**

```text
Suma: 13
Resta: 7
Multiplicación: 30
División: 3.3333333333333335
Potencia: 1000
Raíz cuadrada: 3.1622776601683795
División entera: 3
Módulo: 1
Redóndeo: 3.14
Redóndeo hacia arriba: 4
Redóndeo hacia abajo: 3
```

## 5. Strings

Los strings son textos. Se pueden unir, transformar y medir.

```python
nombre = "Sebastian"

print("Hola " + nombre)
print(f"Hola {nombre}")
print(nombre.upper())
print(nombre.lower())
print(len(nombre))
```

**Salida esperada:**

```text
Hola Sebastian
Hola Sebastian
SEBASTIAN
sebastian
9
```

Métodos útiles de strings:

| Método | Para que sirve |
| --- | --- |
| `capitalize()` | Pone la primera letra en mayúscula. |
| `title()` | Pone cada palabra con inicial mayúscula. |
| `strip()` | Quita espacios al inicio y al final. |
| `replace()` | Reemplaza texto. |
| `find()` | Busca la posición de un texto. |
| `split()` | Divide un string en una lista. |

Ejemplos parecidos en Django o ARCA:

```python
transaction.save()
serializer.is_valid()
queryset.filter(...)
```

## 6. `input()`

`input()` permite pedir información al usuario. En el archivo original está comentado para que el programa no se detenga esperando una respuesta.

```python
nombre_ingresado = input("¿Cómo te llamas? ")
print(f"Hola {nombre_ingresado}")

número_ingresado = int(input("Ingrese un número: "))
print(número_ingresado * 2)
```

Ejemplo de resultado si el usuario escribe `Sebastian` y luego `5`:

```text
¿Cómo te llamas? Sebastian
Hola Sebastian
Ingrese un número: 5
10
```



## 7. Condicionales

`if`, `elif` y `else` permiten tomar decisiones.

```python
número = 8

if número > 0:
    print("Positivo")
elif número == 0:
    print("Es cero")
else:
    print("Negativo")
```

**Salida esperada:**

```text
Positivo
```

Operadores de comparación:

| Operador | Significado |
| --- | --- |
| `==` | Igual a |
| `!=` | Distinto de |
| `>` | Mayor que |
| `<` | Menor que |

Operadores lógicos:

| Operador | Significado |
| --- | --- |
| `and` | Y |
| `or` | O |
| `not` | No |

## 8. `for`

`for` sirve para recorrer elementos de una secuencia.

| Si quieres... | Usa |
| --- | --- |
| Repetir hasta que ocurra algo | `while` |
| Recorrer una lista | `for elemento in lista` |
| Contar de 0 a N | `for i in range(10)` |
| Recorrer un texto letra por letra | `for letra in texto` |
| Recorrer un diccionario | `for clave, valor in persona.items()` |
| Obtener índice y valor | `enumerate()` |
| Recorrer dos listas al mismo tiempo | `zip()` |
| Salir antes de terminar | `break` |
| Saltar una iteración | `continue` |
| Usar un bucle dentro de otro | Bucle anidado |

### `range()`

```python
for i in range(10, 1, -1):
    print(i)

```

**Salida esperada:**

```text
10
9
8
7
6
5
4
3
2
```


### Recorrer un texto

```python
texto = "Hola"

for letra in texto:
    print(letra)

```

**Salida esperada:**

```text
H
o
l
a
```



### Recorrer un diccionario

```python
persona = {
    "nombre": "Sebastian",
    "edad": 30,
}

for clave, valor in persona.items():
    print(f"{clave}: {valor}")

```

**Salida esperada:**

```text
nombre: Sebastian
edad: 30
```

### `enumerate()`

`enumerate()` entrega posición y valor.

```python
frutas = ["Manzana", "Pera", "Kiwi"]

for posición, fruta in enumerate(frutas):
    print(posición, fruta)

```

**Salida esperada:**

```text
0 Manzana
1 Pera
2 Kiwi
```

### `zip()`

`zip()` combina listas y entrega elementos correspondientes.

```python
nombres = ["Ana", "Luis", "Pedro"]
edades = [20, 30, 40]

for nombre, edad in zip(nombres, edades):
    print(nombre, edad)

```

**Salida esperada:**

```text
Ana 20
Luis 30
Pedro 40
```


### `break`

`break` termina el bucle antes de tiempo.

```python
for i in range(10):
    if i == 5:
        break
    print(i)

```

**Salida esperada:**

```text
0
1
2
3
4
```

### `continue`

`continue` salta una iteración y sigue con la siguiente.

```python
for i in range(10):
    if i == 5:
        continue
    print(i)

```

**Salida esperada:**

```text
0
1
2
3
4
6
7
8
9
```

### Bucle anidado

Un bucle anidado es un bucle dentro de otro.

```python
for fila in range(3):
    for columna in range(4):
        print(fila, columna)

```

**Salida esperada:**

```text
0 0
0 1
0 2
0 3
1 0
1 1
1 2
1 3
2 0
2 1
2 2
2 3
```

### Comprehensions

Las comprehensions permiten crear listas o diccionarios de forma más corta.

#### List comprehension

```python
cuadrados = []

for i in range(10):
    cuadrados.append(i ** 2)

# todo lo anterior pasa a ser:
cuadrados = [i ** 2 for i in range(10)]

print(cuadrados)

# Resultado [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```

#### Dict comprehension

```python
claves = ["nombre", "edad", "país"]
valores = ["Sebastian", 30, "Chile"]

diccionario = {k: v for k, v in zip(claves, valores)}

print(diccionario)

# {'nombre': 'Sebastian', 'edad': 30, 'país': 'Chile'}
```

#### Condicional dentro de una list comprehension

```python
números = [1, 2, 3, 4, 5, 6]

resultado = ["Par" if número % 2 == 0 else "Impar" for número in números]

print(resultado)

# Resultado ['Impar', 'Par', 'Impar', 'Par', 'Impar', 'Par']
```


#### Filtrar elementos

```python
números = [1, 2, 3, 4, 5, 6]

pares = [número for número in números if número % 2 == 0]

print(pares)

# Resultado [2, 4, 6]
```



## 9. `while`

`while` repite instrucciones mientras una condición sea verdadera.

```python
contador = 1

while contador <= 3:
    print(contador)
    contador += 1
```

**Salida esperada:**

```text
1
2
3
```

## 10. Funciones

Una función agrupa instrucciones para reutilizarlas.

```python
def sumar(x, y): # parámetros
    return x + y

a = sumar(5, 7) # Argumentos
print(a)

# Salida: 12
```

### Parámetros nombrados

Los parámetros nombrados permiten indicar que valor recibe cada parámetro.

```python
def dividir(a, b):
    print(a / b)


dividir(a=10, b=2)
dividir(b=2, a=10)
# En ambas el resultado es 5.0
```

### Parámetros por defecto

Un parámetro puede tener un valor por defecto. Ese valor se usa si no se entrega un argumento.

```python
def saludar(nombre="Usuario"):
    print(f"Hola {nombre}")


saludar()  # Hola Usuario
saludar("Sebastian")  # Hola Sebastian
```

### `return`

`print()` muestra información en consola.

`return` devuelve un valor para poder guardarlo o usarlo después.

Ejemplo usando `print()`:

```python
def cuadrado(x):
    print(x ** 2)


a = cuadrado(5) #25
print(a) #None
```


Ejemplo usando `return`:

```python
def cuadrado(x):
    return x ** 2


a = cuadrado(5)
print(a) #25
```

Ahora la función devuelve el valor y se puede guardar en la variable `resultado`.

### Múltiples retornos

Una función puede devolver más de un valor.

```python
def operaciones(número):
    cuadrado = número ** 2
    cubo = número ** 3
    return cuadrado, cubo

c2, c3 = operaciones(4)

print(c2)  # 16
print(c3)  # 64
```

Esto se llama desempaquetado. Cada valor retornado se guarda en una variable.

### Funciones que reciben listas

Una función puede recibir una lista como argumento.

```python
def promedio(lista):
    total = sum(lista)
    cantidad = len(lista)
    return total / cantidad


notas = [6, 5, 7]
resultado = promedio(notas)

print(resultado) #6.0
```

### Funciones que reciben diccionarios

Una función también puede recibir un diccionario.

```python
def mostrar_productos(diccionario):
    for producto, precio in diccionario.items():
        print(f"{producto}: ${precio}")

productos = {
    "Pan": 1200,
    "Leche": 1000,
    "Queso": 3500
}

mostrar_productos(productos)
```

**Salida esperada:**

```text
Pan: $1200
Leche: $1000
Queso: $3500
```


### Funciones como argumentos

En Python una función también es un objeto. Por eso se puede enviar una función como argumento a otra función.

```python
def operar(lista, función):
    return función(lista)


números = [10, 20, 30]

print(operar(números, sum)) #60
print(operar(números, len)) #3
```

Se escribe `sum` y no `sum()` porque queremos entregar la función, no ejecutarla inmediatamente.

### `*args`

`*args` permite recibir una cantidad variable de argumentos.

Sirve cuando no sabemos cuántos valores se van a entregar.

```python
def sumar(*args):
    total = 0

    for número in args:
        total += número

    return total


print(sumar(1, 2)) #3
print(sumar(1, 2, 3, 4)) #10
```

### `**kwargs`

`**kwargs` permite recibir una cantidad variable de argumentos con nombre.

Internamente, `kwargs` es un diccionario.

```python
def crear_perfil(**kwargs):
    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")


crear_perfil(nombre="Sebastian", edad=30, ciudad="Santiago")

```

**Salida esperada:**

```text
nombre: Sebastian
edad: 30
ciudad: Santiago
```

### Variables locales y globales

El scope es el alcance de una variable. Indica dónde existe y dónde se puede usar.

Una variable creada dentro de una función es local. Solo existe dentro de esa función.

```python
def ejemplo():
    mensaje = "Hola"
    print(mensaje)

ejemplo() #Hola
print(mensaje) #name 'mensaje' is not defined
```

### `global`

Aunque funcióna, usar `global` suele ser una mala práctica porque hace que el código sea más difícil de entender y mantener.

Es mejor usar `return`.

```python
def aumentar(contador):
    return contador + 1

contador = 0
contador = aumentar(contador)

print(contador) # Salida: 1
```

### Funciones que modifican en el lugar

Algunas funciónes modifican directamente el objeto recibido y devuelven `None`.

`random.shuffle()` mezcla una lista en el lugar.

```python
import random

lista = [1, 2, 3]
random.shuffle(lista)

print(lista) # La lista queda desordenada
```

No se debe guardar el resultado de `shuffle()`.

```python
lista = random.shuffle(lista)
print(lista) #None
```

Ejemplo correcto:

```python
def shuffle_alt(pregunta):
    random.shuffle(pregunta["alternativas"])
    return pregunta["alternativas"]
```

Si se escribe:

```python
pregunta["alternativas"] = random.shuffle(pregunta["alternativas"])
```

primero se mezcla la lista, pero después `pregunta["alternativas"]` queda valiendo `None`.

## 11. Listas

Las listas guardan varios elementos y se accede a ellos por posición.


```python
frutas = ["Manzana", "Pera", "Naranja"]

print(frutas)
# Salida: ['Manzana', 'Pera', 'Naranja']

print(frutas[0])
# Salida: Manzana
print(frutas[-1])
# Salida: Naranja

frutas.append("Plátano")

```

**Salida esperada:**

```text
Manzana
Pera
Naranja
Plátano
"""

for fruta in frutas:
    print(fruta)

print(", ".join(frutas))
# Salida: Manzana, Pera, Naranja, Plátano
```

Métodos y operaciones útiles:

| Ejemplo | Resultado o uso |
| --- | --- |
| `frutas[0]` | Primer elemento. |
| `frutas.append("kiwi")` | Agrega al final. |
| `frutas.insert(1, "plátano")` | Agrega en la posición 1. |
| `frutas.pop(2)` | Elimina y devuelve el elemento eliminado. |
| `frutas.remove("uva")` | Elimina ese valor. |
| `frutas.reverse()` | Invierte la lista. |
| `frutas.sort()` | Ordena la lista original. |
| `sorted(números)` | Devuelve una copia ordenada. |
| `frutas.index("pera")` | Devuelve la posición. |
| `max(números)` | Mayor valor. |
| `min(números)` | Menor valor. |
| `sum(números)` | Suma total. |
| `[1, 2] + [3, 4]` | `[1, 2, 3, 4]` |
| `[1, 2] * 3` | `[1, 2, 1, 2, 1, 2]` |

### Argumentos desde terminal

Con `sys.argv` se pueden leer argumentos escritos al ejecutar un archivo.

```python
import sys

print(sys.argv[0])
print(sys.argv[1])

"""
Si en terminal se ejecuta:

python argumentos.py Sebastian

El resultado es:

argumentos.py
Sebastian
```

## 12. Tuplas

Las tuplas se parecen a las listas, pero normalmente se usan para datos que no cambian.

```python
coordenadas = (10.0, 20.0)

print(coordenadas)
```

**Salida esperada:**

```text
(10.0, 20.0)
```

## 13. Sets

Los sets no permiten elementos duplicados.

```python
números = {1, 1, 2, 3, 4, 5}

print(números)
```

**Salida esperada:**

```text
{1, 2, 3, 4, 5}
```

## 14. Diccionarios

Los diccionarios guardan información usando claves.

```python
persona = {
    "nombre": "Sebastian",
    "edad": 30,
    "profesion": "Ingeniero",
}

print(persona["nombre"])
print(persona["edad"])

transaction = {
    "amount": 5000,
    "currency": "USD",
    "country": "CL",
}

print(transaction)

```

**Salida esperada:**

```text
s
Sebastian
30
{'amount': 5000, 'currency': 'USD', 'country': 'CL'}
```

Ejemplo de lista con diccionarios:

```python
transactions = [
    transaction1,
    transaction2,
    transaction3,
]
```

Ejemplo de comprehension con diccionarios:

```python
ventas = {
    "enero": 100,
    "febrero": 250,
    "marzo": 80,
}

umbral = 100

ventas_mayores = {
    mes: monto
    for mes, monto in ventas.items()
    if monto > umbral
}

print(ventas_mayores)

# Resultado {'febrero': 250}
```


Operaciones comunes:

| Ejemplo | Uso |
| --- | --- |
| `persona["peso"] = 72` | Agrega una clave. |
| `persona["edad"] = 31` | Modifica un valor. |
| `del persona["peso"]` | Elimina una clave. |
| `persona.pop("peso")` | Elimina y devuelve el valor. |
| `a.update(b)` | Mezcla dos diccionarios. |
| `persona.keys()` | Entrega las claves. |
| `persona.values()` | Entrega los valores. |
| `persona.items()` | Entrega claves y valores. |

Uso de `get()`:

```python
persona = {
    "nombre": "Sebastian",
    "edad": 30,
}

print(persona.get("telefono"))
# Entrega None

print(persona.get("telefono", "No existe"))
# Salida: No existe
```


Idea clave:

```text
En una lista busco por posición.
En un diccionario busco por clave.
```

## 15. Librerías

Las librerías permiten usar código ya hecho.

```python
import math
from math import ceil, pi, sqrt
import math as m

print(math.sqrt(25))
print(math.ceil(3.14))
print(math.pi)

ceil_value = ceil(3.14)

print(sqrt(25))
print(ceil_value)
print(pi)
print(m.sqrt(25))
```

**Salida esperada:**

```text
5.0
4
3.141592653589793
5.0
4
3.141592653589793
5.0
```

Instalación de librerías externas:

```bash
pip install pandas
pip install numpy
```

## 16. Modularización

Modularizar es separar un programa en partes más pequeñas y ordenadas.

### Importaciones

Las importaciones permiten usar código desde otro módulo.

`import módulo`

Importa el módulo completo.

```python
import math

print(math.sqrt(25)) #5.0
```

`import módulo as alias`

Importa el módulo con un nombre más corto.

```python
import math as m

print(m.sqrt(25)) #5.0
```

`from módulo import función`

Importa solo una función o elemento del módulo.

```python
from math import sqrt

print(sqrt(25)) #5.0
```

### `main.py`

`main.py` normalmente es el punto de entrada del programa.

Desde ahi se coordinan los demás módulos.

```python
from calculadora import sumar

print(sumar(2, 3)) #5
```

### `if __name__ == "__main__"`

Esto evita que un módulo ejecute código automáticamente al importarlo.

```python
def saludar():
    print("Hola")

if __name__ == "__main__":
    saludar()
```

### Docstrings

Los docstrings son textos que documentan que hace una función, clase o módulo.

```python
def sumar(a, b):
    """
    Suma dos números.
    """
```

### Refactorización

Refactorizar es mejorar el código sin cambiar su funciónamiento.


Antes:

```python
print("Hola Ana")
print("Hola Luis")
```

Despues:

```python
for nombre in ["Ana", "Luis"]:
    print(f"Hola {nombre}")
```

## 17. Experiencia de usuario

### `time.sleep()`

`time.sleep()` pausa el programa por una cantidad de segundos.

```python
import time

print("Cargando...")
time.sleep(2)
print("Listo")
```

### Limpiar pantalla

Limpiar pantalla depende del sistema operativo.

```python
import os

os.system("cls")
os.system("clear")
```

### `exit()`

`exit()` finaliza el programa.

```python
exit()
```

## 18. Programación orientada a objetos

La programación orientada a objetos permite organizar datos y acciones relacionadas dentro de clases.

| Concepto | Qué significa |
| --- | --- |
| Clase | Molde que define las características y acciones de un tipo de objeto. |
| Objeto o instancia | Elemento concreto creado a partir de una clase. |
| Atributo | Característica o dato perteneciente a una clase u objeto. |
| Método | Función definida dentro de una clase. |

### Clase, atributo y método estático

```python
# CLASE:
# Es el molde que se utiliza para crear objetos de tipo Te.
# Los nombres de clases se escriben en PascalCase.
class Te:

    # ATRIBUTO DE CLASE:
    # Es una caracteristica compartida por todos los objetos de tipo Te.
    # Se usa de esta forma porque todos los tipos de te duran 365 dias.
    duracion = 365

    # DECORADOR:
    # Indica que obtener_precio es un método estático.
    # Permite usar el método directamente desde la clase,
    # sin crear primero un objeto de tipo Te.
    @staticmethod

    # METODO ESTATICO:
    # Es una función definida dentro de una clase.
    # Recibe el formato del te y retorna su precio.
    def obtener_precio(formato):

        # Comprueba si el formato ingresado es de 300 gramos.
        if formato == 300:

            # Retorna el precio del formato de 300 gramos.
            return 3000

        # El ejercicio permite asumir que la otra opcion es 500 gramos.
        else:

            # Retorna el precio del formato de 500 gramos.
            return 5000
```

### Crear un objeto

```python
# OBJETO O INSTANCIA:
# Te() crea un objeto concreto utilizando la clase Te como molde.
# te_negro guarda ese objeto para poder utilizarlo posteriormente.
te_negro = Te()

# Accede al atributo de clase mediante el objeto.
print(te_negro.duracion)

# También se puede acceder directamente desde la clase.
print(Te.duracion)
```

Ambos `print()` muestran `365` porque `duracion` es compartido por todas las instancias de `Te`.

### Llamar un método estático

```python
# El método se llama desde la clase porque utiliza @staticmethod.
# El argumento 300 se almacena en el parámetro formato.
precio = Te.obtener_precio(300)

# Muestra el valor retornado por el método.
print(precio)
```

**Salida esperada:**

```text
3000
```

### Método que retorna varios valores

Un método puede retornar más de un valor. Estos se pueden guardar en variables separadas.

```python
class Te:

    @staticmethod
    def obtener_datos(sabor):
        if sabor == 1:
            return 3, "Se recomienda consumir al desayuno"


# Cada valor retornado se almacena en una variable.
tiempo, recomendacion = Te.obtener_datos(1)

print(tiempo)
print(recomendacion)
```

**Salida esperada:**

```text
3
Se recomienda consumir al desayuno
```

### Importar una clase

Si la clase se encuentra en otro archivo, debe importarse antes de utilizarla.

```python
# Archivo te.py
class Te:
    duracion = 365
```

```python
# Archivo pedido.py

# te corresponde al archivo te.py.
# Te corresponde a la clase que se desea importar.
from te import Te

pedido = Te()
print(pedido.duracion)
```

Estructura básica para recordar:

```python
class NombreClase:
    atributo_de_clase = valor

    @staticmethod
    def nombre_método(parámetro):
        return resultado


objeto = NombreClase()
resultado = NombreClase.nombre_método(argumento)
```

