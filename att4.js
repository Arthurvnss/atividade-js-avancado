var nota1 = Number(prompt("Nota 1"))
var nota2 = Number(prompt("Nota 2"))
var media = (nota1 + nota2)/2

if(media >= 7){
 document.write("Aprovado<br>")
}else if(media >= 5){
 document.write("Recuperação<br>")
}else{
 document.write("Reprovado<br>")
}

