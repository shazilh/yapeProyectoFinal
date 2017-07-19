$(document).ready(function(){
      $('.carousel').carousel();
     
    });

  var $inputRegistro = $(".inputRegistro");
     var $btnRegistro = $("#btnRegistro");
     var $form = $("#registro-form");
     var $check = $("#checkBoxRegistro");

     console.log($check);

     $form.submit(sacarNumero)
     $inputRegistro.keyup(contador)

 

 function contador() {
     var contador = $inputRegistro.val().length
     if (contador == 10) {
         $btnRegistro.removeAttr("disabled")
         
     } else {
         $btnRegistro.attr("disabled", "true")
         $check.removeAttr("checked")
     }
     
   
     
     if($check.check){
         console.log("hola");
     }

 }

 function sacarNumero(e) {
     e.preventDefault();
     console.log($inputRegistro.val())
 }

 


