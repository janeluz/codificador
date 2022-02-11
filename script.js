var input = document.getElementById('input-texto');
input.addEventListener("keypress",function(e){
   if(!verifica(e)) {
      e.preventDefault();
   }
});

document.getElementById('btn-cripto').addEventListener("click", function (event){
  event.preventDefault();
  var textoCodificado =document.getElementById('input-texto').value;
  if(validarEntrada(textoCodificado)){
    return;
  };
  document.getElementById('msg').value = codificador(textoCodificado);

});

document.getElementById('btn-descripto').addEventListener("click", function(event){
  event.preventDefault();
  var textoDecodificado = document.getElementById('input-texto').value;
  if(validarEntrada(textoDecodificado)) {
    return;
  };
  document.getElementById('msg').value = decodificador(textoDecodificado);
});



document.getElementById('btn-copy').addEventListener("click", function(){
  var copiaTexto = document.getElementById('msg');
  copiaTexto.select();
  copiaTexto.setSelectionRange(0,99999);
  navigator.clipboard.writeText(copiaTexto.value);
  alert("O texto foi copiado!!");
  document.getElementById('msg').value='';
  copiaTexto.reset();
 });

function checkchar(e) {
  var char = String.fromCharCode(e.keyCode);
  var pattern = '[a-z0-9]';
  if(char.match(pattern)){
    return true;
  }
}

function codificador(textoCodificado){
  textoCodificado = textoCodificado.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');
  return textoCodificado;
}



function decodificador(textoDecodificado) {
  textoDecodificado = textoDecodificado.replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');
  return textoDecodificado;
}

function validarEntrada(entrada) {
  var retorno = false;
  if (entrada.toLowerCase() != entrada){
    alert("Utilize apenas letras minúsculas e sem acento!");
    retorno = true;
  }
  return retorno;
}

