//Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"

//Resposta da A
const fraseCompleta = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""

//Resposta da B
const fraseCompleta2 = fraseCompleta.replace("verde","rosa").replace("azul","laranja")
console.log(fraseCompleta2)

//Resposta da C
const novaFrase = fraseCompleta2
console.log ("Possui a palavra verde? ", novaFrase.includes("verde") , "\nPossui a palavra laranja? ",novaFrase.includes("laranja"))

const fraseMudanca = "BOAS VINDAS, mas não deixe o gato sair"
const fraseMaiuscula = fraseMudanca.toUpperCase()
const fraseMinuscula ="Jorge tem uma casa verde e com portão azul, com os dizeres: "

const fraseExtra = fraseMinuscula + fraseMaiuscula 
console.log (fraseExtra)
