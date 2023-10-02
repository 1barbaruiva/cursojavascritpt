const resultado= document.getElementById("resultado")
const zero = document.getElementById("0")
const um = document.getElementById("1")
const dois = document.getElementById("2")
const tres = document.getElementById("3")
const quatro = document.getElementById("4")
const cinco = document.getElementById("5")
const seis = document.getElementById("6")
const sete = document.getElementById("7")
const oito = document.getElementById("8")
const nove = document.getElementById("9")
const ponto = document.getElementById(".")
const soma = document.getElementById("+")
const subtrair = document.getElementById('-')
const multiplicar = document.getElementById("x")
const dividir = document.getElementById("/")
const igual = document.getElementById("=")

var valor1 = resultado.innerHTML;
var operacao = "";
var rs = 0;

um.onclick = function(){
    if(resultado.innerHTML =="0"){
        resultado.innerHTML="1";
    }
    else{ 
        resultado.innerHTML += "1";
    }
        
}

dois.onclick = function(){
    if(resultado.innerHTML =="0"){
        resultado.innerHTML="2";
    }
    else{ 
        resultado.innerHTML += "2";
    }
        
}

tres.onclick = function(){
    if(resultado.innerHTML =="0"){
        resultado.innerHTML="3";
    }
    else{ 
        resultado.innerHTML += "3";
    }
        
}

quatro.onclick = function(){
    if(resultado.innerHTML =="0"){
        resultado.innerHTML="4";
    }
    else{ 
        resultado.innerHTML += "4";
    }
        
}

cinco.onclick = function(){
    if(resultado.innerHTML =="0"){
        resultado.innerHTML="5";
    }
    else{ 
        resultado.innerHTML += "5";
    }
        
}

seis.onclick = function(){
    if(resultado.innerHTML =="0"){
        resultado.innerHTML="6";
    }
    else{ 
        resultado.innerHTML += "6";
    }
        
}

sete.onclick = function(){
    if(resultado.innerHTML =="0"){
        resultado.innerHTML="7";
    }
    else{ 
        resultado.innerHTML += "7";
    }
        
}
oito.onclick = function(){
    if(resultado.innerHTML =="0"){
        resultado.innerHTML="8";
    }
    else{ 
        resultado.innerHTML += "8";
    }
        
}

nove.onclick = function(){
    if(resultado.innerHTML =="0"){
        resultado.innerHTML="9";
    }
    else{ 
        resultado.innerHTML += "9";
    }
        
}

zero.onclick = function(){
    if(resultado.innerHTML =="0"){
        resultado.innerHTML="0";
    }
    else{ 
        resultado.innerHTML += "0";
    }
        
}

ponto.onclick= function(){
    resultado.innerHTML += ".";
    ponto.disabled = true;
}

dividir.onclick = function(){
    valor1 = resultado.innerHTML;
    operacao = "dividir";
    resultado.innerHTML = "0";
}

multiplicar.onclick = function(){
    valor1 = resultado.innerHTML;
    operacao = "multiplicar";
    resultado.innerHTML = "0";
}

soma.onclick = function(){
    valor1 = resultado.innerHTML;
    operacao = "soma";
    resultado.innerHTML = "0";
}

subtrair.onclick = function(){
    valor1 = resultado.innerHTML;
    operacao = "subtrair";
    resultado.innerHTML = "0";
}

igual.onclick = function(){
    switch(operacao) {
        case "dividir":
        rs = valor1 / resultado.innerHTML;
        resultado.innerHTML = rs;
        break;

        case "multiplicar":
        rs = valor1 * resultado.innerHTML;
        resultado.innerHTML = rs;
        break

        case "soma":
        rs = parseFloat(valor1 ) + parseFloat(resultado.innerHTML);
        resultado.innerHTML = rs;
        break

        case "subtrair":
        rs = valor1 - resultado.innerHTML;
        resultado.innerHTML = rs;
        break
    }
}