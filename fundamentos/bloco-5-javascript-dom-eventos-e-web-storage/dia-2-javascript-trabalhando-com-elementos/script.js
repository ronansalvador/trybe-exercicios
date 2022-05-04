// arquivo script.js

console.log(document.getElementById('elementoOndeVoceEsta'));

console.log(document.getElementById('elementoOndeVoceEsta').parentNode);

document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'black';

document.querySelector('#primeiroFilhoDoFilho').innerHTML = "<h1> texto filho do flilho";

console.log(document.getElementById('pai').firstElementChild);

console.log(document.getElementById('elementoOndeVoceEsta').previousElementSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextSibling);

console.log(document.getElementById('elementoOndeVoceEsta').nextElementSibling);

console.log(document.querySelectorAll('pai')[3]);

console.log(document.querySelector('primeiroFilho'));





