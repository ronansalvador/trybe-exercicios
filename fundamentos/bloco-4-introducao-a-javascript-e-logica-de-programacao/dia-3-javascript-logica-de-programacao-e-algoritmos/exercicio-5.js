// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let idadeCarolzita = 18;
let idadeMurilo = 15;
let idadeBaeta = 20;

if (idadeCarolzita < idadeMurilo && idadeCarolzita < idadeBaeta) {
    console.log("Carolzita é a mais nova")
} else if (idadeBaeta < idadeCarolzita && idadeBaeta < idadeMurilo) {
    console.log("Baeta é a mais nova")
} else if (idadeMurilo < idadeCarolzita && idadeMurilo < idadeBaeta) {
    console.log("Murilo é a mais novo")
}