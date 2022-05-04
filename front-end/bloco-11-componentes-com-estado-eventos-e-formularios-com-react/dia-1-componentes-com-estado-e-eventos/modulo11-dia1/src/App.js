import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
/* function handleClick() {
  console.log('Clicou no botão!')
}
function handleClick1() {
  console.log('Clicou no botão 1!')
}
function handleClick2() {
  console.log('Clicou no botão 2!')
}

class App extends React.Component {
  Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}`
  render() {
    return (
    <div>
      <button onClick={handleClick}>Meu botão</button>
      <button onClick={handleClick1}>Meu botão1</button>
      <button onClick={handleClick2}>Meu botão2</button>
    </div>
    )}
}
 */

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    /* Passando uma callback à função setState, que recebe de parâmetros
    o estado anterior e as props do componente, você garante que as atualizações
    do estado acontecerão uma depois da outra! */
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
  }
}


export default App;