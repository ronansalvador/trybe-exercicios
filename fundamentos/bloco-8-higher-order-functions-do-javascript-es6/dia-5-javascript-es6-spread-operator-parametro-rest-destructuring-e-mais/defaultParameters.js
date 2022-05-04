/* const greeting = (user) => console.log(`Welcome ${user}!`);

greeting(); // Welcome undefined! */

/* const greeting = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};

greeting(); // Welcome usuário! */


const greeting = (user = 'usuário') => console.log(`Welcome ${user}!`);

greeting(); // // Welcome usuário!

//Para Fixar

const multiply = (number, value = 1) => {
  return number * value
  // Escreva aqui a sua função
};

console.log(multiply(8));