/* Exercício 2 - Crie uma função que, dado um array de números inteiros, retorne a quantidade de números pares e ímpares no formato: { pares: 0, ímpares: 0 } */

let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];



function imparesPares(numeros) {
    let result = {
        pares: 0,
        impares: 0
    }

    for (const numero of numeros) {
        if (numero % 2 === 0) {
            result.pares += 1;
        } else {
            result.impares += 1;
        }
    }

    return result

}

console.log(imparesPares(arrayNumeros));