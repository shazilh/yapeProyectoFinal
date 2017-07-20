$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    validar();
    $('#btnContinuar').click(registrarNumeroTel);
});

var Api = {
    urlRegistro: "http://localhost:3000/api/registerNumber",
    urlCodigo: "http://localhost:3000/api//resendCode"
};

//***Funcion de verificación pantalla Registro//***
function verificandoNumeroTel() {
    var $ingresarInput = $('#inputNumTel').val().length;
    return $ingresarInput == 10;
    console.log($ingresarInput);
    /*if ($ingresarInputCorrecto != Number){
        alert("Favor de ingresar solo numeros");
        $ingresarInput ="";
    }*/
}
var validarTelefono = function (e) {
    var ascii = e.keyCode;
    var $ingresarInput = $("#inputNumTel");
    console.log(e.keyCode);
    if (ascii != 13) {
        if ($ingresarInput.val().length > 9 || ascii <= 48 || ascii >= 57) {
            return false;
        } else if (isNaN(e.key)) {
            return false
        }
    }
}

function verificandoCheckbox() {
    var $check = $('#checkDeTerminos');
    return $check.is(':checked');
    console.log($check.is(':checked'));
}

function habilitarBoton() {
    var $btn = $('#btnContinuar');
    if (verificandoNumeroTel() && verificandoCheckbox()) {
        $btn.removeClass('disabled');
    } else {
        $btn.addClass('disabled');

    }
}

function validar() {
    $('#inputNumTel').keyup(habilitarBoton);
    $('#checkDeTerminos').change(habilitarBoton);
}
//****Terminan las funciones de las primeras validaciones****

//**MANDANDO POSTS AL API
//**Primera peticion**//
var registrarNumeroTel = function (e) {
    e.preventDefault();
    var $numeroTelefono = $('#inputNumTel').val();
    console.log($numeroTelefono);
    $.post(Api.urlRegistro, {
        "phone": $numeroTelefono,
        "terms": true
    }).then(function (response) {
        console.log(response)
        alert("Código de Validación: " + response.data.code);
        window.location.href = "ingresarCodigo.html ";
        validacion(response);
    }).catch(function (error) {
        console.log(error);
        alert("El teléfono que ingresaste ya ha sido registrado");
    })
}

//**Funcion para ingresarCodigo.html
function validacion(response) {
    if (response.success == true) {
        var respuestaData = response.data;
        console.log(respuestaData);
        var terminos = respuestaData.terms;
        var telefono = respuestaData.phone;
        var codigo = respuestaData.code;
        //se declaran variables para obtener la data de la respuesta
        localStorage.setItem("phone", telefono);
        localStorage.setItem("code", codigo);
        console.log(response.data.code)


    }

};
