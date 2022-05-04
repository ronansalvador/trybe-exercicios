let isaacJogo = [10, 12, 16, 40, 51, 57];

// jogo sorteado

let num1 = Math.floor(Math.random() * 60) + 1;
let num2 = Math.floor(Math.random() * 60) + 1;
let num3 = Math.floor(Math.random() * 60) + 1;
let num4 = Math.floor(Math.random() * 60) + 1;
let num5 = Math.floor(Math.random() * 60) + 1;
let num6 = Math.floor(Math.random() * 60) + 1;

let megaSenaJogo = [num1, num2, num3, num4, num5, num6];

for (let index = 0; index < isaacJogo.length; index += 1) {
    console.log('Jogo do Isaac: ' + isaacJogo[index]);
}

for (let index2 = 0; index2 < megaSenaJogo.length; index2 += 1) {
    console.log('Jogo do sorteado: ' + megaSenaJogo[index2]);
}

// comparando
let acertos = 0;

for (let index = 0; index < isaacJogo.length; index += 1) {

    for (let index2 = 0; index2 < megaSenaJogo.length; index2 += 1) {
        if (isaacJogo[index] === megaSenaJogo[index2]) {
            acertos = acertos + 1;
        }
    }
}

console.log(acertos);