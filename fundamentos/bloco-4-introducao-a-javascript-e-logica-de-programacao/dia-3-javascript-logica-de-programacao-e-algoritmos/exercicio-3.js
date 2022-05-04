// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won".

let array = ["pedra", "papel", "tesoura"];
let player1 = array[Math.floor(Math.random() * array.length)]
let player2 = array[Math.floor(Math.random() * array.length)]

console.log("Player 1: " + player1)
console.log("Player 2: " + player2)

if (player1 === "pedra") {
    if (player2 === "pedra") {
        console.log("Tie");
    } else if (player2 === "papel") {
        console.log("Player 2 won");
    } else {
        console.log("Player 1 won");
    }
} else if (player1 === "papel") {
    if (player2 === "pedra") {
        console.log("Player 1 won");
    } else if (player2 === "papel") {
        console.log("Tie")
    } else {
        console.log("Player 2 won");
    }
} else {
    if (player2 === "pedra") {
        console.log("Player 2 won");
    } else if (player2 === "papel") {
        console.log("Player 1 won");
    } else {
        console.log("Tie")
    }
}