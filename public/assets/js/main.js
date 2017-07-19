$(document).ready(function () {
    $('.carousel').carousel();
    validar();
});

var url = "http://localhost:3000/api/registerNumber";



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
        postCheck(verificandoCheckbox());
        postInput(verificandoNumeroTel());
    } else {
        $btn.addClass('disabled');

    }
}

function validar() {
    $('#inputNumTel').on('change', habilitarBoton);
    $('#checkDeTerminos').change(habilitarBoton);
}
//****Termina la función de la primera validación****

//**MANDANDO POSTS AL API
function getJSON(url) {
    return new Promise(function (resolve, reject) {
        var ajax = new XMLHttpRequest();

        ajax.open("POST", url);
        ajax.send();

        ajax.onreadystatechange = function (data) {
            if (ajax.readyState == 4) {
                resolve(JSON.parse(ajax.responseText));
            }
        }
    })

};

var postInput = function () {
    $.post(url, {
        'phone': numero
    })
}


var postCheck = function () {
    $.post(url, {
        'terms': true
    })
};
