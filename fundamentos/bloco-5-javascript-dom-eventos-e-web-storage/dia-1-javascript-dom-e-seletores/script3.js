/*      Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
        1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)*/

function changeText() {

    let paragraph = document.getElementsByTagName('p')[1];
    paragraph.innerText = 'Me vejo trabalhando com dev pleno em uma grande empresa'
    console.log(paragraph);
}

changeText();

/*2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).*/

function changeColor() {
    let alterColor = document.querySelector('main');

    alterColor.style.backgroundColor = 'rgb(76,164,109)'

}

changeColor();


/*3. Crie uma função que mude a cor do quadrado vermelho para branco.*/

function changeColorContent() {
    let changeColor = document.querySelector('.center-content');

    changeColor.style.backgroundColor = 'white'

}
changeColorContent()

//4. Crie uma função que corrija o texto da tag <h1>.

function corrigir() {

    let corigirTexto = document.querySelector('.title');

    corigirTexto.innerText = "Exercício 5.1 - JavaScripit"

}

corrigir()


//5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.

function uppercase() {
    let texto = document.querySelectorAll('p');

    for (const index of texto) {
        index.style.textTransform = 'uppercase'
    }
}
uppercase()

//6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.

function exibirConsole() {
    let paragrafo = document.querySelectorAll('p');

    for (let index = 0; index < paragrafo.length; index += 1) {
        console.log(paragrafo[index].innerHTML);
    }

}