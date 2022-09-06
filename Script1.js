// JavaScript source code
const input_texto=document.querySelector(".text_input");
const mensaje= document.querySelector(".mensaje");
const copy = document.querySelector(".boton_copiar");
copy.style.display = "none";


// Declarar una funcion que permite llamar a la funcion que busca vocales en el boton "Encriptar"
function boton_encriptar(){
	
	const texto_encriptado = encriptar_texto(input_texto.value);
	mensaje.value = texto_encriptado;
	input_texto.value = "";
	copy.style.display = "block";
	const munieco = document.querySelector(".muneco");
	munieco.style.display="none";
	const text = document.querySelector(".parrafo");
	text.style.display="none";
}


// Declarar una funcion que permite buscar en una cadena de texto ingresada por el usuario las vocales y reemplazarlas por la clave

function encriptar_texto(palabra_no_encriptada){
	let clave = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
	palabra_no_encriptada = palabra_no_encriptada.toLowerCase();
	palabra_encriptada="";
	let auxiliar="";
	

	for (let i=0; i < palabra_no_encriptada.length; i++){
		entro=false;
		for (let j=0; j < clave.length; j++){
			if (palabra_no_encriptada[i] == (clave[j][0])) {
				auxiliar =  (clave[j][1]);
				entro=true;
				
			}
			if (entro==false) { 
				auxiliar = palabra_no_encriptada[i];	
				
			}
			
		}	
		palabra_encriptada=palabra_encriptada+auxiliar;
		auxiliar="";
		
	}
	return palabra_encriptada;	
}


// Declarar una funcion que permite llamar a la funcion para desencriptar
function boton_desencriptar(){
	const texto_desencriptado = desencriptar_texto(input_texto.value);
	mensaje.value = texto_desencriptado;
	mensaje.style.backgroundImage = "none";
	input_texto.value = "";
	copy.style.display = "block";
	const munieco = document.querySelector(".muneco");
	munieco.style.display="none";
}


// Declarar una funcion que permite desencriptar una cadena de texto
function desencriptar_texto(texto_encriptado){
	let clave = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    texto_encriptado = texto_encriptado.toLowerCase();

    for (let i=0; i < clave.length; i++) {
        if (texto_encriptado.includes(clave[i][1])) {
            texto_encriptado = texto_encriptado.replaceAll(clave[i][1], clave[i][0])
        }
    }
    return texto_encriptado;
}

// Declarar una funcion que permite copiar la cadena de texto

function copiar(){
	mensaje.select ();
	navigator.clipboard.writeText(mensaje.value);
	mensaje.value="";
	alert("Texto copiado al portapapeles");
	const munieco = document.querySelector(".muneco");
	munieco.style.display="block";
	copy.style.display = "none";
}



