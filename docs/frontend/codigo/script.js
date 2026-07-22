// document ready: espera que el HTML cargue antes de ejecutar jQuery
$(document).ready(function () {
    // Activacion de tooltips de Bootstrap JS
    var tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    for (var i = 0; i < tooltipTriggerList.length; i++) {
        new bootstrap.Tooltip(tooltipTriggerList[i]);
    }

    // Evento click con alert()
    $("#botonAlerta").click(function () {
        alert("Este es un alert ejecutado con jQuery.");
    });

    // Evento click y metodo toggle()
    $("#botonToggle").click(function () {
        $("#textoToggle").toggle();
    });

    // Evento click y metodo css()
    $(".boton-color").click(function () {
        $("#cajaEspecial").css("background-color", "#e7f1ff");
    });

    // Evento click y metodo html()
    $("#botonHtml").click(function () {
        $(".texto-demo").html("<strong>El contenido cambio usando html().</strong>");
    });

    // Evento click y metodo hide()
    $("#botonOcultar").click(function () {
        $("p").hide();
    });

    // Evento click y metodo show()
    $("#botonMostrar").click(function () {
        $("p").show();
    });

    // Evento dblclick: doble click sobre un texto por id
    $("#textoPorId").dblclick(function () {
        $(this).css("color", "#198754");
    });

    // Evento hover: mouse entra y sale sobre elementos por clase
    $(".textoPorClase").hover(
        function () {
            $(this).css("font-weight", "700");
        },
        function () {
            $(this).css("font-weight", "400");
        }
    );

    // Evento submit de formulario basico
    $(".formulario-estudio").submit(function (event) {
        event.preventDefault();
        alert("Formulario de ejemplo enviado.");
    });

    // Ejemplo simple de innerHTML
    document.getElementById("botonDemoInner").onclick = function () {
        // Buscamos la celda por su id
        let celda = document.getElementById("resultadoDemo");

        // Cambiamos el contenido visible de la celda
        celda.innerHTML = "Contenido cambiado con innerHTML";
    };

    // Flujo completo del desafio Notas Finales
    document.getElementById("botonCalcularPromedio").onclick = function () {
        // Entrada de datos: prompt() devuelve texto
        let nombre = prompt("Ingrese su nombre");
        let nota1 = prompt("Ingrese la nota 1");
        let nota2 = prompt("Ingrese la nota 2");
        let nota3 = prompt("Ingrese la nota 3");

        // Conversion de datos: parseFloat() convierte texto a numero decimal
        let n1 = parseFloat(nota1);
        let n2 = parseFloat(nota2);
        let n3 = parseFloat(nota3);

        // Calculo matematico del promedio
        let promedio = (n1 + n2 + n3) / 3;

        // Buscar elementos HTML por id
        let celdaNombre = document.getElementById("nombreAlumno");
        let celdaNotaUno = document.getElementById("notaUno");
        let celdaNotaDos = document.getElementById("notaDos");
        let celdaNotaTres = document.getElementById("notaTres");
        let celdaPromedio = document.getElementById("promedioFinal");

        // Modificar contenido HTML con innerHTML
        celdaNombre.innerHTML = nombre;
        celdaNotaUno.innerHTML = n1;
        celdaNotaDos.innerHTML = n2;
        celdaNotaTres.innerHTML = n3;
        celdaPromedio.innerHTML = promedio;
    };
});
