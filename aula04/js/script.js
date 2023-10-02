let txtano= document.getElementById("txtano");
let btnverificar= document.getElementById("btnverificar");
let rs = document.getElementById("rs");

btnverificar.onclick = function(){
    // if(txtano.value % 4 ==0){
    //     rs.innerHTML = "Este ano é bissexto";
    // }
    // else{
    //     rs.innerHTML = "Este ano não é bissexto";
    // }

    rs.innerHTML = txtano.value % 4 == 0 ? "Este ano é bissexto": "Este ano não é bissexto";
};