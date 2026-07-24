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
        else:
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

### Métodos de instancia y `self`

Un método de instancia trabaja con un objeto específico. Debe recibir `self` como primer parámetro.

```python
class Pelota:

    # ATRIBUTO DE CLASE:
    # Es compartido por todos los objetos de tipo Pelota.
    forma = "redonda"

    # MÉTODO DE INSTANCIA:
    # Trabaja con la pelota que llama al método.
    def asignar_color(self, nuevo_color):

        # ATRIBUTO DE INSTANCIA:
        # Guarda un color propio para este objeto.
        self.color = nuevo_color


pelota_uno = Pelota()
pelota_dos = Pelota()

# Python entrega automáticamente pelota_uno a self.
pelota_uno.asignar_color("rojo")

# En esta llamada, self representa a pelota_dos.
pelota_dos.asignar_color("verde")

print(pelota_uno.color)
print(pelota_dos.color)
print(pelota_uno.forma)
```

**Salida esperada:**

```text
rojo
verde
redonda
```

`self` representa al objeto que está ejecutando el método:

```python
pelota_uno.asignar_color("rojo")

# Python lo interpreta de forma similar a:
Pelota.asignar_color(pelota_uno, "rojo")
```

Al llamar el método no se escribe `self`, porque Python lo entrega automáticamente.

### Atributos de clase y de instancia

| Tipo | Pertenece a | Ejemplo |
| --- | --- | --- |
| Atributo de clase | Todas las instancias | `forma = "redonda"` |
| Atributo de instancia | Un objeto específico | `self.color = nuevo_color` |

Los atributos de instancia pueden guardar valores diferentes:

```python
print(pelota_uno.color)  # rojo
print(pelota_dos.color)  # verde
```

### Leer atributos desde un método

Un método de instancia puede consultar los atributos del objeto mediante `self`.

```python
class Pelota:
    forma = "redonda"

    def asignar_color(self, nuevo_color):
        self.color = nuevo_color

    def mostrar_datos(self):
        print(f"Color: {self.color}")
        print(f"Forma: {self.forma}")


pelota = Pelota()
pelota.asignar_color("amarillo")
pelota.mostrar_datos()
```

### Llamar otro método desde una instancia

Un método puede usar otro método de la misma clase mediante `self`.

```python
class Medicamento:

    # No necesita trabajar con un medicamento específico.
    @staticmethod
    def validar_mayor_a_cero(numero):
        return numero > 0

    # Trabaja con el objeto que llama al método.
    def asignar_precio(self, precio_entregado):

        # Llama al método de validación de la misma clase.
        if self.validar_mayor_a_cero(precio_entregado):

            # Modifica los atributos de esta instancia.
            self.precio = precio_entregado
            self.descuento = 0.0

            if self.precio >= 30000:
                self.descuento = 0.3
            elif self.precio >= 20000:
                self.descuento = 0.2
            elif self.precio >= 10000:
                self.descuento = 0.1
        else:
            print("El precio ingresado no es válido.")


medicamento = Medicamento()
medicamento.asignar_precio(15000)

print(medicamento.precio)
print(medicamento.descuento)
```

**Salida esperada:**

```text
15000
0.1
```

### Estado de un objeto

El estado corresponde a los valores actuales de sus atributos.

```python
medicamento.asignar_precio(15000)
# Estado: precio = 15000 y descuento = 0.1

medicamento.asignar_precio(32000)
# Nuevo estado: precio = 32000 y descuento = 0.3
```

Usar un método permite aplicar todas las reglas antes de modificar el objeto:

```python
medicamento.asignar_precio(15000)  # Valida y calcula el descuento.
medicamento.precio = 15000         # Solo cambia el atributo directamente.
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
    atributo_de_clase = valor_compartido

    @staticmethod
    def método_estático(parámetro):
        return resultado

    def método_de_instancia(self, parámetro):
        self.atributo_de_instancia = parámetro


objeto = NombreClase()
resultado = NombreClase.método_estático(argumento)
objeto.método_de_instancia(argumento)
```

