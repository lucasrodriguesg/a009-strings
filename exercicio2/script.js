const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//Remova o excesso de espaços no final da string
//Usando o codigo .trim() removemos os espaços das frases 
console.log(minhaString.trim())

//exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços
//Usamos o .length para saber quantos caracteres há na frase
const novaString = minhaString.trim()
console.log("Temos " + minhaString.length + " caracteres na frase original e " + novaString.length + " caracteres na frase ajustada")

//Substitua os traços `________` por “sticioso”
//Usamos replaceAll( Aqui colocamos o que vai mudar, pelo que vai mudar)
const minhaNovaString = minhaString.replaceAll("________","sticioso")
console.log(minhaNovaString)