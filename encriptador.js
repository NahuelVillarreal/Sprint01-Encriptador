
//La letra "e" es convertida para "enter"
const letraE = /e/gi;
//La letra "i" es convertida para "imes"
const letraI = /i/gi;
//La letra "a" es convertida para "ai"
const letraA = /a/gi;
//La letra "o" es convertida para "ober"
const letraO = /o/gi;
//La letra "u" es convertida para "ufat"
const letraU = /u/gi;

//inversa-desencriptar
const enter = /enter/gi;
const imes = /imes/gi;
const ai = /ai/gi;
const ober = /ober/gi;
const ufat = /ufat/gi;
/*
"gato" => "gaitober"
gaitober" => "gato"
*/
var first = true;

function agregaryquitar() {
    document.getElementById("imagen-muneco").remove();
    document.getElementById("mensajes-panel").remove();
    const padre = document.querySelector(".panel");
    const texto = document.createElement("textarea");
    texto.id = "output";
    texto.className = "output";
    texto.readOnly = true;
    padre.style.cssText = "justify-content: flex-start;";
    padre.insertAdjacentElement("afterbegin", texto);
}

function agregarboton() {
    const padre = document.querySelector(".panel");
    const boton = document.createElement("button");
    boton.id = "copiar";
    boton.className = "copiar";
    boton.type = "button";
    boton.textContent = "Copiar";
    padre.insertAdjacentElement("beforeend", boton);
    var botonCopiar = document.getElementById("copiar");
    botonCopiar.onclick = copiarPortapapeles;
}

function encriptar() {
    var input = document.getElementById("input").value;
    var encript = input.replace(letraE, "enter");
    encript = encript.replace(letraI, "imes");
    encript = encript.replace(letraA, "ai");
    encript = encript.replace(letraO, "ober");
    encript = encript.replace(letraU, "ufat");    
    if (first==true && encript!="") {
        agregaryquitar();
        agregarboton();
    }
    var output = document.getElementById("output");
    if (encript==""){
        alert("Por favor, ingrese un texto antes de presionar los botones.")
    }else{
        output.value = encript;
        output.style.cssText = 'height:auto; padding:0';
        output.style.cssText = 'height:' + output.scrollHeight + 'px';
        first = false;
    }

  
}

function desencriptar() {
    var input = document.getElementById("input").value;
    var desencript = input.replace(enter, "e");
    desencript = desencript.replace(imes, "i");
    desencript = desencript.replace(ai, "a");
    desencript = desencript.replace(ober, "o");
    desencript = desencript.replace(ufat, "u");
    if (first && desencript!="") {
        agregaryquitar();
        agregarboton();
    }
    var output = document.getElementById("output");
    if (desencript==""){
        alert("Por favor, ingrese un texto antes de presionar los botones.")
    }else{
        output.value = desencript;
        output.style.cssText = 'height:auto; padding:0';
        output.style.cssText = 'height:' + output.scrollHeight + 'px';
        first = false;
    }

}

function copiarPortapapeles() {
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    navigator.clipboard.writeText(copyText.value);
    alert("Mensaje copiado.");
    }

var botonEncriptar = document.getElementById("encriptar");
botonEncriptar.onclick = encriptar;
var botonDesencriptar = document.getElementById("desencriptar");
botonDesencriptar.onclick = desencriptar;

const textarea = document.getElementById("input");
textarea.addEventListener('keydown', function() {
    setTimeout(() => {
        textarea.style.cssText = 'height:auto; padding:0';
        textarea.style.cssText = 'height:' + this.scrollHeight + 'px';
    }, 0);
});

