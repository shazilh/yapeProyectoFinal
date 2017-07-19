$(document).ready(function () {
    $('.carousel').carousel();
    validar();
});
//***Funcion de verificación pantalla Registro//***
function verificandoNumeroTel() {
	var $ingresarInput = $('#inputNumTel').val().length;
    var $ingresarInputCorrecto = $('#inputNumTel').val();
	return $ingresarInput == 10;
    console.log($ingresarInput);
    
     /*if ($ingresarInputCorrecto != Number){
        alert("Favor de ingresar solo numeros");
        $ingresarInput ="";
    }*/
}

function verificandoCheckbox() {
	var $check = $('#checkDeTerminos');
	return $check.is(':checked');
    console.log($check.is(':checked'));
}

function habilitarBoton() {
	var $btn = $('#btnContinuar');
	if(verificandoNumeroTel() && verificandoCheckbox()){
		$btn.removeClass('disabled');
	}
	else{
		$btn.addClass('disabled');
	}
}
function validar() {
	$('#inputNumTel').on('change', habilitarBoton);
	$('#checkDeTerminos').change(habilitarBoton);
}
//****Termina la función de la primera validación****



