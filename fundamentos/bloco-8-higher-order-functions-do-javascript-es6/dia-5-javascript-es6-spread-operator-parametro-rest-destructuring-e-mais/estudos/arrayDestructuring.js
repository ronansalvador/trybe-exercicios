/* Para Fixar
1 - Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação. */

const saudacoes = ['Mensagem de saudação', (saudacao) => (saudacao)];

//console.log(saudacoes[1](saudacoes[0])); // Olá

const [banana, saudacao] = saudacoes;

console.log(`${banana}, ${saudacao()}`);

console.log(saudacao(banana));

console.log(saudacoes);


// Produza o mesmo resultado acima, porém utilizando array destructuring



/* 2 - A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis. */

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

// [comida, animal, bebida] = ['arroz', 'gato', 'água']
// [comida = 'arroz', animal = 'gato', bebida = 'água']
[comida, animal, bebida] = [bebida, comida, animal]
console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo



/* 3 - array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir. Através de array destructuring, faça com que existam apenas números pares na variável numerosPares . */

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

// console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log abaixo

[, , , ...pares] = numerosPares
const [a, b, c, ...numeros] = numerosPares 

console.log(pares);



