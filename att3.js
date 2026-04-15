var n1 = Number(prompt("Número 1"))
var op = prompt("Operação (+ - * /)")
var n2 = Number(prompt("Número 2"))
var r

if(op == "+"){ r = n1 + n2 }
if(op == "-"){ r = n1 - n2 }
if(op == "*"){ r = n1 * n2 }
if(op == "/"){ r = n1 / n2 }

document.write("Resultado: " + r + "<br>")
