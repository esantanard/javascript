
function reducirSize(elemento){
	elemento.style.width = "28%";
	elemento.style.height = "60px";
}

function reducirSize2(elemento){
	elemento.style.width = "20%";
	elemento.style.height = "60px";
}

function reducirSizeMas(elemento){
	elemento.style.width = "88%";
	elemento.style.height = "98%";
}

function volverSize(elemento){
	elemento.removeAttribute("style")
}




var Calculadora = {
	init : function(){
		this.selecTecla();
		this.teclRow();
		this.teclMas();
	},
	teclRow : function(){
		var tecl1 = document.querySelectorAll(".teclado .row .col1 img")
			for (var i = 0; i < tecl1.length; i++) {
				tecl1[i].onmousedown = this.eventReducirSize;
				tecl1[i].onmouseup = this.eventvolverSize;
		}
	},
	teclMas : function(){
		var teclaMas = document.getElementById("mas")
		teclaMas.onmousedown = this.eventReducirSizeMas;
		teclaMas.onmouseup = this.eventvolverSize;
	},
	selecTecla : function(){
			
			var tecl2 = document.querySelectorAll(".teclado img")
			for (var i = 0; i < tecl2.length; i++) {
				tecl2[i].onmousedown = this.eventReducirSize2;
				tecl2[i].onmouseup = this.eventvolverSize;
			
		}
	},
	eventReducirSize: function(e){
		reducirSize(e.target)
	},
	eventReducirSize2: function(e){
		reducirSize2(e.target)
	},
	eventReducirSizeMas: function(e){
		reducirSizeMas(e.target)
	},
	eventvolverSize: function(e){
		volverSize(e.target)
	},





}

Calculadora.init();

