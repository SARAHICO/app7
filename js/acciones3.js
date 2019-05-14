//JavaScript Document

$(document).ready(function (e){
  document.addEventListener("deviceready",function(){
	  
	  $('#izquierda').on("swipeleft",function(){
		  navigator.notification.alert("Deslizo a la izquierda",function(){"Aplicacion ","Aceptar"});
 });
 
 $('#derecha').on("swiperight",function(){
	 navigator.notification.confirm ("¿que quieres hacer?",function(opt){
	switch(opt)
	{
	case 1:
	navigator.notification.Beep(1);
	break;
	
	case 2:
	navigator.notification.Vibrate(1000);
	break;
	}
 },"Aplicacion  ","Beep,Vibrar,Cancelar");
 
});
    },false);
});
