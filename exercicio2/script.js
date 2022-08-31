const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
//Resolução A
console.log(minhaString.trim())

//Resolução B
const novaString = minhaString.trim()
console.log(minhaString.length + " caracteres e " + novaString.length + " caracteres")

//Resolução C
const minhaNovaString = minhaString.replaceAll("________","sticioso")
console.log(minhaNovaString)