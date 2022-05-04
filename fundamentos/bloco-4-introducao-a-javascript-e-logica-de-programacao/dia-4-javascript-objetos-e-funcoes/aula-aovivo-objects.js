let person = {
    name: 'Ronan',
    lastName: 'Salvador',
    age: 32,
    canDrive: true,
    movie: ['O patriota', 'O rei do show', 'homem aranha'],
    favoriteNumber: [12, 26],
    address: {
        street: 'rua xyz',
        number: 243,
        city: 'São Paulo',
    }
}

//console.log(person.movie.length);

//dot notacion
console.log(person.name);

// bracket notatios
console.log(person['age']);

for (let key in person) {
    //console.log(typeof person[key]);
}

person.favoriteAlbuns = ['Legiao', 'Coldplay'];
person['favoriteColors'] = ['Verde', "Azul"]

console.log(person);