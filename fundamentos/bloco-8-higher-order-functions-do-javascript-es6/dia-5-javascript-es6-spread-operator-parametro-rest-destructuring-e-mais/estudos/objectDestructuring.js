/* Para Fixar
1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator . */


const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

//criar um terceiro objeto
const funcionario = {
  ...user, 
  ...jobInfos
}

console.log(funcionario);
//que terá os dados pessoais e os dados de cargo juntos
//Para isso, utilize o spread operator


/* 2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .
Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic" */

//utilize a desestruturação de objetos em conjunto com template literals

//Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"

// const {name:nome, age:idade, nationality, profession, squad, squadInitials} = funcionario;
const {name:nome, age, nationality, profession, squad, squadInitials} = funcionario;

console.log(`${age} Hi, my name is ${nome}, I'm ${age} years old and I'm ${nationality}. I work as a ${profession} and my squad is ${squadInitials}-${squad}`);


