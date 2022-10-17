//Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"

//Crie uma `const` no seu código para guardar a frase (com aspas e tudo)
//Usando \"\" na frase, as aspas serão colocadas na frase
const fraseCompleta = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(fraseCompleta)
console.log ("--------- nova frase -------")
//Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
//Usando apenas replace(original, novo item), apenas sera feita a mudança uma vez
const fraseCompleta2 = fraseCompleta.replace("verde","rosa").replace("azul","laranja")
console.log(fraseCompleta2)
console.log("-------- Verifique a nova frase ------")
//Verifique se a nova string inclui **verde**, e se inclui **laranja**
const novaFrase = fraseCompleta2
console.log ("Possui a palavra verde? ", novaFrase.includes("verde") , "\nPossui a palavra laranja? ",novaFrase.includes("laranja"))
console.log("----Frase maiuscula e minuscula-------")
const fraseMudanca = "BOAS VINDAS, mas não deixe o gato sair"
//Usamos o toUpperCase para deixar frases em maiusculo
const fraseMaiuscula = fraseMudanca.toUpperCase()
const fraseMinuscula ="Jorge tem uma casa verde e com portão azul, com os dizeres: "

const fraseExtra = fraseMinuscula + fraseMaiuscula 
console.log (fraseExtra)
