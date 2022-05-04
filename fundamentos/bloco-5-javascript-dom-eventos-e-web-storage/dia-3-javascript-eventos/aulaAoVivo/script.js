let input = document.querySelector('#inputValue');

input.addEventListener('input', function(event){

const techElement = document.querySelector('.techElement');

console.log(event.target);
techElement.innerText = event.target.value;

})

//

//

let btnCar = document.querySelector('#id-do-botao');
let car1 = document.querySelector('.car1')
let car2 = document.querySelector('.car2')
car1.style.marginleft = '0';
car2.style.marginleft = '0';

console.log((btnCar));

btnCar.addEventListener("click", function(){
  let inputValue = document.querySelector('#inputValue');
  console.log(inputValue).value;
  car1.style.marginleft = Math.random()*100 + 'px'
console.log('teste');
});

