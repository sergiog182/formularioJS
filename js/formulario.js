// Recorrer los elementos y hacer que onchange ejecute una funcion para comprobar el valor de ese input
(function(){
var formulario = document.formulario_registro,
	elementos = formulario.elements;

// Funcion que se ejecuta cuando el evento click es activado

var validarInputs = function(){
	for (var i = 0; i < elementos.length; i++) {
		// Identificamos si el elemento es de tipo texto, email, password, radio o checkbox
		if (elementos[i].type == "text" || elementos[i].type == "email") {
			// Si es tipo texto, email o password vamos a comprobar que esten completados los input
			if (elementos[i].value.length == 0) {
				console.log('El campo ' + elementos[i].name + ' esta incompleto');
				elementos[i].className = elementos[i].className + " error";
				return false;
			} else {
				elementos[i].className = elementos[i].className.replace(" error", "");
			}
		}
	}

	// Comprobando que las contraseñas coincidan
	if (elementos.pass.value !== elementos.pass2.value) {
		elementos.pass.value = "";
		elementos.pass2.value = "";
		elementos.pass.className = elementos.pass.className + " error";
		elementos.pass2.className = elementos.pass2.className + " error";
	} else {
		elementos.pass.className = elementos.pass.className.replace(" error", "");
		elementos.pass2.className = elementos.pass2.className.replace(" error", "");
	}

	return true;
};

var validarRadios = function(){
	var opciones = document.getElementsByName('sexo'),
		resultado = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "radio" && elementos[i].name == "sexo"){
			// Recorremos los radio button
			for (var o = 0; o < opciones.length; o++) {
				if (opciones[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
				console.log('El campo sexo esta incompleto');
				return false;
			} else {
				// Eliminamos la clase Error del radio button
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
				return true;
			}
		}
	}
};
var validarRadios1 = function(){
	var opciones = document.getElementsByName('leng'),
		resultado = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "radio" && elementos[i].name == "leng"){
			// Recorremos los radio button
			for (var o = 0; o < opciones.length; o++) {
				if (opciones[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
				console.log('El campo esta incompleto');
				return false;
			} else {
				// Eliminamos la clase Error del radio button
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
				return true;
			}
		}
	}
};
var validarRadios2 = function(){
	var opciones = document.getElementsByName('desa'),
		resultado = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "radio" && elementos[i].name == "desa"){
			// Recorremos los radio button
			for (var o = 0; o < opciones.length; o++) {
				if (opciones[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
				console.log('El campo esta incompleto');
				return false;
			} else {
				// Eliminamos la clase Error del radio button
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
				return true;
			}
		}
	}
};
var validarRadios3 = function(){
	var opciones = document.getElementsByName('dise'),
		resultado = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "radio" && elementos[i].name == "dise"){
			// Recorremos los radio button
			for (var o = 0; o < opciones.length; o++) {
				if (opciones[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
				console.log('El campo esta incompleto');
				return false;
			} else {
				// Eliminamos la clase Error del radio button
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
				return true;
			}
		}
	}
};
var validarRadios4 = function(){
	var opciones = document.getElementsByName('ori'),
		resultado = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "radio" && elementos[i].name == "ori"){
			// Recorremos los radio button
			for (var o = 0; o < opciones.length; o++) {
				if (opciones[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
				console.log('El campo esta incompleto');
				return false;
			} else {
				// Eliminamos la clase Error del radio button
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
				return true;
			}
		}
	}
};
var validarRadios5 = function(){
	var opciones = document.getElementsByName('uti'),
		resultado = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "radio" && elementos[i].name == "uti"){
			// Recorremos los radio button
			for (var o = 0; o < opciones.length; o++) {
				if (opciones[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
				console.log('El campo esta incompleto');
				return false;
			} else {
				// Eliminamos la clase Error del radio button
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
				return true;
			}
		}
	}
};


var validarCheckbox = function(){
	var opciones = document.getElementsByName('terminos'),
		resultado = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "checkbox"){
			for (var o = 0; o < opciones.length; o++) {
				if (opciones[o].checked) {
					resultado = true;
					break;
				}
			}

			if (resultado == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
				console.log('El campo checkbox esta incompleto');
				return false;
			} else {
				// Eliminamos la clase Error del checkbox
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
				return true;
			}
		}
	}
};

