tabuada

contador = contador + 1 == contador++ == contador += 1

// let numero = 9;
// for (let contador = 1; contador <= 9; contador++) {
//     console.log(" ")
//     console.log(numero * contador)

// }

// console.log("");

// // for com array

// let listaDeNome = ["Joana", "Maria", "Lucas"];

// for (let indice = 0; indice < listaDeNome.length; indice += 1) {
//     let mensagem = ("Boas vindas, " + listaDeNome[indice] + "!");
//     console.log(mensagem);

// }

// let cars = ['Saab', 'Volvo', 'BMW'];

// for (let index = 0; index < cars.length; index += 1) {
//     console.log(cars[index]);
// }

// console.log("");

// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index]);

// }

// for of


let numeros = [1, 2, 3, 4, 5];
for (let numero of numeros) {
    console.log(numero);
}

// resultado: 
//1
//2
//3
//4
//5

console.log("");
let word = 'Hello';
for (let letter of word) {
    console.log(letter);
}
// resultado:
// "H"
// "e"
// "l"
// "l"
// "o"

console.log("");
let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
    sum += 1;
    console.log(sum);
}
// 11
// 21
// 31

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let nameUser of names) {
    console.log(nameUser);

}

console.log("");
console.log("Exercicios");

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);

}
console.log("");
//soma todos osa elementos do array
let soma = 0;

for (let index = 0; index < numbers.length; index += 1) {
    soma += numbers[index];
}
console.log(soma);

let media = soma / (numbers.length);
console.log(media);

if (media > 20) {
    console.log("Valor final maior que 20");
} else {
    console.log("Valor menor ou igual a 20");
}


let valorMaior = 0;
let valorMenor = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > valorMaior) {
        valorMaior = numbers[index];
        valorMenor = valorMaior;
    }

    if (numbers[index] < valorMenor) {
        valorMenor = numbers[index]
    }

}

console.log(valorMaior);
console.log(valorMenor);


//verifica quantos numeros impares tem no array
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let isImpar = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 1) {
        isImpar = isImpar + 1;
    }
}

console.log(isImpar)

let newArray = [];
let numero = 0;

for (let index = 0; index < 25; index++) {
    newArray.push(index + 1);
}

console.log(newArray);

for (const divTwo of newArray) {
    console.log(divTwo / 2);
}
// fazer commit com branch 4.2