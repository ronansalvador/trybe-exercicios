// Exericio 1 - Fatorial

let num = 4;
let fatorial = 1; // inicia em 1

for (let index = 1; index <= num; index += 1) {
    fatorial *= index;
}

console.log(fatorial);

// Exercicio 2 - inverter palavra

let word = 'tryber';
let invertida = '';

/* for (let index = 0; index < word.length; index++) {
    console.log(word[index]);

} */

for (let index = word.length - 1; index >= 0; index--) {
    invertida += word[index];
}

console.log(invertida);

// exercicio 3 - maior palavra do array e menor palavra considerando o numero de caractere de cada palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let palavra = 0;
let maiorpalavra = 0;
let texto = '';

for (let index = 0; index < array.length; index += 1) {

    palavra = (array[index].length);

    if (palavra > maiorpalavra) {
        maiorpalavra = palavra;
        texto = array[index];
    }

}

<<<<<<< HEAD
console.log("a maior palavra é " + texto + " com " + maiorpalavra + " caracteres");


// numero primo ate 50...

let numero = 50;
let div = 0;
let numPrimo = [];

for (let index = 1; index <= numero; index += 1) {
    div = 0;
    for (let index2 = 1; index2 <= index; index2 += 1) {
        if (index % index2 == 0) {
            div += 1;
        }
    }
    if (div == 2) {
        numPrimo.push(index)
    }
}

console.log("Numeros primos entre 1 - 50: " + numPrimo);
console.log("O maior numero primo do intervalo de 1 a 50 é: " +
    numPrimo[numPrimo.length - 1]);
=======
console.log("a maior palavra é " + texto + " com " + maiorpalavra + " caracteres");
>>>>>>> main
