# Frontend

Esta página reúne los conceptos y recursos usados en la **Plantilla de Estudio Frontend**. Funciona como una referencia rápida para recordar cómo se conectan HTML, CSS, Bootstrap, JavaScript, jQuery, Font Awesome y Google Fonts dentro de un proyecto real.

## Contenidos

- [Introducción](#introduccion)
- [HTML](#html)
- [CSS](#css)
- [Bootstrap](#bootstrap)
- [JavaScript](#javascript)
- [jQuery](#jquery)
- [Font Awesome](#font-awesome)
- [Google Fonts](#google-fonts)
- [Proyecto interactivo](#proyecto-interactivo)
- [Código fuente](#codigo-fuente)

## Introducción

El frontend es la parte de una aplicación con la que interactúa la persona usuaria. En este proyecto, cada tecnología cumple una función concreta:

| Tecnología | Función dentro del proyecto |
| --- | --- |
| HTML | Define la estructura y el contenido. |
| CSS | Controla colores, tamaños, espacios, bordes y adaptación visual. |
| Bootstrap | Aporta una grilla responsive y componentes preparados. |
| JavaScript | Agrega lógica e interacción en la página. |
| jQuery | Simplifica la selección de elementos y el manejo de eventos. |
| Font Awesome | Incorpora iconos mediante clases CSS. |
| Google Fonts | Permite cargar tipografías web como Poppins. |

El archivo HTML conecta todos los recursos desde su `<head>` y al final del `<body>`:

```html
<!-- CSS externo y CSS propio -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">

<!-- Bibliotecas y JavaScript propio -->
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="assets/js/script.js"></script>
```

!!! tip "Orden de carga"
    `script.js` se carga después de jQuery y Bootstrap porque utiliza funciones de ambas bibliotecas. Si se cambia el orden, `$()` o `bootstrap.Tooltip` podrían no estar disponibles.

## HTML

HTML crea la estructura del contenido. La plantilla parte con la estructura básica de HTML5 e incluye metadatos para caracteres especiales y diseño responsive:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plantilla de Estudio Fullstack Python - Frontend</title>
</head>
<body>
    <!-- Contenido de la página -->
</body>
</html>
```

### HTML semántico

Las etiquetas semánticas describen la función de cada bloque y facilitan la lectura del documento:

| Etiqueta | Uso |
| --- | --- |
| `<header>` | Encabezado principal. |
| `<nav>` | Navegación y enlaces internos. |
| `<main>` | Contenido principal de la página. |
| `<section>` | Agrupa contenido relacionado. |
| `<article>` | Representa contenido independiente. |
| `<footer>` | Pie de página o cierre de una sección. |

La plantilla también contiene listas, enlaces internos y externos, imágenes, tablas, botones y un formulario con campos de texto, correo, selección, área de texto y casilla de verificación.

```html
<form class="formulario-estudio">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre">

    <button type="submit" class="btn btn-primary">Enviar</button>
</form>
```

!!! note
    El atributo `for` de un `<label>` debe coincidir con el `id` de su campo. Esto mejora la accesibilidad y permite activar el campo al seleccionar su etiqueta.

## CSS

CSS modifica la apariencia de la página: colores, márgenes, *padding*, bordes, tipografía y estados como `hover`. El proyecto define variables reutilizables en `:root`:

```css
:root {
    --color-principal: #1f6feb;
    --color-secundario: #198754;
    --color-fondo: #f6f8fa;
    --color-texto: #24292f;
    --borde-suave: 1px solid #d0d7de;
}
```

### Selectores y prioridad

Se utilizan selectores de etiqueta, clase e identificador:

```css
/* Etiqueta */
body {
    background-color: var(--color-fondo);
}

/* Clase */
.caja-demo {
    padding: 24px;
}

/* ID */
#cajaEspecial {
    border-left: 6px solid var(--color-secundario);
}
```

Cuando varias reglas afectan al mismo elemento, un selector por ID tiene mayor prioridad que una clase, y una clase tiene mayor prioridad que una etiqueta. Si dos reglas tienen la misma prioridad, se aplica la última escrita.

### Modelo de cajas y unidades

Cada elemento se puede entender mediante cuatro capas: **contenido**, **padding**, **borde** y **margin**. En la plantilla se combinan unidades fijas y relativas:

| Unidad | Uso |
| --- | --- |
| `px` | Medida fija. |
| `%` | Porcentaje del contenedor. |
| `vw` / `vh` | Porcentaje del ancho o alto de la ventana. |
| `rem` | Relativa al tamaño base del documento. |
| `em` | Relativa al tamaño del elemento padre. |

### Media query

La media query adapta títulos y espacios en pantallas pequeñas:

```css
@media (max-width: 576px) {
    .encabezado h1 {
        font-size: 1.45rem;
        line-height: 1.25;
    }

    .caja-demo,
    .panel-js,
    .panel-estudio,
    .formulario-estudio {
        padding: 16px;
    }
}
```

## Bootstrap

Bootstrap entrega clases preparadas para construir layouts responsive y componentes visuales. La plantilla usa navbar, grilla, cards, botones, tablas, formulario, tooltip y carousel.

### Grilla responsive

```html
<article class="col-12 col-md-6 col-lg-4">
    <div class="card h-100">
        <div class="card-body">
            <h3 class="card-title">Grid</h3>
        </div>
    </div>
</article>
```

`col-12 col-md-6 col-lg-4` significa:

- ancho completo en celular;
- mitad del ancho desde pantallas medianas;
- un tercio del ancho en pantallas grandes.

| Breakpoint | Ancho mínimo |
| --- | ---: |
| `sm` | 576 px |
| `md` | 768 px |
| `lg` | 992 px |
| `xl` | 1200 px |
| `xxl` | 1400 px |

### Componentes con JavaScript

Algunos componentes requieren `bootstrap.bundle.min.js`. Por ejemplo, los tooltips se activan desde JavaScript:

```javascript
var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');

for (var i = 0; i < tooltipTriggerList.length; i++) {
    new bootstrap.Tooltip(tooltipTriggerList[i]);
}
```

!!! note
    Las clases de Bootstrap resuelven buena parte del estilo, pero `style.css` sigue siendo útil para la identidad visual y los ajustes específicos del proyecto.

## JavaScript

JavaScript conecta la interfaz con la lógica. La plantilla trabaja con variables, entrada de datos, conversión, operaciones matemáticas, búsqueda de elementos y modificación del HTML.

### Variables, entrada y conversión

```javascript
let nombre = prompt("Ingrese su nombre");
let nota = parseFloat(prompt("Ingrese una nota"));
```

`prompt()` devuelve texto. `parseFloat()` convierte ese texto en un número decimal para poder realizar cálculos.

### Buscar y modificar elementos

```javascript
let celda = document.getElementById("resultadoDemo");
celda.innerHTML = "Contenido cambiado con innerHTML";
```

`document.getElementById()` busca un elemento mediante su `id`. Después, `innerHTML` permite cambiar su contenido visible.

### Flujo aplicado: promedio de notas

El ejercicio completo sigue estos pasos:

1. Pedir el nombre y tres notas con `prompt()`.
2. Guardar los datos en variables con `let`.
3. Convertir las notas con `parseFloat()`.
4. Calcular el promedio.
5. Buscar las celdas de la tabla con `getElementById()`.
6. Mostrar los resultados con `innerHTML`.

```javascript
let promedio = (n1 + n2 + n3) / 3;

let celdaPromedio = document.getElementById("promedioFinal");
celdaPromedio.innerHTML = promedio;
```

!!! warning "Validación pendiente"
    El ejemplo está centrado en el flujo entre JavaScript y HTML. En un proyecto posterior conviene validar entradas vacías o valores que no sean números antes de calcular.

## jQuery

jQuery permite seleccionar elementos y reaccionar a eventos con una sintaxis breve. El código espera que el documento termine de cargar antes de registrar los eventos:

```javascript
$(document).ready(function () {
    // Eventos y acciones de la página
});
```

### Selectores

| Selector | Ejemplo |
| --- | --- |
| Por ID | `$("#textoPorId")` |
| Por clase | `$(".textoPorClase")` |
| Por etiqueta | `$("p")` |

### Eventos y métodos utilizados

```javascript
$("#botonToggle").click(function () {
    $("#textoToggle").toggle();
});

$(".boton-color").click(function () {
    $("#cajaEspecial").css("background-color", "#e7f1ff");
});

$("#botonHtml").click(function () {
    $(".texto-demo").html("<strong>El contenido cambió usando html().</strong>");
});
```

La plantilla incluye eventos `click`, `dblclick`, `hover` y `submit`, junto con los métodos `toggle()`, `css()`, `html()`, `hide()` y `show()`.

!!! tip
    En el evento `submit`, `event.preventDefault()` evita que el formulario recargue la página mientras se demuestra su funcionamiento.

## Font Awesome

Font Awesome incorpora iconos mediante clases. Primero se carga su hoja de estilos:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
```

Después se agrega el icono con una etiqueta `<i>`:

```html
<i class="fa-solid fa-code"></i>
<i class="fa-solid fa-calculator"></i>
<i class="fa-solid fa-paper-plane"></i>
```

Las clases `fa-solid` y `fa-code`, por ejemplo, indican el estilo y el icono que se mostrará.

## Google Fonts

La plantilla usa **Poppins**. En el `<head>` se realizan conexiones anticipadas y se carga la familia tipográfica:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Luego se aplica desde CSS, dejando fuentes alternativas por si el recurso externo no está disponible:

```css
body {
    font-family: "Poppins", Arial, sans-serif;
}
```

## Proyecto interactivo

La versión publicada permite probar la navegación responsive, los botones, el tooltip, el carousel, los eventos de jQuery y el cálculo de promedio.

[Abrir proyecto interactivo ↗](https://sebastianaguirre-lab.github.io/fullstack-python-interactivo/){ .md-button .md-button--primary target="_blank" rel="noopener" }

## Código fuente

Los tres archivos originales se incluyen completos para consulta y reutilización:

- [:material-language-html5: `index.html`](codigo/index.html) — estructura, contenido y conexión de dependencias.
- [:material-language-css3: `style.css`](codigo/style.css) — variables, selectores, componentes y diseño responsive.
- [:material-language-javascript: `script.js`](codigo/script.js) — eventos, jQuery, Bootstrap JS y ejercicio de notas.

```text
codigo/
├── index.html
├── style.css
└── script.js
```

!!! info "Cómo ejecutar el proyecto"
    Descarga los tres archivos y conserva las rutas indicadas en el HTML: `assets/css/style.css` y `assets/js/script.js`. También puedes abrir el [`index.html`](codigo/index.html) incluido en esta documentación para consultar el código completo.
