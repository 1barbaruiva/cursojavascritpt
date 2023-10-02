const numeros = [ 20,35,45,12]
console.log(numeros)
numeros.push(50)
console.log(numeros)
numeros.unshift(200)
console.log(numeros)
console.log("----Numeros add pelo usuario-----")

// var valores = prompt("Digite numeros separados por virgula(,)")
// console.log("Isso é uma string: "+valores)
// // O comando split é responsavel por pegar uma string e analisar 
// // o separador de caracteres e, assim, dividir em um array
// const array_valores = valores.split(",")
// console.log(array_valores)

// // verificar o tipo dos elementos valores e array_valores

// console.log(typeof(valores))
// console.log(typeof(array_valores))

const lista_produtos = [
["Codigo","Nome","Preço"],
["51","Mouse","R$50,20"],
["52","Teclado","R$150,00"],

];
console.log(lista_produtos);
// console.log(lista_produtos[1][1]);
lista_produtos.push(['53','ssd','R$200'])
console.log(lista_produtos)
var novo_produto = prompt("Adcione o codigo,nome e preço separado por ;").split(";")
lista_produtos.push(novo_produto)
console.log(lista_produtos)
