let jogadora = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
}


console.log('A jogador ' + jogadora.name + ' tem ' + jogadora.age + ' anos de idade');

jogadora['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

console.log(jogadora['bestInTheWorld']);

console.table(jogadora)


console.log();
console.log('A jogadora ' + jogadora.name + ' foi eleita a melhor do mundo por ' + jogadora.bestInTheWorld.length + " vezes");