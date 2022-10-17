//Peça para o usuaria digitar o nome e cor favorita
const nome = prompt("Qual o seu nome?")
const cor = prompt("Qual a sua cor favorita?")

//Imprima a mensagem "A cor favorita de é "
//imprima concatenado
console.log("A cor favorita de " + nome + " é " + cor)

//imprima Template String
//Usamos crases, cifrão e chaves para imprimir 
console.log(`A cor favorita de ${nome} é ${cor}`)

//Peça para o usuario uma citação favorita

const citacao = prompt("Qual sua citação favorita?")

//Adicione a citação à primeira frase e impressa entre aspas 
console.log("A cor favorita de " + nome + " é " + cor + "e sua citação favorita é \"" + citacao + "\" .")

//Imprima a frase 2 com nome na primeira linha e cor na segunda linha 
console.log(`Nome: ${nome} \nCor favorita:${cor}`)