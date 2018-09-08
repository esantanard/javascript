
function reducirSize(elemento){
	elemento.style.transform = "scale(0.9, 0.9)";
}

function volverSize(elemento){
	elemento.removeAttribute("style")
}

function escribirPantalla(elemento){
	elemento=elemento.alt
	var pant=document.getElementById("display").innerHTML
	//Aqui estoy tratando de que si lo que hay en el display es mayor a 0 y menor que uno se visualice el decimal
	if(pant=="0"){
		document.getElementById("display").innerHTML=elemento
	}else{
		if(elemento== "mas"){
			elemento= "+"
			document.getElementById("display").innerHTML+=elemento;	
		}else{
			if(elemento== "menos"){
				elemento= "-"
				document.getElementById("display").innerHTML+=elemento;	
			}else{
				if(elemento== "por"){
					elemento= "*"
					document.getElementById("display").innerHTML+=elemento;	
				}else{
					if(elemento== "dividido"){
						elemento= "/"
						document.getElementById("display").innerHTML+=elemento;	
					}else{
						if(elemento=="raiz"){

						}else{
							document.getElementById("display").innerHTML+=elemento
						}
					}
				}	
			}
		}
	}
}

//Para hacer que la calculadora realice su funcion de calcular
function calcular(opcion) {
	var resultado = 0;
	switch (opcion) {
		case "mas":
		resultado = parseFloat(elemento1) + parseFloat(elemento2)
		break;

		case "-":
		resultado = parseFloat(elemento1) - parseFloat(elemento2)
		break;

		case "igual":
		console.log(resultado);
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
		this.asignarEventCalcular();
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
		if(panta.indexOf(".")!=1){
			document.getElementById("display").insertAdjacentHTML("beforeend", ".");
		}
		else{
			
		}
	},
	asignarEventCalcular: function(){
		var rr = document.querySelectorAll(".teclas")
		for (var i = 0; i < rr.length; i++) {
			rr[i].onclick=this.eventCalcular;			
		}	
	},
	eventCalcular:function(e){
		calcular(e.target)
	}
}

Calculadora.init();

