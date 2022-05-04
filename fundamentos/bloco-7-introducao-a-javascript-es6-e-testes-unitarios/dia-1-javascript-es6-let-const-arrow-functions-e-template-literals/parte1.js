const testingScope = escopo => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// const sortfunction = (a,b) => (a - b);
// function sortfunction (a,b){
//   return (a -b)
// }

//oddsAndEvens.sort(sortfunction = (a,b) => (a - b));


//console.log(`Os numeros ${oddsAndEvens} se encontram ordenados em ordem crescente`); // será necessário alterar essa linha 😉
console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);