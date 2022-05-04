import React, { Component } from 'react'

class EstadoFavorito extends Component {
  render(){
    const { value, handleChange } = this.props;

    let error = undefined
    if (value.length > 20) error = "texto muito grande"
    return(
      <label>
        Diga qual o seu Estado favorito!
        <textarea name="estadoFavorito" value={value} onChange={handleChange} />
        <span>{error? error : ''}</span>
      </label>
    )}       
}

export default EstadoFavorito