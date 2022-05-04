const acordando = () => 'Acordando!!';
const cafe = () => 'Bora tomar café!!';
const dormir = () => 'Partiu dormir!!';

const doingThings = (callback) => {
  const resultado = callback();
  console.log(resultado);
}

doingThings(acordando);
doingThings(cafe);
doingThings(dormir);

