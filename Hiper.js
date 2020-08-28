// JavaScript Document




function comenzar(){
	
	$(document).ready(function(){
      	$('.slider1').bxSlider({
	  		mode: 'fade' , speed:1000, auto:true
    	})
      	$('.slider2').bxSlider({
	  		mode: 'fade' , speed:1000
    	})
      	$('.slider3').bxSlider({
	  		mode: 'fade' , speed:1000
    	})
	})
	
	
	
/*	portada();
	setInterval(portada,5000);*/
	
/*	var aviso=document.getElementById("aviso");
	aviso.addEventListener("click",aviso_legal,false);
	var aviso2=document.getElementById("aviso");
	aviso2.addEventListener("click",aviso_legal,false);
*/	

	
	
}


/*function portada(){
	
    // cambiamos la imagen y la url
    contador++
   	document.getElementById("imagen").src=imagenes[contador%imagenes.length][0];
	// document.getElementById("link").href=imagenes[contador%imagenes.length][1];
}
 

*/
function aviso_legal(){
	
	window.open("Aviso_Legal.html","Aviso Legal","width=700,height=900,scrollbars=SI");	

	
}









window.addEventListener("load",comenzar,false);
