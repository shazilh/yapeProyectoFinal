$(document).ready(function () {
    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });
    validar();
    $('#btnContinuar').click(registrarNumeroTel);
    mostrarNumTel();
});

var Api = {
    urlRegistro: "http://localhost:3000/api/registerNumber",
    urlCodigo: "http://localhost:3000/api//resendCode"
};
var $numeroTel;

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
    //console.log($numeroTelefono);

    $.post(Api.urlRegistro, {
        "phone": $numeroTelefono,
        "terms": true
    }).then(function (response) {
        //console.log(response)
        alert("Código de Validación: " + response.data.code);
        window.location.href = "ingresarCodigo.html ";
        localStorage.setItem("phone", response.data.phone);
        localStorage.setItem("code", response.data.code);
        mostrarNumTel();
        validarCodigo();
    }).catch(function (error) {
        console.log(error);
        alert("El teléfono que ingresaste ya ha sido registrado");
    })
}
//**Funcion para ingresarCodigo.html
function mostrarNumTel() {
    $('#numTelefonico').html(localStorage.getItem("phone"));
    console.log(numTelefonico);
};

//**Funcion validar codigo***
var validarCodigo = function () {
    var $codigoValidacion = localStorage.getItem("code");
    var $codigoIngresado = $('#ingresarCodigo').val();
    if ($codigoIngresado == $codigoValidacion) {
        location.href = "/static/assets/views/crearUsuario.html";
    } else {
        setTimeout();
    }
}   

setTimeout(function(){ location.href="/static/assets/views/registro.html";},21000);

