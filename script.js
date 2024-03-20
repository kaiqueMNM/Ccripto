function criptografar(){
    var texto = textInput.value;
    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    document.getElementById('output').innerHTML = '<textarea readonly id="texto-criptografado">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar-cripto" onclick="copiar(texto-criptografado)">Copiar</button>';
}

function descriptografar(){
    var texto = textInput.value;
    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById('output').innerHTML = '<textarea readonly id="texto-descriptografado">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar-descripto" onclick="copiar(texto-descriptografado)">Copiar</button>';
}

function copiar(idTexto) {
    var textoCop = document.getElementById(idTexto);
    textoCop.select();
    document.execCommand('copy');
    alert("Texto copiado.");
}

var textInput = document.querySelector("#input-texto");