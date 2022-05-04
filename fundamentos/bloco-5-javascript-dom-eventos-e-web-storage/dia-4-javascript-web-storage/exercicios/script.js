let body = document.getElementById('fundo');
let backgroundColor = document.getElementById('backgroudColor');
let fontcolor = document.getElementById('fontColor');
let fontSize = document.getElementById('fontSize');
let spancing = document.getElementById('fontSpacing');


if (localStorage.length > 0){
  let corFundo = localStorage.getItem('colorBg');
  let corFonte = localStorage.getItem('fontColor');
  let fonte = localStorage.getItem('fonte');
  let espaco = localStorage.getItem('espacamento')
  body.style.backgroundColor = corFundo;
  body.style.color = corFonte;
  body.style.fontSize = fonte + 'px';
  body.style.wordSpacing = espaco + 'px';
};

backgroundColor.addEventListener("change", function(){
  let cor = backgroundColor.value;
  body.style.backgroundColor = cor;

  localStorage.setItem('colorBg', cor);

  //console.log(backgroundColor.value);
  
});

fontcolor.addEventListener("change", function(){
  let cor = fontcolor.value;
  body.style.color = cor; 

  localStorage.setItem('fontColor', cor);
  // fontcolor.target.value = cor;
  //console.log(fontcolor.value);
  
});

fontSize.addEventListener("change", function(){
let tamanhoFonte = fontSize.value;
body.style.fontSize = tamanhoFonte + 'px';

localStorage.setItem('fonte', tamanhoFonte);

});

spancing.addEventListener("change", function(){

let espacamento = spancing.value;
console.log(espacamento);
body.style.wordSpacing = espacamento + 'px';

localStorage.setItem('espacamento', espacamento)

});

// gabarito font family
function setFontFamily(family) {
  let paragraphs = document.getElementsByTagName("body")
  for (let index = 0; index < paragraphs.length; index += 1) {
    paragraphs[index].style.fontFamily = family
  }
  localStorage.setItem("fontFamily", family)
}

let fontFamilyButtons = document.querySelectorAll("#font-family>button")
for (let index = 0; index < fontFamilyButtons.length; index += 1) {
  fontFamilyButtons[index].addEventListener("click", function(event) {
    setFontFamily(event.target.innerHTML)
  })
}