var enviar = function(e){
	if (!validarInputs()) {
		console.log('Falto validar los Input');
		e.preventDefault();
	} else if (!validarRadios()) {
		console.log('Falto validar los Radio Button');
		e.preventDefault();
	}else if (!validarRadios1()) {
		console.log('Falto validar los Radio Button');
		e.preventDefault();
	}else if (!validarRadios2()) {
		console.log('Falto validar los Radio Button');
		e.preventDefault();
	}else if (!validarRadios3()) {
		console.log('Falto validar los Radio Button');
	    e.preventDefault();
	}else if (!validarRadios4()) {
		console.log('Falto validar los Radio Button');
		e.preventDefault();
	}else if (!validarRadios5()) {
		console.log('Falto validar los Radio Button');
		e.preventDefault();				
	} else if (!validarCheckbox()) {
		console.log('Falto validar Checkbox');
		e.preventDefault();
	} else {
		console.log('Envia');
		e.preventDefault();
	}
};

var focusInput = function(){
	this.parentElement.children[1].className = "label active";
	this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
};

var blurInput = function(){
	if (this.value <= 0) {
		this.parentElement.children[1].className = "label";
		this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
	}
};

// --- Eventos ---
formulario.addEventListener("Button", enviar);

for (var i = 0; i < elementos.length; i++) {
	if (elementos[i].type == "text" || elementos[i].type == "email" || elementos[i].type == "password") {
		elementos[i].addEventListener("focus", focusInput);
		elementos[i].addEventListener("blur", blurInput);
	}
}
}());

function mostrartodo(){
	
	var pregunta1 = false;
	var pregunta2 = false;
	var pregunta3 = false;
	var pregunta4 = false;
	var pregunta5 = false;
	
	// Pregunta 1
	document.getElementsByName("leng").forEach(function(element) 
		{ 
			if (element.checked) {
				if (element.id == "alto") {
					pregunta1 = true;
				}
			}
		}
	);
	if (pregunta1) {
		document.getElementById('div1').innerHTML = '<br><p><font color="green">Respuesta correcta!</font></p>';
	} else {
		document.getElementById('div1').innerHTML = '<br><font color="red">Respuesta incorrecta, C++, Fortran, Cobol, Lisp son lenguajes de alto nivel</font></p>';
	}
	document.getElementById('div1').classList.remove("hidden");
	
	// Pregunta 2
	document.getElementsByName("desa").forEach(function(element) 
		{ 
			if (element.checked) {
				if (element.id == "c") {
					pregunta2 = true;
				}
			}
		}
	);
	if (pregunta2) {
		document.getElementById('div2').innerHTML = '<br><p><font color="green">Respuesta correcta!</font></p>';
	} else {
		document.getElementById('div2').innerHTML = '<br><font color="red">Respuesta incorrecta, el lenguaje de programaci&oacute;n desarrollado por Dennis Ritchie fue C</font></p>';
	}
	document.getElementById('div2').classList.remove("hidden");
	
	// Pregunta 3
	document.getElementsByName("dise").forEach(function(element) 
		{ 
			if (element.checked) {
				if (element.id == "c++") {
					pregunta3 = true;
				}
			}
		}
	);
	if (pregunta3) {
		document.getElementById('div3').innerHTML = '<br><p><font color="green">Respuesta correcta!</font></p>';
	} else {
		document.getElementById('div3').innerHTML = '<br><font color="red">Respuesta incorrecta, el lenguaje dise&ntilde;ado a mediados de los a&ntilde;os 80 por Bjarne Stroustrup fue C++</font></p>';
	}
	document.getElementById('div3').classList.remove("hidden");
	
	// Pregunta 4
	document.getElementsByName("ori").forEach(function(element) 
		{ 
			if (element.checked) {
				if (element.id == "java2") {
					pregunta4 = true;
				}
			}
		}
	);
	if (pregunta4) {
		document.getElementById('div4').innerHTML = '<br><p><font color="green">Respuesta correcta!</font></p>';
	} else {
		document.getElementById('div4').innerHTML = '<br><font color="red">Respuesta incorrecta, El lenguaje publicado en 1995 por Sun Microssytems y desarrollado por James Gosling es Java</font></p>';
	}
	document.getElementById('div4').classList.remove("hidden");
	
	// Preguta 5
	document.getElementsByName("uti").forEach(function(element) 
		{ 
			if (element.checked) {
				if (element.id == "appweb") {
					pregunta5 = true;
				}
			}
		}
	);
	if (pregunta5) {
		document.getElementById('div5').innerHTML = '<br><p><font color="green">Respuesta correcta!</font></p>';
	} else {
		document.getElementById('div5').innerHTML = '<br><font color="red">Respuesta incorrecta, El lenguaje de programaci&oacute;n PHP es especialmente utilizado para desarrollo de aplicaciones Web</font></p>';
	}
	document.getElementById('div5').classList.remove("hidden");
	
	return false;
}
/**/

