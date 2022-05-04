//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 20;

if (idade >= 18) {
    console.log('A pessoa é maior de idade');
} else {
    console.log("Menor de idade");
}

console.log("");
console.log("utilizando operador ternário");

idade > 18 ? console.log("A pessoa é maior de idade") : console.log('Menor de idade');;