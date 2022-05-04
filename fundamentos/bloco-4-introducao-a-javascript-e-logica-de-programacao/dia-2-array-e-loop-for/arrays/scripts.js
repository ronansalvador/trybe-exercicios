let pizzas = ['4 queijos', 'Frango com Catupiry', 'Marguerita', 'Palmito', 'Chocolate'];

// pizzas.push('Peito de Peru'); // push - > insere valor na ultima posição
// pizzas.push('Gratinada');
// pizzas.pop(); // remove o ultimo item do array
//pizzas.shift(); // remove o primeito item do array
//pizzas.unshift("pizza 1"); //insere o valor no inicio do array

// console.log(pizzas.length); // lenght -> retorna o numero de posições
// let ultimoItem = pizzas[pizzas.length - 1]; // ultimo item do array
// console.log(ultimoItem);

console.log(pizzas.sort()); // .sort() -> retonra array em ordem crescente ou a-z

//console.log(pizzas[0]); // primeiro item do array


//console.log(pizzas.indexOf("Palmito")) // indexof() - procurar o indice no array

//exibir array com for

for (let index = 0; index < pizzas.length; index++) {
    console.log(pizzas[index]);
}

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio);

menu.push('Contato')

console.log(menu); */