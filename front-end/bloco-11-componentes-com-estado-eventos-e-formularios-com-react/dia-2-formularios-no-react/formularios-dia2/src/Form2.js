import React, { Component } from 'react'
import EstadoFavorito from './EstadoFavorito';
import InputNome from './InputNome';

class Form2 extends Component {
  constructor(){
    super()

    this.state = {
      carro: 'volvo',
      nome: "",
      estadoFavorito: '',
      vaiComparecer: false,
      formularioComErros: 'false',
    }
    this.handleChange = this.handleChange.bind(this);
  }

 /*  selectOption = ({ target }) => {
    
    this.setState({
      carro: target.value
    })

  }

  setName = ({ target}) => {
    this.setState({
      nome: target.value
    })
  }
 */
  handleChange( { target }) {
    console.log(target.type);
    const { name } = target
    console.lofg(name)
    const value = target.type === 'checkbox' ? target.checked : target.value
    this.setState({
      [name]: value
    });
  }

  handleError = (mensagem) => {
    console.log('chamou funcao mensagem');
    if(mensagem) {
    this.setState({
      formularioComErros: 'mudou',
    })    
  }}


  render() {
    const {estadoFavorito, nome} = this.state
    return(
      <section>
        <form>
        <label htmlFor="cars">Choose a car:</label>
          <select  id="cars" name="carro" onChange={this.handleChange}>
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          <InputNome value={nome} handleChange={this.handleChange}  handleError={this.handleError}/>
          <EstadoFavorito value={estadoFavorito} handleChange={this.handleChange}/>
          <input
            type="checkbox"
            name="vaiComparecer"
            onChange={this.handleChange}
          />
        </form>
      </section>
    )
  }
}

export default Form2;