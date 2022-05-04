const data = require('../data/zoo_data');

const entrants = [{
  name: 'Lara Carvalho',
  age: 5,
},
{
  name: 'Frederico Moreira',
  age: 5,
},
{
  name: 'Pedro Henrique Carvalho',
  age: 5,
},
{
  name: 'Maria Costa',
  age: 18,
},
{
  name: 'Núbia Souza',
  age: 18,
},
{
  name: 'Carlos Nogueira',
  age: 50,
},
];

const entradas = {};

function countEntrants(entrants) {
  // seu código aqui iniciando
  entrants.foreach((element) => {
    let entradaCrianca = 0;
    let entradaAdulto = 0;
    let entradaSenior = 0;

    if (element.age < 18) {
      entradaCrianca += 1;
      entradas.child = entradaCrianca;
    }
    if (element.age >= 18 && element.age < 50) {
      entradaAdulto += 1;
      entradas.adult = entradaAdulto;
    } else {
      entradaSenior += 1;
      entradas.senior = entradaSenior;
    }
  });
}
/* let somaad = 0;
let somach = 0;
let somasn = 0;
entrants.forEach((element) => {
  if (element.age < 18) somach += 1;
  if (element.age >= 18 && element.age < 50) {
    somaad += 1;
  } else somasn += 1;
});
 */
/* function calculateEntry(entrants) {
  // seu código aqui

} */

module.exports = {
  calculateEntry,
  countEntrants,
};

console.log(countEntrants(entrants));

// countEntrants

// Pessoas com idade menor que 18 anos são classificadas como crianças (child);
// Pessoas com idade maior ou igual a 18 anos e menor que 50 são classicadas como adultas (adult);
// Pessoas com idade maior ou igual 50 anos são classificadas como pessoas com mais idade (senior).

// O retorno da função deverá ser um objeto no seguinte formato: { child: 3, adult: 2, senior: 1 }.

// countEntrants(entrants);
// { "child": 3, "adult": 2, "senior": 1 }

/* calculateEntry. Esta deverá receber um array de visitantes e a partir da quantidade de visitantes e faixa etária de cada um, deverá retornar o valor total a ser cobrado. */

// Exemplo -> calculateEntry(entrants); -> 187.94

// O que será avaliado

// Ao receber um array de visitantes, retorna um objeto com a contagem;
// Retorna 0 se nenhum argumento for passado;
// Retorna 0 se um objeto vazio for passado;
// Retorna o preço total a ser cobrado dado o array de pessoas.



const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui inicio
}
const teste = data.species.filter((elemento) => elemento.location === 'NE');

teste.reduce((acc, obj) => {
  let key = obj[location];

})

// console.log(location[0], name[0]);

module.exports = getAnimalMap;


/* const expected = {
  NE: ['lions', 'giraffes'],
  NW: ['tigers', 'bears', 'elephants'],
  SE: ['penguins', 'otters'],
  SW: ['frogs', 'snakes'],
};

location: 'NE', */

let pessoas = [
  { nome: 'Alice', idade: 21 },
  { nome: 'Max', idade: 20 },
  { nome: 'Jane', idade: 20 }
];

function agruparPor(objetoArray, propriedade) {
  return objetoArray.reduce(function (acc, obj) {
    let key = obj[propriedade];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

let grupodePessoas = agruparPor(pessoas, 'idade');
console.log(grupodePessoas);
// grupodePessoas é:
// {
//   20: [
//     { nome: 'Max', idade: 20 },
//     { nome: 'Jane', idade: 20 }
//   ],
//   21: [{ nome: 'Alice', idade: 21 }]
// }