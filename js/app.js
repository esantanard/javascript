
function reducirSize(elemento){
	elemento.style.transform = "scale(0.9, 0.9)";
}

function volverSize(elemento){
	elemento.removeAttribute("style")
}

function escribirPantalla(elemento){
	elemento=elemento.alt
	var pant=document.getElementById("display").innerHTML
	if(pant==0){
		document.getElementById("display").innerHTML="";
		document.getElementById("display").innerHTML+=elemento;	
	}else if(pant!==0){
		document.getElementById("display").innerHTML+=elemento;	
	}
	else{
		  document.getElementById("display").innerHTML=0;
	}
}


var Calculadora = {
	init : function(){
		this.asignarEventoTeclado();
		this.pantalla();
		document.getElementById("on").onclick=this.presionarON;
		document.getElementById("sign").onclick=this.agregarNegativo;
	},
	asignarEventoTeclado : function(){
		var tecl1 = document.querySelectorAll(".teclado img")
		for (var i = 0; i < tecl1.length; i++) {
			tecl1[i].onmousedown = this.eventReducirSize;
			tecl1[i].onmouseup = this.eventvolverSize;
		}
	},
	eventReducirSize: function(e){
		reducirSize(e.target)
	},
	eventvolverSize: function(e){
		volverSize(e.target)
	},
	pantalla : function(){
		var teclas = document.querySelectorAll(".teclado img")
		for (var i = 0; i < teclas.length; i++) {
			teclas[i].onclick=this.eventEscribir;			
		}	
	},
	eventEscribir : function(e){
		escribirPantalla(e.target)
	},
	presionarON : function(){
		document.getElementById("display").innerHTML=0;
	},
	agregarNegativo:function(){
		var panta = document.getElementById("display").innerHTML
		if(panta==0){
		}
		else{
			document.getElementById("display").insertAdjacentHTML("afterbegin", "-");
		}
	}
}

Calculadora.init();

