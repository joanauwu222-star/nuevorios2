var dbPerros = localStorage.getItem("dbPerros"); // Obtener datos de localStorage
var operacion = "A"; // "A"=agregar; "E"=editar

dbPerros = JSON.parse(dbPerros); // Convertir a objeto

if (dbPerros === null) // Si no existe, creamos un array vacío.
    dbPerros = [];

function Mensaje(t){
    switch (t) {
        case 1:
            $(".mensaje-alerta").append(
                "<div class='alert alert-success' role='alert'>Se agregó con éxito el perro</div>"
            );
            break;

        case 2:
            $(".mensaje-alerta").append(
                "<div class='alert alert-danger' role='alert'>Se eliminó el perro</div>"
            );
            break;

        default:
    }
}

function AgregarPerro () {

    // Seleccionamos los datos del formulario
    var datos_cliente = JSON.stringify({
        Nombre : $("#nombre").val(),
        Dueno : $("#dueno").val(),
        Peso : $("#peso").val(),
        Fecha_nacimiento : $("#fecha_nacimiento").val(),
        Sexo : $("#sexo").val(),
        Raza : $("#raza").val(),
        Edad : $("#edad").val(),
        Color : $("#color").val()
    });

    // Guardamos en el array
    dbPerros.push(datos_cliente);

    // Guardamos en localStorage
    localStorage.setItem("dbPerros", JSON.stringify(dbPerros));

    // Mostrar tabla
    ListarPerros();

    return Mensaje(1);
}

function ListarPerros (){

    $("#dbPerros-list").html(
        "<thead>" +
            "<tr>" +
                "<th> ID </th>" +
                "<th> Nombre </th>" +
                "<th> Dueño </th>" +
                "<th> Peso </th>" +
                "<th> Fecha nacimiento </th>" +
                "<th> Sexo </th>" +
                "<th> Raza </th>" +
                "<th> Edad </th>" +
                "<th> Color </th>" +
                "<th> </th>" +
                "<th> </th>" +
            "</tr>" +
        "</thead>" +
        "<tbody>" +
        "</tbody>"
    );

    for (var i in dbPerros) {

        var d = JSON.parse(dbPerros[i]);

        $("#dbPerros-list").append(
            "<tr>" +
                "<td>" + i + "</td>" +
                "<td>" + d.Nombre + "</td>" +
                "<td>" + d.Dueno + "</td>" +
                "<td>" + d.Peso + "</td>" +
                "<td>" + d.Fecha_nacimiento + "</td>" +
                "<td>" + d.Sexo + "</td>" +
                "<td>" + d.Raza + "</td>" +
                "<td>" + d.Edad + "</td>" +
                "<td>" + d.Color + "</td>" +

                "<td> <a id='"+ i +"' class='btnEditar' href='#'> " +
                "<span class='glyphicon glyphicon-pencil'></span> </a> </td>" +

                "<td> <a id='" + i + "' class='btnEliminar' href='#'> " +
                "<span class='glyphicon glyphicon-trash'></span> </a> </td>" +
            "</tr>"
        );
    }

    // BOTÓN ELIMINAR
    $(".btnEliminar").bind("click", function(){

        alert("¿Seguro que quieres eliminar este perro?");

        indice_selecionado = $(this).attr("id");

        Eliminar(indice_selecionado);

        ListarPerros();
    });

    // BOTÓN EDITAR
    $(".btnEditar").bind("click", function() {

        alert("¿Quieres editar este perro?");

        $(".modo").html(
            "<span class='glyphicon glyphicon-pencil'></span> Modo edición"
        );

        operacion = "E";

        indice_selecionado = $(this).attr("id");

        var perroItem = JSON.parse(dbPerros[indice_selecionado]);

        $("#nombre").val(perroItem.Nombre);
        $("#dueno").val(perroItem.Dueno);
        $("#peso").val(perroItem.Peso);
        $("#fecha_nacimiento").val(perroItem.Fecha_nacimiento);
        $("#sexo").val(perroItem.Sexo);
        $("#raza").val(perroItem.Raza);
        $("#edad").val(perroItem.Edad);
        $("#color").val(perroItem.Color);

        $("#nombre").focus();
    });
}

if (dbPerros.length !== 0) {
    ListarPerros();
} else {
    $("#dbPerros-list").append("<h2>No tienes perros registrados</h2>");
}

function contarPerros(){

    var perros = dbPerros;

    nPerros = perros.length;

    $("#numeroPerros").append(
        "<a>Tienes actualmente <br>" +
        "<span class='badge'>" + nPerros +
        "</span></a> Perros"
    );

    return nPerros;
}

function Eliminar(e){

    // Eliminar elemento del array
    dbPerros.splice(e, 1);

    // Actualizar localStorage
    localStorage.setItem("dbPerros", JSON.stringify(dbPerros));

    return Mensaje(2);
}

function Editar() {

    dbPerros[indice_selecionado] = JSON.stringify({
        Nombre : $("#nombre").val(),
        Dueno : $("#dueno").val(),
        Peso : $("#peso").val(),
        Fecha_nacimiento : $("#fecha_nacimiento").val(),
        Sexo : $("#sexo").val(),
        Raza : $("#raza").val(),
        Edad : $("#edad").val(),
        Color : $("#color").val()
    });

    // Actualizar localStorage
    localStorage.setItem("dbPerros", JSON.stringify(dbPerros));

    operacion = "A";

    ListarPerros();

    return true;
}

contarPerros();

// Evento submit del formulario
$("#perros-form").bind("submit", function() {

    if (operacion == "A")
        return AgregarPerro();
    else
        return Editar();

});