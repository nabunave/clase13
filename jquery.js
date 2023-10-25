document.addEventListener("DOMContentLoaded", function () {
    var enlaces = document.querySelectorAll("a");

    enlaces.forEach(function (enlace) {
        enlace.addEventListener("click", function (event) {
            event.preventDefault();

            enlace.style.display = "none";
        });
    });
});

$(document).ready(function () {
    $("#cambiar").click(function () {
        $("#texto").html("Este es el nuevo contenido del div.");
    });
});

$(document).ready(function () {
    $("#addClass").click(function () {
        $("ul li").addClass("claseAgregada");
    });
});

$(document).ready(function () {
    $("#botonVisibilidad").click(function () {
        $("#seccionOculta").toggle();
    });
});
