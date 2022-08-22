const arrayEncriptar = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
/*
"gato" => "gaitober"
gaitober" => "gato"
*/
let input = document.getElementById("input");
let imagenMuneco = document.getElementById("imagen-muneco");
let mensajesPanel = document.getElementById("mensajes-panel");
let padre = document.querySelector(".panel");
let elementos = true;

/*BOTON DE COPIAR*/
function agregarBoton() {
    const boton = document.createElement("button");
    boton.id = "copiar";
    boton.className = "copiar";
    boton.type = "button";
    boton.textContent = "Copiar";
    padre.insertAdjacentElement("beforeend", boton); 
    var botonCopiar = document.getElementById("copiar");
    botonCopiar.onclick = copiarPortapapeles;
}

/* ESCONDER ELEMENTOS */
function esconderElementos() {
    imagenMuneco.style.cssText = "display:none;";
    mensajesPanel.style.cssText = "display:none;";
}

/* APARECER ELEMENTOS */
function aparecerElementos() {
    imagenMuneco.style.cssText = "display:flex;";
    mensajesPanel.style.cssText = "display:flex;";
}

/* AGREGAR SALIDA DE TEXTO */
function agregarOutput() {
    const texto = document.createElement("textarea");
    texto.id = "output";
    texto.className = "output";
    texto.readOnly = true;
    padre.style.cssText = "justify-content: flex-start;";
    padre.insertAdjacentElement("afterbegin", texto);
}

function encriptar() {
    var encript = input.value;
    if (encript!=""){
        for (var i=0; i<arrayEncriptar.length; i++) {
            encript = encript.replace(arrayEncriptar[i][0], arrayEncriptar[i][1]);
        }
        if (elementos) {
            esconderElementos();
            agregarOutput();
            agregarBoton();
        }
        elementos = false;
        var output = document.getElementById("output");
        output.value = encript;
        input.value = "";
        document.getElementById("input").focus();
    }else {
        alert("Por favor, escriba un mensaje para encriptar")
    }
}

function desencriptar() {
    var desencript = input.value;
    if (desencript!=""){
        for (var i=0; i<arrayEncriptar.length; i++) {
            desencript = desencript.replace(arrayEncriptar[i][1], arrayEncriptar[i][0]);
        }
        if (elementos) {
            esconderElementos();
            agregarOutput();
            agregarBoton();
        }
        elementos = false;
        var output = document.getElementById("output");
        output.value = desencript;
        input.value = "";
        document.getElementById("input").focus();
    }else {
        alert("Por favor, escriba un mensaje para desencriptar")
    }
}

function copiarPortapapeles() {
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
    try {
        try {
            navigator.clipboard.writeText(copyText.value);
        }catch (error) { 
            document.execCommand("copy"); /* arreglo con execCommand para móviles */
        }
        alert("Mensaje copiado al portapapeles");
        document.getElementById("input").focus();
    }catch (error) {
        alert("Algo ha ocurrido mal");
    }
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