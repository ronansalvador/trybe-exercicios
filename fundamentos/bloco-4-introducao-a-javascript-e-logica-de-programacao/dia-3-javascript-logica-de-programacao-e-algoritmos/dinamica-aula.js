// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
/* let soma = 0;

for (let index = 1; index <= 50; index += 1) {

    soma += index;

}

console.log("A soma de 1 a 50  é: " + soma); */


//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.


// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.


let contador = 0;

for (let index = 2; index <= 150; index += 1) {

    if (index % 3 === 0) {
        contador += 1

    }


}

console.log(contador);