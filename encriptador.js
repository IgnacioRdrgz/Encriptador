document.getElementById("botonEncriptar").onclick=encriptar;
            
document.getElementById("botonDesencriptar").onclick=desencriptar;
document.getElementById("copiar").onclick=copiar;
var textoCopiado = null;

function copiar(){
var aux = document.createElement("input");
aux.setAttribute("value",textoCopiado);
document.body.appendChild(aux);
aux.select();
document.execCommand("copy");
document.body.removeChild(aux);
}



function encriptar(){

let encriptado;

var palabra= document.getElementById("texto").value;
let texto = new String (palabra);

encriptado = texto.replace(/e/g,'enter');
encriptado = encriptado.replace(/i/g,'imes');
encriptado = encriptado.replace(/a/g,'ai')
encriptado = encriptado.replace(/o/g,'ober');
encriptado = encriptado.replace(/u/g,'ufat');

document.querySelector(".respuesta").value = encriptado;
document.querySelector('.imagen-clipboard').style.display = 'none';
document.querySelector('.imagen-texto').style.display = 'none';
document.querySelector('.Boton-copiar').style.display='block';


textoCopiado = encriptado;   

}

function desencriptar(){
let desencriptado;
var palabra= document.getElementById("texto").value;
let texto = new String (palabra);

desencriptado = texto.replace(/enter/g,'e');
desencriptado = desencriptado.replace(/imes/g,'i');
desencriptado = desencriptado.replace(/ai/g,'a')
desencriptado = desencriptado.replace(/ober/g,'o');
desencriptado = desencriptado.replace(/ufat/g,'u');

document.querySelector(".respuesta").value=desencriptado; 
textoCopiado = desencriptado; 
}
      