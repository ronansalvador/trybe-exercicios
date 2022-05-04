function nomeDaFuncao(param1, param2) {
    //código que faz alguma coisa    
    let resultado = param1 + param2
    return resultado


}

console.log(nomeDaFuncao(10, 20));

let statusCarro = 'desligado';
let aceleracao = 0;
let rotacaoDoVolante = 0;

function ligarDesligar() {
    if (statusCarro === 'desligado') {
        statusCarro = 'ligado';
    } else {
        statusCarro = 'desligado';
    }
    return statusCarro;
}

function acelerar(incremento) {
    aceleracao += incremento;

    return "acelerando a " + aceleracao + "m/s²";
}

function frear(decremento) {
    aceleracao -= decremento;

    return "Desalerando para " + aceleracao + "m/s²";

}

function girarVolante(anguloRotacao) {
    rotacaoDoVolante = anguloRotacao;
    return rotacaoDoVolante + "º";

}


console.log(ligarDesligar());
console.log(acelerar(20));
console.log(girarVolante(-45));
console.log(frear(5));
console.log(girarVolante(0));
console.log(frear(15));
console.log(ligarDesligar());


function maiorNum(primeiroNum, segundoNum) {
    if (primeiroNum > segundoNum) {
        return primeiroNum + ' é maior que ' + segundoNum;
    } else if (segundoNum > primeiroNum) {
        return segundoNum + ' é maior que ' + primeiroNum;
    } else {
        return 'Os números são iguais';
    }
}

console.log(maiorNum(10, 20)); // 20 é maior que 10
console.log(maiorNum(2, -5)); // 2 é maior que -5
console.log(maiorNum(1, 1)); // Os números são iguais