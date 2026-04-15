var secreto = 10
var palpite = Number(prompt("Adivinhe o número (1 a 20)"))
var tent = 1

if(palpite > secreto){
 document.write("Muito alto<br>")
}else if(palpite < secreto){
 document.write("Muito baixo<br>")
}else{
 document.write("Acertou!<br>")
}

document.write("Tentativas: " + tent + "<br>")
