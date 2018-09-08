var primerElemento = "";
var segundoElemento= "";
var operacion="";
var resultado = "";

function reducirSize(elemento){
	elemento.style.transform = "scale(0.9, 0.9)";
}

function volverSize(elemento){
	elemento.removeAttribute("style")
}

function escribirPantalla(elemento){
	elemento=elemento.alt
	
	var pant=document.getElementById("display").innerHTML;
	if(pant=="0"){
		document.getElementById("display").innerHTML=elemento
	}else{
		document.getElementById("display").innerHTML+=elemento;	
	}
}

function sumar(){
	primerElemento=document.getElementById("display").textContent;

	document.getElementById("display").textContent="";

	operacion = "sumar";
}

function sumar(){
	primerElemento=document.getElementById("display").textContent;

	document.getElementById("display").textContent="";

	operacion = "sumar";
}

function restar(){
	primerElemento=document.getElementById("display").textContent;

	document.getElementById("display").textContent="";

	operacion = "restar";
}

function multiplicar(){
	primerElemento=document.getElementById("display").textContent;

	document.getElementById("display").textContent="";

	operacion = "multiplicar";
}

function dividir(){
	primerElemento=document.getElementById("display").textContent;

	document.getElementById("display").textContent="";

	operacion = "dividir";
}

function igual(){
	segundoElemento=document.getElementById("display").innerHTML;

	document.getElementById("display").textContent="";

	result();
}

function result(){

	switch(operacion){
		case "sumar":
		resultado=parseFloat(primerElemento) + parseFloat(segundoElemento);
		document.getElementById("display").innerHTML=resultado;
		break;
		case "restar":
		resultado=parseFloat(primerElemento) - parseFloat(segundoElemento);
		document.getElementById("display").innerHTML=resultado;
		break;
		case "multiplicar":
		resultado=parseFloat(primerElemento) * parseFloat(segundoElemento);
		document.getElementById("display").innerHTML=resultado;
		break;
		case "dividir":
		resultado=parseFloat(primerElemento) / parseFloat(segundoElemento);
		document.getElementById("display").innerHTML=resultado;
		break;
	}
}

var Calculadora = {
	init : function(){
		this.asignarEventoTeclado();
		this.pantalla();
		document.getElementById("on").onclick=this.presionarON;
		document.getElementById("sign").onclick=this.agregarNegativo;
		document.getElementById("punto").onclick=this.teclaPunto;
		document.getElementById("mas").onclick=this.eventoSumar;
		document.getElementById("menos").onclick=this.eventoRestar;
		document.getElementById("por").onclick=this.eventoMultiplica;
		document.getElementById("dividido").onclick=this.eventoDividir;
		document.getElementById("igual").onclick=this.eventoIgual;		
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
	},
	teclaPunto : function(){
		var panta = document.getElementById("display").innerHTML
		if(panta.indexOf(".")==(-1)){
			document.getElementById("display").insertAdjacentHTML("beforeend", ".");
		}else{
		
		}
	},
	eventoSumar : function(){
		sumar();
	},
	eventoRestar : function(){
		restar();
	},
	eventoMultiplica : function(){
		multiplicar();
	},
	eventoDividir : function(){
		dividir();
	},
	eventoIgual :function(){
		igual()
	}
}

Calculadora.init();

