let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

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