//referencia ao body no documento tml
const body = document.body;
function msg(){
    console.log("Ola mundo");
}



function array1(){
    const n1 =[ 12,15,13,654654,484];
    let rs= 0;

    for(let i = 0; i< n1.length;i++){
        rs += n1[i];
    }
    console.log(n1)
    console.log("Resultado da soma " +rs);

}

function maior(){
    const n1 =[ 12,15,13,654654,484];
    let m= n1[0];
    for(let i = 1 ; i <n1.length; i++){
        if (n1[i] > m){
            m= n1[i];
        }
    }
    console.log(n1)
    console.log("O maior valor do array é" +m)
}

function calcular(){
    let numeros = prompt("Digite numeros separados por  virgula(,)")
    numeros = numeros.split(",")
    console.log(numeros);

    let rs = 0
    for (let i = 0 ; i < numeros.length ;i++ ){
        rs+=parseInt(numeros[i]);

    }
    let m = numeros[0]
    for( let i = 1 ; i <numeros.length; i++){
        if(numeros[i] > m){
            m = numeros[i]
        }
    }
    console.log(`A soma resultou em ${rs} e o maior valor é ${m}`)
}
body.onload = calcular;