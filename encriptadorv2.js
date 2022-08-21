const arrayEncriptar = [[/a/gi, "ai"], [/e/gi, "enter"], [/i/gi, "imes"], [/o/gi, "ober"], [/u/gi, "ufat"]];
const arrayDesencriptar = [[/ai/gi, "a"], [/enter/gi, "e"], [/imes/gi, "i"], [/ober/gi, "o"], [/ufat/gi, "u"]];
/*
"gato" => "gaitober"
gaitober" => "gato"
*/
let input = document.getElementById("input");

function encriptar() {
    var encript = input.value;
    for (var i=0; i<arrayEncriptar.length; i++) {
        encript = encript.replace(arrayEncriptar[i[0]], arrayEncriptar[i[1]]);
    }
}

function desencriptar() {
    var desencript = input.value;
    for (var i=0; i<arrayDesencriptar.length; i++) {
        desencript = desencript.replace(arrayDesencriptar[i[0]], arrayDesencriptar[i[1]]);
    }
}