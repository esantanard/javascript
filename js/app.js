
function reducirSize(elemento){
	elemento.style.transform = "scale(0.9, 0.9)";
}

function volverSize(elemento){
	elemento.removeAttribute("style")
}
function escribirPantalla(){
	
}


var Calculadora = {
	init : function(){
		this.teclRow();
		this.pantalla();
	},
	teclRow : function(){
		var tecl1 = document.querySelectorAll(".teclado img")
		for (var i = 0; i < tecl1.length; i++) {
			tecl1[i].onmousedown = this.eventReducirSize;
			tecl1[i].onmouseup = this.eventvolverSize;
		}
	},
	eventReducirSize: function(e){
		reducirSize(e.target)
	},
	eventReducirSizeMas: function(e){
		reducirSizeMas(e.target)
	},
	eventvolverSize: function(e){
		volverSize(e.target)
	},
	pantalla : function(){
		/*var teclas = document.querySelectorAll(".teclado img")
		for (var i = 0; i < teclas.length; i++) {
			teclas[i].onclick.innerHTML=teclas[i];			
		}
		escribirPantalla();if(pant!="0"){
			
		}else{
			document.getElementById("display").innerHTML("0");
		}*/
	}





}

Calculadora.init();

