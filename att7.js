var nome = prompt("Nome")
var email = prompt("Email")

if(nome == ""){
 document.write("Nome obrigatório<br>")
}

if(email.indexOf("@") == -1){
 document.write("Email inválido<br>")
}
