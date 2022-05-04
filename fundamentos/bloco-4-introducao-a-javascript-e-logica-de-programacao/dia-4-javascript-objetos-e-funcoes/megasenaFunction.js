//1 gerar um numero aleatorio

// gerar um jogo

// comparar / acertou ou não

function generateRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 60) + 1;
    return randomNumber;
}

// let numero1 = generateRandomNumber();
// let numero2 = generateRandomNumber();
// let numero3 = generateRandomNumber();
// let numero4 = generateRandomNumber();
// let numero5 = generateRandomNumber();
// let numero6 = generateRandomNumber();

function generateGame() {
    let megaSenaDraw = [];

    for (let index = 1; index <= 6; index += 1) {
        let randomNumber = generateRandomNumber();

        megaSenaDraw.push(randomNumber);

    }

    return megaSenaDraw;
}

console.log(generateGame());